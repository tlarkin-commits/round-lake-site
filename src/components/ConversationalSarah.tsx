"use client";

import React, { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'sarah';
  message: string;
  timestamp: Date;
}

interface ConversationalSarahProps {
  propertyId: string;
  apiBaseUrl?: string;
  isOpen: boolean;
  onClose: () => void;
  initialFlow?: 'apply' | 'tour' | 'learn' | 'contact' | 'general';
}

const ConversationalSarah: React.FC<ConversationalSarahProps> = ({ 
  propertyId, 
  apiBaseUrl = 'https://ops.coastmhp.com',
  isOpen,
  onClose,
  initialFlow = 'general'
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('greeting');
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize conversation based on button clicked
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initializeConversation();
    }
  }, [isOpen, initialFlow]);

  const initializeConversation = () => {
    let welcomeMessage = '';
    
    switch (initialFlow) {
      case 'apply':
        welcomeMessage = `Hi! I'm Sarah from Rancho Corrido Park. I'm so excited you're interested in applying for residency! I'd love to help guide you through the process and make sure you have everything you need. 

To get started, could you tell me your name?`;
        setCurrentStep('collect_name');
        break;
        
      case 'tour':
        welcomeMessage = `Hello! I'm Sarah, and I'd love to help you schedule a tour of our beautiful community! Seeing Rancho Corrido in person really shows you what makes it special - our mountain views, peaceful atmosphere, and friendly neighbors.

What's your name so I can personalize your tour experience?`;
        setCurrentStep('collect_name');
        break;
        
      case 'learn':
        welcomeMessage = `Hi there! I'm Sarah from Rancho Corrido Park. I'm here to answer any questions you have about our community - from amenities and pricing to what makes living here so special.

What would you like to know about first? Our amenities, pricing, or something else?`;
        setCurrentStep('information');
        break;
        
      case 'contact':
        welcomeMessage = `Hello! I'm Sarah from Rancho Corrido Park. I'm here to help connect you with the right person for your needs. 

Are you looking to ask questions about our community, schedule a visit, or something else?`;
        setCurrentStep('routing');
        break;
        
      default:
        welcomeMessage = `Hi! I'm Sarah, your personal assistant for Rancho Corrido Park. I'm here to help you discover our peaceful community in beautiful San Diego County.

What brings you here today?`;
        setCurrentStep('discovery');
    }
    
    const newMessage: ChatMessage = {
      id: 'welcome',
      sender: 'sarah',
      message: welcomeMessage,
      timestamp: new Date()
    };
    
    setMessages([newMessage]);
  };

  const handleResponse = async (userInput?: string) => {
    const messageText = userInput || currentMessage;
    if (!messageText.trim() && currentStep !== 'lead_form') return;

    // Add user message if there's text input
    if (messageText.trim()) {
      const userMessage: ChatMessage = {
        id: `user_${Date.now()}`,
        sender: 'user',
        message: messageText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, userMessage]);
    }

    setCurrentMessage('');
    setIsLoading(true);

    let sarahResponse = '';
    let nextStep = currentStep;

    // Conversational flow logic
    switch (currentStep) {
      case 'collect_name':
        if (messageText.trim()) {
          setLeadData(prev => ({ ...prev, name: messageText }));
          sarahResponse = `Nice to meet you, ${messageText}! `;
          
          if (initialFlow === 'apply') {
            sarahResponse += `I'd love to learn a bit about your housing needs to make sure Rancho Corrido is a perfect fit. 

Are you looking for:
• A permanent residence
• A temporary stay (we allow up to 90 days)
• Something for yourself or family members?`;
            nextStep = 'housing_needs';
          } else if (initialFlow === 'tour') {
            sarahResponse += `I'd love to schedule a tour that focuses on exactly what you're looking for.

Are you interested in:
• RV spaces with full hookups
• Mobile home options
• Just want to see the whole community?`;
            nextStep = 'tour_focus';
          }
        }
        break;

      case 'housing_needs':
        sarahResponse = `That's helpful! To make sure I connect you with the right information and our property manager can prepare for your call, could you share your best contact information?

What's a good phone number or email where we can reach you?`;
        nextStep = 'collect_contact';
        break;

      case 'tour_focus':
        sarahResponse = `Perfect! I'll make sure our property manager knows to focus on that during your tour. 

What's the best phone number to reach you to schedule a convenient time?`;
        nextStep = 'collect_contact';
        break;

      case 'collect_contact':
        if (messageText.includes('@')) {
          setLeadData(prev => ({ ...prev, email: messageText }));
        } else if (/\d{3}[-\s]?\d{3}[-\s]?\d{4}/.test(messageText)) {
          setLeadData(prev => ({ ...prev, phone: messageText }));
        }
        
        sarahResponse = `Perfect! I've saved your information. Our property manager will contact you within 2 hours during business hours (or first thing the next business day).

In the meantime, is there anything specific you'd like me to let them know about your situation or questions you have?`;
        nextStep = 'final_notes';
        break;

      case 'final_notes':
        // Create the lead
        await createLead();
        sarahResponse = `Thank you so much! I've passed along your information and those details to our property manager. You should hear from them very soon.

Feel free to keep browsing our website, and don't hesitate to reach out if you think of any other questions!`;
        nextStep = 'completed';
        break;

      case 'information':
        sarahResponse = await getInformationalResponse(messageText);
        // Stay in information mode
        break;

      default:
        sarahResponse = await getGeneralResponse(messageText);
    }

    const newSarahMessage: ChatMessage = {
      id: `sarah_${Date.now()}`,
      sender: 'sarah',
      message: sarahResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newSarahMessage]);
    setCurrentStep(nextStep);
    setIsLoading(false);
  };

  const getInformationalResponse = async (message: string): Promise<string> => {
    // Use the existing chat API for informational responses
    try {
      const response = await fetch(`${apiBaseUrl}/api/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          propertyId,
          sessionId: sessionId || undefined,
          visitorInfo: { page: window.location.pathname }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.sessionId && !sessionId) {
          setSessionId(data.sessionId);
        }
        return data.response + "\n\nWhat else would you like to know about our community?";
      }
    } catch (error) {
      console.error('Error getting response:', error);
    }
    
    return "I'd be happy to help with that! Could you give me a call at our office, or would you like me to have our property manager contact you directly?";
  };

  const getGeneralResponse = async (message: string): Promise<string> => {
    // Similar to getInformationalResponse but more general
    return getInformationalResponse(message);
  };

  const createLead = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/api/chat/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: leadData.name,
          email: leadData.email || null,
          phone: leadData.phone || null,
          propertyId,
          sessionId: sessionId || `session_${Date.now()}`,
          source: `website-${initialFlow}`
        })
      });

      if (response.ok) {
        console.log('Lead created successfully');
      }
    } catch (error) {
      console.error('Error creating lead:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        width: '100%',
        maxWidth: '500px',
        height: '80vh',
        maxHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '20px',
          borderRadius: '12px 12px 0 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Sarah - Personal Assistant</h3>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Rancho Corrido Park</p>
          </div>
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
              }}
            >
              <div
                style={{
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: message.sender === 'user' ? '#2563eb' : '#f3f4f6',
                  color: message.sender === 'user' ? 'white' : '#1f2937',
                  whiteSpace: 'pre-line'
                }}
              >
                <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5' }}>{message.message}</p>
                <p style={{ margin: '6px 0 0 0', fontSize: '12px', opacity: 0.7 }}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                backgroundColor: '#f3f4f6',
                borderRadius: '16px',
                padding: '12px 16px',
                display: 'flex',
                gap: '6px'
              }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s infinite' }}></div>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s infinite 0.2s' }}></div>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#9ca3af', borderRadius: '50%', animation: 'bounce 1.4s infinite 0.4s' }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        {currentStep !== 'completed' && (
          <div style={{
            borderTop: '1px solid #e5e5e5',
            padding: '20px',
            display: 'flex',
            gap: '12px'
          }}>
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleResponse()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '24px',
                outline: 'none',
                fontSize: '15px'
              }}
              disabled={isLoading}
            />
            <button
              onClick={() => handleResponse()}
              disabled={isLoading}
              style={{
                padding: '12px 20px',
                border: 'none',
                borderRadius: '24px',
                backgroundColor: isLoading ? '#9ca3af' : '#2563eb',
                color: 'white',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontSize: '15px',
                fontWeight: '500'
              }}
            >
              Send
            </button>
          </div>
        )}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default ConversationalSarah;