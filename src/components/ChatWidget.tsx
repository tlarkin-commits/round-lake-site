"use client";
import { useState, useEffect } from "react";
import { PropertyConfig } from "@/config/properties";

// OPS API endpoint for AI leasing bot
const OPS_API_URL = "https://ops.coastmhp.com";

// Generate unique session ID for visitor tracking
function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let sessionId = sessionStorage.getItem("chat_session_id");
  if (!sessionId) {
    sessionId = "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem("chat_session_id", sessionId);
  }
  return sessionId;
}

export default function ChatWidget({ property, isOpen: externalIsOpen, onToggle }: { property: PropertyConfig; isOpen?: boolean; onToggle?: () => void }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalOpen;
  const setIsOpen = (v: boolean) => { if (onToggle) { onToggle(); } else { setInternalOpen(v); } };
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sessionId, setSessionId] = useState("");

  // Initialize session and load history
  useEffect(() => {
    const sid = getSessionId();
    setSessionId(sid);
    
    // Set initial greeting
    setMessages([
      { role: "assistant", content: `Hi! 👋 I'm the ${property.name} leasing assistant. How can I help you today?` }
    ]);
    
    // Load chat history if exists
    if (sid) {
      fetch(`${OPS_API_URL}/api/chat/external/${sid}`)
        .then(r => r.json())
        .then(data => {
          if (data.messages?.length > 0) {
            setMessages(data.messages.map((m: any) => ({ role: m.role, content: m.content })));
          }
        })
        .catch(() => {});
    }
  }, [property.name]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);
    
    try {
      const response = await fetch(`${OPS_API_URL}/api/chat/external`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          propertyId: property.opsPropertyId || property.id,
          message: userMessage,
          visitorInfo: {
            referrer: typeof document !== "undefined" ? document.referrer : "",
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : ""
          }
        })
      });
      
      const data = await response.json();
      
      if (data.success && data.response) {
        setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "I'm having trouble connecting right now. Please call us at " + property.phone + " for immediate assistance."
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm having trouble connecting right now. Please call us at " + property.phone + " for immediate assistance."
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-white text-2xl z-50 hover:scale-110 transition-transform"
        style={{ backgroundColor: property.colors.primary }}
      >
        {isOpen ? "✕" : "💬"}
      </button>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div 
            className="p-4 text-white font-semibold"
            style={{ backgroundColor: property.colors.primary }}
          >
            Chat with {property.name}
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 max-h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.role === "user" 
                      ? "bg-gray-900 text-white" 
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-gray-500">
                  Typing...
                </div>
              </div>
            )}
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              disabled={loading}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
