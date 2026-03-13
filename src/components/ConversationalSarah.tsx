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
  const [currentStep, setCurrentStep] = useState('greeting');
  const [leadData, setLeadData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    stayType: '',
    stayLength: '',
    moveInDate: '',
    budget: '',
    groupSize: '',
    notes: ''
  });
  
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
        welcomeMessage = `Hi! I'm Sarah from Rancho Corrido Park. I'm so excited you're interested in permanent RV living! 🏕️

Our permanent residents love the peaceful community atmosphere, mountain views, and the convenience of being close to everything - just 30 minutes to beaches, 20 minutes to Temecula wine country, and 5 minutes to local casinos.

To help you find the perfect space, could you tell me your name?`;
        setCurrentStep('collect_name');
        setLeadData(prev => ({ ...prev, stayType: 'permanent-rv' }));
        break;
        
      case 'mobile-homes':
        stayType = 'mobile-homes';
        welcomeMessage = `Hello! I'm Sarah, and I'd love to help you learn about our park model mobile homes! 🏠

We have beautiful 1 bedroom, 1 bathroom park models available for rent. They come fully equipped with kitchen appliances, utilities included, and are move-in ready. Perfect for someone who wants the community feel without needing to bring their own RV.

What's your name so I can help you personally?`;
        setCurrentStep('collect_name');
        setLeadData(prev => ({ ...prev, stayType: 'mobile-homes' }));
        break;
        
      case 'temporary':
        stayType = 'temporary';
        welcomeMessage = `Hi there! I'm Sarah from Rancho Corrido Park. Perfect timing - our temporary stays are incredibly popular with travel nurses, contractors, and seasonal workers! 🚛

We offer stays up to 90 days with full hookups, all amenities, and flexible nightly or weekly rates. Many of our temporary guests end up loving it so much they become permanent residents!

What's your name? I'd love to learn more about your situation.`;
        setCurrentStep('collect_name');
        setLeadData(prev => ({ ...prev, stayType: 'temporary' }));
        break;
        
      case 'tour':
        stayType = 'tour';
        welcomeMessage = `Hello! I'm Sarah, and I'd love to help you schedule a tour of our beautiful community! 🌄

Seeing Rancho Corrido in person really shows you what makes it special - our mountain views, peaceful atmosphere, friendly neighbors, and all the amenities. Whether you're interested in RV spaces or our mobile homes, I can arrange a personalized tour.

What's your name so I can coordinate the perfect tour for you?`;
        setCurrentStep('collect_name');
        break;
        
      case 'learn':
        welcomeMessage = `Hi there! I'm Sarah from Rancho Corrido Park. I'm here to answer any questions you have about our community - from amenities and pricing to what makes living here so special. 🏔️

We're located in beautiful Pauma Valley with mountain views, full amenities, and that perfect balance of peaceful country living close to everything you need.

What would you like to know about first? Our RV spaces, mobile homes, pricing, or something else?`;
        setCurrentStep('information');
        break;
        
      case 'contact':
        welcomeMessage = `Hello! I'm Sarah from Rancho Corrido Park. I'm here to help connect you with the right person for your needs or answer any questions you might have. 🌟

Are you looking to ask questions about our community, schedule a visit, learn about pricing, or something else? I'm here to help!`;
        setCurrentStep('routing');
        break;
        
      default:
        welcomeMessage = `Hi! I'm Sarah, your personal assistant for Rancho Corrido Park. I'm here to help you discover our peaceful community in beautiful San Diego County. 🌊

What brings you here today? Are you interested in permanent RV living, our mobile homes, temporary stays, or just want to learn more about our community?`;
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

    // Enhanced conversational flow logic
    switch (currentStep) {
      case 'collect_name':
        if (messageText.trim()) {
          setLeadData(prev => ({ ...prev, name: messageText }));
          sarahResponse = `Nice to meet you, ${messageText}! `;
          
          // Context-specific follow-ups
          if (leadData.stayType === 'permanent-rv') {
            sarahResponse += `I'd love to learn about your RV living needs to find you the perfect space.

Are you looking for:
• Full-time residence (you'll love our community!)
• Snowbird living (seasonal stays)
• Something for just yourself or family members?

Also, do you currently have an RV, or would you be interested in our mobile home options too?`;
            nextStep = 'rv_details';
          } else if (leadData.stayType === 'mobile-homes') {
            sarahResponse += `Perfect! Our park model homes are really popular. Let me ask a few questions to find the best fit:

Are you looking for:
• Immediate move-in or future planning?
• Long-term rental or trying it out first?
• Just for yourself or do you have family/pets?

Our current homes are 1 bed/1 bath, fully furnished, with utilities included.`;
            nextStep = 'mobile_details';
          } else if (leadData.stayType === 'temporary') {
            sarahResponse += `Great! Temporary stays are perfect for so many situations. To help me find the best option:

What brings you to the area?
• Travel nursing assignment
• Contract work/construction
• Extended vacation/visiting family
• Trying out the area before moving

And how long are you thinking - days, weeks, or the full 90 days?`;
            nextStep = 'temporary_details';
          } else {
            // General tour or other
            sarahResponse += `What specifically interests you most about Rancho Corrido? I can focus our conversation on what matters most to you:

• RV living options
• Mobile home rentals  
• Community amenities
• Location and area attractions
• Pricing and availability`;
            nextStep = 'interest_focus';
          }
        }
        break;

      case 'rv_details':
      case 'mobile_details':  
      case 'temporary_details':
        sarahResponse = `That's really helpful! To make sure I connect you with the right information and our property manager can prepare for your conversation, I'll need the best way to reach you.

What's a good phone number or email where we can follow up with details and availability?`;
        nextStep = 'collect_contact';
        break;

      case 'interest_focus':
        sarahResponse = `Excellent! Based on what you're interested in, I'll make sure our property manager has all the right information ready when they contact you.

What's the best phone number or email to reach you?`;
        nextStep = 'collect_contact';
        break;

      case 'collect_contact':
        if (messageText.includes('@')) {
          setLeadData(prev => ({ ...prev, email: messageText }));
        } else if (/\d{3}[-\s]?\d{3}[-\s]?\d{4}/.test(messageText)) {
          setLeadData(prev => ({ ...prev, phone: messageText }));
        }
        
        // Ask for additional details if we have contact info
        sarahResponse = `Perfect! I've got your contact information. 

Is there anything specific you'd like me to let our property manager know? For example:
• Timeline for moving/visiting
• Budget range you're working with
• Special requirements or questions
• Best time to call you

This helps them prepare the most relevant information for you!`;
        nextStep = 'final_details';
        break;

      case 'final_details':
        // Capture any additional details
        if (messageText.trim()) {
          setLeadData(prev => ({ ...prev, notes: messageText }));
        }
        
        // Create the lead
        await createLead();
        
        sarahResponse = `Thank you so much, ${leadData.name}! I've passed along your information to our property manager. 

You should hear from them within 2 hours during business hours (or first thing the next business day). They'll have all the details about ${leadData.stayType === 'permanent-rv' ? 'permanent RV spaces' : 
          leadData.stayType === 'mobile-homes' ? 'our available mobile homes' : 
          leadData.stayType === 'temporary' ? 'temporary stay options' : 'our community'} ready for you!

Feel free to keep browsing our website, and don't hesitate to reach out if you think of any other questions! 🌟`;
        nextStep = 'completed';
        break;

      case 'information':
        sarahResponse = await getInformationalResponse(messageText);
        // Stay in information mode for follow-up questions
        break;

      case 'routing':
      case 'discovery':
      default:
        sarahResponse = await getGeneralResponse(messageText);
        // Try to determine intent and route to appropriate flow
        if (messageText.toLowerCase().includes('rv') || messageText.toLowerCase().includes('permanent')) {
          setLeadData(prev => ({ ...prev, stayType: 'permanent-rv' }));
          nextStep = 'collect_name';
        } else if (messageText.toLowerCase().includes('mobile') || messageText.toLowerCase().includes('home')) {
          setLeadData(prev => ({ ...prev, stayType: 'mobile-homes' }));
          nextStep = 'collect_name';
        } else if (messageText.toLowerCase().includes('temporary') || messageText.toLowerCase().includes('short')) {
          setLeadData(prev => ({ ...prev, stayType: 'temporary' }));
          nextStep = 'collect_name';
        }
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
          visitorInfo: { page: window.location.pathname, entryPoint: initialFlow }
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.sessionId && !sessionId) {
          setSessionId(data.sessionId);
        }
        return data.response + "\n\n💡 Would you like me to help you get started with an application or schedule a tour?";
      }
    } catch (error) {
      console.error('Error getting response:', error);
    }
    
    return "I'd be happy to help with that! Let me connect you with our property manager who can give you the most up-to-date information. What's the best way to reach you?";
  };

  const getGeneralResponse = async (message: string): Promise<string> => {
    return getInformationalResponse(message);
  };

  const createLead = async () => {
    try {
      // Enhanced lead data with context
      const leadPayload = {
        name: leadData.name,
        email: leadData.email || null,
        phone: leadData.phone || null,
        propertyId: "3", // Rancho Corrido  
        source: `website-sarah-${initialFlow}`,
        notes: `Sarah AI conversation (${initialFlow} flow). Stay type: ${leadData.stayType}. Context: ${leadData.notes || 'No additional notes'}`
      };

      console.log('🎯 Creating lead with context:', leadPayload);

      const response = await fetch('https://ops.coastmhp.com/api/leasing/ai/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Contextual lead created:', result.id);
        
        // Enhanced manager email with context
        try {
          await fetch('https://ops.coastmhp.com/api/contact/email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: leadData.name,
              email: leadData.email,
              phone: leadData.phone,
              interest: leadData.stayType,
              message: `Sarah AI Lead - Entry: ${initialFlow}, Stay Type: ${leadData.stayType}. ${leadData.notes || 'No additional details provided.'}`
            })
          });
          console.log('📧 Contextual manager email sent');
        } catch (emailError) {
          console.error('Manager email failed:', emailError);
        }
        
      } else {
        console.error('❌ Failed to create contextual lead');
      }
    } catch (error) {
      console.error('❌ Error creating contextual lead:', error);
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
              Rancho Corrido Park • {leadData.stayType ? leadData.stayType.replace('-', ' ') : 'General Inquiry'}
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