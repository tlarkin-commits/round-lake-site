"use client";
import { useState } from "react";
import { PropertyConfig } from "@/config/properties";

export default function ChatWidget({ property }: { property: PropertyConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: string; content: string}[]>([
    { role: "assistant", content: `Hi! 👋 I am the ${property.name} assistant. How can I help you today?` }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response - will connect to OPS AI Leasing agent
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, call us at " + property.phone 
      }]);
    }, 1000);
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
          </div>
          
          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
