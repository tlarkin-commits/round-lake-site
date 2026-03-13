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
  initialFlow?: 'apply' | 'tour' | 'learn' | 'contact' | 'general' | 'permanent-rv' | 'mobile-homes' | 'temporary';
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
  const [leadData, setLeadData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    stayType: '',
    timeline: '',
    budget: '',
    groupSize: '',
    notes: ''
  });
  const [conversationActive, setConversationActive] = useState(true);
  const [leadCreated, setLeadCreated] = useState(false);
  
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
    let stayType = '';
    
    switch (initialFlow) {
      case 'apply':
      case 'permanent-rv':
        stayType = 'permanent-rv';
        welcomeMessage = `Hi! I'm Sarah from Rancho Corrido Park. I'm excited you're interested in permanent RV living! 🏕️

Our permanent residents love the peaceful community atmosphere, stunning mountain views, and the convenience of being close to everything - beaches, wine country, and casinos.

I'm here to answer any questions you have and help you learn about our community. What would you like to know about living here?`;
        setLeadData(prev => ({ ...prev, stayType: 'permanent-rv' }));
        break;
        
      case 'mobile-homes':
        stayType = 'mobile-homes';
        welcomeMessage = `Hello! I'm Sarah, and I'd love to help you learn about our beautiful park model mobile homes! 🏠

We have 1 bedroom, 1 bathroom park models available for rent. They come fully equipped with kitchen appliances, utilities included, and are move-in ready. Perfect for someone who wants the community feel without needing their own RV.

What questions do you have about our mobile homes or community?`;
        setLeadData(prev => ({ ...prev, stayType: 'mobile-homes' }));
        break;
        
      case 'temporary':
        stayType = 'temporary';
        welcomeMessage = `Hi there! I'm Sarah from Rancho Corrido Park. Our temporary stays are incredibly popular with travel nurses, contractors, and seasonal workers! 🚛

We offer stays up to 90 days with full hookups, all amenities, and flexible nightly or weekly rates. Many of our temporary guests end up loving it so much they become permanent residents!

What brings you to the area, and what would you like to know about our temporary stay options?`;
        setLeadData(prev => ({ ...prev, stayType: 'temporary' }));
        break;
        
      case 'tour':
        welcomeMessage = `Hello! I'm Sarah, and I'd love to help you learn about our beautiful community! 🌄

Rancho Corrido offers peaceful country living with mountain views, friendly neighbors, and all the amenities you need. Whether you're interested in RV spaces or our mobile homes, I'm here to answer your questions.

What would you like to know about our community?`;
        break;
        
      case 'learn':
        welcomeMessage = `Hi there! I'm Sarah from Rancho Corrido Park. I'm here to answer any questions you have about our community! 🏔️

We're located in beautiful Pauma Valley with mountain views, full amenities, and that perfect balance of peaceful country living close to everything you need. We offer permanent RV sites, mobile home rentals, and temporary stays.

What would you like to learn about?`;
        break;
        
      case 'contact':
        welcomeMessage = `Hello! I'm Sarah from Rancho Corrido Park. I'm here to help with any questions or concerns you might have! 🌟

Whether you're curious about pricing, availability, amenities, or life in our community, I'm here to help. What can I tell you about Rancho Corrido?`;
        break;
        
      default:
        welcomeMessage = `Hi! I'm Sarah, your personal assistant for Rancho Corrido Park. I'm here to help you discover our peaceful community in beautiful San Diego County! 🌊

Whether you're interested in permanent RV living, mobile homes, temporary stays, or just want to learn more about our community, I'm here to answer your questions.

What brings you here today?`;
    }
    
    const newMessage: ChatMessage = {
      id: 'welcome',
      sender: 'sarah',
      message: welcomeMessage,
      timestamp: new Date()
    };
    
    setMessages([newMessage]);
  };

  const extractLeadInfo = (conversation: ChatMessage[]) => {
    const allText = conversation
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.message)
      .join(' ');
    
    const extracted = { ...leadData };
    
    // Extract name patterns (improved parsing)
    const namePatterns = [
      /(?:my name is|i'm|i am|this is|call me|name's)\s+([a-zA-Z]+(?:\s+[a-zA-Z]+)?)/i,
      /^([a-zA-Z]+(?:\s+[a-zA-Z]+)?),?\s+(?:here|speaking|calling)/i
    ];
    
    for (const pattern of namePatterns) {
      const nameMatch = allText.match(pattern);
      if (nameMatch && nameMatch[1] && nameMatch[1].length > 1) {
        extracted.name = nameMatch[1].trim();
        break;
      }
    }
    
    // Extract email
    const emailMatch = allText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      extracted.email = emailMatch[0];
    }
    
    // Extract phone (multiple formats)
    const phonePatterns = [
      /(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/,
      /(?:\+?1[-.\s]?)?([0-9]{3})[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/
    ];
    
    for (const pattern of phonePatterns) {
      const phoneMatch = allText.match(pattern);
      if (phoneMatch) {
        extracted.phone = phoneMatch[0].replace(/[^\d]/g, '').replace(/^1/, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        break;
      }
    }
    
    // Extract timeline/move-in
    const timelineKeywords = /(immediately|asap|next week|next month|in a few weeks|in a month|this year|next year|looking to move)/i;
    const timelineMatch = allText.match(timelineKeywords);
    if (timelineMatch) {
      extracted.timeline = timelineMatch[0];
    }
    
    // Extract budget mentions
    const budgetMatch = allText.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)\s*(?:per month|monthly|\/month|budget)/i);
    if (budgetMatch) {
      extracted.budget = budgetMatch[0];
    }
    
    // Compile relevant notes (not the full conversation)
    const relevantInfo = [];
    if (extracted.timeline) relevantInfo.push(`Timeline: ${extracted.timeline}`);
    if (extracted.budget) relevantInfo.push(`Budget: ${extracted.budget}`);
    
    // Add any specific requirements or questions mentioned
    const requirementKeywords = /(pet|dog|cat|accessible|wheelchair|wifi|pool|laundry)/i;
    const requirements = allText.match(new RegExp(requirementKeywords.source, 'gi'));
    if (requirements) {
      relevantInfo.push(`Interests: ${Array.from(new Set(requirements)).join(', ')}`);
    }
    
    extracted.notes = relevantInfo.join('. ');
    
    return extracted;
  };

  const shouldCreateLead = () => {
    return leadData.name && (leadData.email || leadData.phone) && !leadCreated;
  };

  const handleResponse = async (userInput?: string) => {
    const messageText = userInput || currentMessage;
    if (!messageText.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      message: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      // Extract lead info from all messages
      const updatedMessages = [...messages, userMessage];
      const extractedInfo = extractLeadInfo(updatedMessages);
      setLeadData(extractedInfo);

      // Get AI response from the existing chat API
      const response = await fetch(`${apiBaseUrl}/api/chat/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          propertyId,
          sessionId: sessionId || undefined,
          visitorInfo: { 
            page: window.location.pathname, 
            entryPoint: initialFlow,
            leadInfo: extractedInfo 
          }
        })
      });

      let sarahResponse = '';
      
      if (response.ok) {
        const data = await response.json();
        if (data.sessionId && !sessionId) {
          setSessionId(data.sessionId);
        }
        sarahResponse = data.response;
      } else {
        sarahResponse = "I'd be happy to help with that! Let me connect you with our property manager who can give you the most up-to-date information. Is there anything else you'd like to know about our community?";
      }

      // Check if we should create a lead
      if (shouldCreateLead()) {
        await createLead(extractedInfo);
        setLeadCreated(true);
        
        // Add a subtle note about follow-up
        sarahResponse += "\n\n✨ I've noted your contact information so our property manager can follow up with you personally with detailed information and availability.";
      }

      const newSarahMessage: ChatMessage = {
        id: `sarah_${Date.now()}`,
        sender: 'sarah',
        message: sarahResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newSarahMessage]);
      
    } catch (error) {
      console.error('Error getting response:', error);
      
      const errorMessage: ChatMessage = {
        id: `sarah_${Date.now()}`,
        sender: 'sarah',
        message: "I'm having a small technical issue, but I'm still here to help! What else would you like to know about Rancho Corrido?",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const createLead = async (extractedInfo: typeof leadData) => {
    try {
      const leadPayload = {
        name: extractedInfo.name,
        email: extractedInfo.email || null,
        phone: extractedInfo.phone || null,
        propertyId: "3",
        source: `website-sarah-${initialFlow}`,
        notes: `Sarah AI lead - ${extractedInfo.stayType}. ${extractedInfo.notes || 'Interested in community information'}`
      };

      console.log('🎯 Creating lead from Sarah conversation:', leadPayload);

      const response = await fetch('https://ops.coastmhp.com/api/leasing/ai/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Lead created successfully:', result.id);
        
        // Send manager email notification
        try {
          await fetch('https://ops.coastmhp.com/api/contact/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: extractedInfo.name,
              email: extractedInfo.email,
              phone: extractedInfo.phone,
              interest: extractedInfo.stayType,
              message: `Sarah AI conversation lead. Entry point: ${initialFlow}. ${extractedInfo.notes}`
            })
          });
          console.log('📧 Manager notification sent');
        } catch (emailError) {
          console.error('Manager email failed:', emailError);
        }
        
      } else {
        console.error('❌ Failed to create lead');
      }
    } catch (error) {
      console.error('❌ Error creating lead:', error);
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
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
              Rancho Corrido Park • Always here to help!
            </p>
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

        {/* Input Area - Always visible */}
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
            placeholder="Ask me anything about Rancho Corrido..."
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
            disabled={isLoading || !currentMessage.trim()}
            style={{
              padding: '12px 20px',
              border: 'none',
              borderRadius: '24px',
              backgroundColor: isLoading || !currentMessage.trim() ? '#9ca3af' : '#2563eb',
              color: 'white',
              cursor: isLoading || !currentMessage.trim() ? 'not-allowed' : 'pointer',
              fontSize: '15px',
              fontWeight: '500'
            }}
          >
            Send
          </button>
        </div>
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