"use client";

import React, { useState, useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/gtag';

const OPS_API_URL = 'https://ops.coastmhp.com';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ConversationalSarahProps {
  propertyId: string;
  isOpen: boolean;
  onClose: () => void;
  initialFlow?: string;
}

function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return '';
  const key = 'rc_chat_session';
  let id = localStorage.getItem(key);
  if (!id) {
    id = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(key, id);
  }
  return id;
}

const ConversationalSarah: React.FC<ConversationalSarahProps> = ({
  propertyId,
  isOpen,
  onClose,
  initialFlow = 'general'
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [initialized, setInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Load history once on first open
  useEffect(() => {
    if (!isOpen || initialized) return;

    const sid = getOrCreateSessionId();
    setSessionId(sid);
    setInitialized(true);

    fetch(`${OPS_API_URL}/api/chat/external/${sid}`)
      .then(r => r.json())
      .then(data => {
        if (data.messages?.length > 0) {
          // Restore existing conversation — no greeting needed
          setMessages(data.messages.map((m: any) => ({
            role: m.role,
            content: m.content
          })));
        } else {
          // First visit — show a single concise greeting
          setMessages([{
            role: 'assistant',
            content: "Hi! I'm Sarah from Round Lake Community. What can I help you with today?"
          }]);
        }
      })
      .catch(() => {
        setMessages([{
          role: 'assistant',
          content: "Hi! I'm Sarah from Round Lake Community. What can I help you with today?"
        }]);
      });
  }, [isOpen, initialized]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Track first user message as lead event
    if (messages.filter(m => m.role === 'user').length === 0) {
      trackEvent('generate_lead', { method: 'chat', entry_point: initialFlow });
    }

    try {
      const res = await fetch(`${OPS_API_URL}/api/chat/external`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          propertyId,
          message: text,
          visitorInfo: {
            referrer: typeof document !== 'undefined' ? document.referrer : '',
            entryPoint: initialFlow
          }
        })
      });

      const data = await res.json();

      if (data.success && data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: "Sorry, I'm having trouble right now. You can reach us at (760) 742-3755."
        }]);
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "Sorry, I'm having trouble right now. You can reach us at (760) 742-3755."
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white', borderRadius: '12px',
        width: '100%', maxWidth: '500px', height: '80vh', maxHeight: '600px',
        display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#1a1a2e', color: 'white', padding: '16px 20px',
          borderRadius: '12px 12px 0 0',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src="/images/round-lake/logo.jpg"
              alt="Round Lake Community"
              style={{ width: '48px', height: '48px', objectFit: 'contain', borderRadius: '8px', backgroundColor: 'white', padding: '4px' }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', letterSpacing: '0.01em' }}>Sarah</h3>
              <p style={{ margin: 0, fontSize: '12px', opacity: 0.75 }}>Round Lake · Leasing Assistant</p>
            </div>
          </div>
          <button onClick={onClose} style={{
            backgroundColor: 'transparent', border: 'none', color: 'white',
            fontSize: '22px', cursor: 'pointer', padding: '4px 8px', opacity: 0.8
          }}>✕</button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1, overflowY: 'auto', padding: '20px',
          display: 'flex', flexDirection: 'column', gap: '12px'
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
            }}>
              <div style={{
                maxWidth: '85%', padding: '12px 16px', borderRadius: '16px',
                backgroundColor: msg.role === 'user' ? '#2563eb' : '#f3f4f6',
                color: msg.role === 'user' ? 'white' : '#1f2937',
                fontSize: '15px', lineHeight: '1.5', whiteSpace: 'pre-line'
              }}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                backgroundColor: '#f3f4f6', borderRadius: '16px',
                padding: '12px 16px', color: '#6b7280', fontSize: '15px'
              }}>
                Typing…
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          borderTop: '1px solid #e5e5e5', padding: '16px',
          display: 'flex', gap: '10px'
        }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything about Round Lake…"
            disabled={loading}
            style={{
              flex: 1, padding: '12px 16px',
              border: '1px solid #d1d5db', borderRadius: '24px',
              outline: 'none', fontSize: '15px'
            }}
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            style={{
              padding: '12px 20px', border: 'none', borderRadius: '24px',
              backgroundColor: loading || !input.trim() ? '#9ca3af' : '#2563eb',
              color: 'white', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
              fontSize: '15px', fontWeight: '500'
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationalSarah;
