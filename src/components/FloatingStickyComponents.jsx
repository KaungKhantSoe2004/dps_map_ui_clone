import React, { useState } from 'react';
import { X, MessageCircle, Phone, Mail } from 'lucide-react';

const FloatingStickyComponents = () => {
  // State for Old Homepage Sticky - always visible on refresh
  const [isOldHomepageVisible, setIsOldHomepageVisible] = useState(true);
  
  // State for Floating Girl Sticky
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 How can we help you today?", sender: "agent", time: "Just now" }
  ]);

  const handleCloseOldHomepage = () => {
    setIsOldHomepageVisible(false);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: message, sender: "user", time: "Just now" }
      ]);
      setMessage('');
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "Thank you for your message! Our team will get back to you shortly. 😊",
          sender: "agent",
          time: "Just now"
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slide-in-from-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-from-bottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ringAnimation {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @keyframes ringAnimation2 {
          0% {
            transform: scale(1);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .animate-in {
          animation-duration: 0.3s;
          animation-fill-mode: both;
        }

        .slide-in-from-right-10 {
          animation-name: slide-in-from-right;
        }

        .slide-in-from-bottom-10 {
          animation-name: slide-in-from-bottom;
        }

        .fade-in {
          animation-name: fade-in;
        }

        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .ai-agent-chat-avatar-pulse-wrapper {
          position: relative;
        }

        .ai-agent-chat-avatar-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .pulse-1 {
          position: absolute;
          background: #e76f51;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          z-index: -1;
          top: 0;
          animation: ringAnimation 1.5s ease-out infinite;
        }

        .pulse-2 {
          position: absolute;
          background: #e76f51;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          z-index: -1;
          top: 0;
          animation: ringAnimation2 1.5s ease-out infinite;
          animation-delay: 0.75s;
        }

        .ai-agent-chat-avatar {
          overflow: hidden;
          border-radius: 100%;
          display: flex;
          align-items: end;
          justify-content: center;
          border: 3px solid #fff;
          position: relative;
          cursor: pointer;
          box-shadow: 0 2px 8px 0 rgba(37,45,91,0.04), 0 16px 24px 0 rgba(84,95,111,0.16);
        }

        .ai-agent-chat-avatar.size-lg {
          width: 80px;
          height: 80px;
        }

        .ai-agent-chat-avatar.size-md {
          width: 64px;
          height: 64px;
        }

        .ai-agent-chat-avatar img {
          height: 100%;
          width: auto;
        }

        .chat-messages::-webkit-scrollbar {
          width: 4px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: #e76f51;
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: #d35a3a;
        }
      `}</style>

      {/* Old Homepage Sticky Card */}
      {isOldHomepageVisible && (
        <div className="fixed right-4 top-1/2 z-40 w-72 -translate-y-1/2 transform rounded-xl border border-border bg-card p-4 shadow-2xl transition-all duration-300 animate-in slide-in-from-right-10">
          <span className="absolute -left-2 -top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm animate-pulse-slow">
            Old HomePage
          </span>
          <button 
            onClick={handleCloseOldHomepage}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/20 p-1 text-white transition-colors hover:bg-black/40"
          >
            <X className="h-3 w-3" />
          </button>
          <a 
            href="https://dpsmap.com/index-old.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block space-y-3"
          >
            <div className="relative overflow-hidden rounded-lg bg-muted">
              <img 
                src="/assets/old-DQ24lXUe.png" 
                alt="Old Website" 
                className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
            </div>
            <div className="px-1">
              <h4 className="font-display text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-terracotta">
                Click here to Visit Our Old HomePage
              </h4>
              <p className="mt-1 text-xs text-muted-foreground">
                See the previous version of our homepage
              </p>
            </div>
          </a>
        </div>
      )}

      {/* Floating Chat Support - Jotform Agent Style */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Main Floating Button - Closed State */}
        {!isChatOpen && (
          <div className="ai-agent-avatar-content">
            <div className="ai-agent-avatar-content-wrapper">
              <div className="ai-agent-chat-avatar-pulse-wrapper">
                <div className="ai-agent-chat-avatar size-lg" style={{ background: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)' }}>
                  <img 
                    draggable="false" 
                    src="/assets/customerservice.png" 
                    alt="agent" 
                    width="80" 
                    height="80"
                    onClick={() => setIsChatOpen(true)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="ai-agent-chat-avatar-pulse">
                  <div className="pulse-1"></div>
                  <div className="pulse-2"></div>
                </div>
                <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white z-10"></span>
              </div>
            </div>
          </div>
        )}

        {/* Expanded Chat Panel */}
        {isChatOpen && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-300">
            {/* Chat Header */}
            <div className="mb-2 flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-terracotta to-terracotta-light p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="ai-agent-chat-avatar size-md" style={{ background: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)' }}>
                    <img 
                      draggable="false" 
                      src="/assets/customerservice.png" 
                      alt="agent" 
                      width="64" 
                      height="64"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>
                <div>
                  <p className="font-semibold text-white text-base">DPS Support</p>
                  <p className="text-xs text-white/80">Online • Reply within mins</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsChatMinimized(!isChatMinimized)}
                  className="rounded-full bg-white/20 p-1.5 text-white transition-colors hover:bg-white/30"
                  title={isChatMinimized ? "Expand" : "Minimize"}
                >
                  {isChatMinimized ? (
                    <MessageCircle className="h-4 w-4" />
                  ) : (
                    <div className="h-4 w-4 rounded-sm bg-white/30"></div>
                  )}
                </button>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="rounded-full bg-white/20 p-1.5 text-white transition-colors hover:bg-white/30"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Chat Content - Expanded View */}
            {!isChatMinimized && (
              <div className="w-96 rounded-b-2xl bg-white shadow-2xl dark:bg-gray-800">
                {/* Messages Area */}
                <div className="chat-messages h-96 space-y-3 overflow-y-auto p-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-2 ${
                        msg.sender === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {msg.sender === 'agent' && (
                        <div className="ai-agent-chat-avatar size-md" style={{ background: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)', width: '32px', height: '32px' }}>
                          <img 
                            draggable="false" 
                            src="/assets/customerservice.png" 
                            alt="agent" 
                            width="32" 
                            height="32"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          msg.sender === 'user'
                            ? 'rounded-tr-none bg-terracotta'
                            : 'rounded-tl-none bg-gray-100 dark:bg-gray-700'
                        }`}
                      >
                        <p
                          className={`text-sm ${
                            msg.sender === 'user'
                              ? 'text-white'
                              : 'text-gray-800 dark:text-gray-200'
                          }`}
                        >
                          {msg.text}
                        </p>
                        <span
                          className={`mt-1 text-[10px] ${
                            msg.sender === 'user'
                              ? 'text-white/70'
                              : 'text-gray-400'
                          }`}
                        >
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="border-t border-gray-200 p-3 dark:border-gray-700">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {['Map Prices', 'Custom Print', 'Shipping', 'Yangon Map', 'Myanmar Map'].map((action) => (
                      <button
                        key={action}
                        onClick={() => {
                          setMessage(action);
                          setTimeout(handleSendMessage, 100);
                        }}
                        className="rounded-full border border-gray-300 px-3 py-1.5 text-xs transition-all hover:bg-gray-100 hover:border-terracotta dark:border-gray-600 dark:hover:bg-gray-700"
                      >
                        {action}
                      </button>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-900">
                    <input 
                      type="text" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..." 
                      className="flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-gray-400"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="rounded-full bg-terracotta p-2 text-white transition-colors hover:bg-terracotta-light disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Contact Options */}
                  <div className="mt-3 flex justify-center gap-4 text-xs">
                    <a 
                      href="tel:+959775204020" 
                      className="flex items-center gap-1 text-gray-400 transition-colors hover:text-terracotta"
                    >
                      <Phone className="h-3 w-3" /> Call
                    </a>
                    <a 
                      href="mailto:dpsmap@gmail.com" 
                      className="flex items-center gap-1 text-gray-400 transition-colors hover:text-terracotta"
                    >
                      <Mail className="h-3 w-3" /> Email
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Minimized View */}
            {isChatMinimized && (
              <div 
                onClick={() => {
                  setIsChatMinimized(false);
                }}
                className="cursor-pointer animate-float"
              >
                <div className="ai-agent-chat-avatar size-lg" style={{ background: 'linear-gradient(135deg, #e76f51 0%, #f4a261 100%)' }}>
                  <img 
                    draggable="false" 
                    src="/assets/customerservice.png" 
                    alt="agent" 
                    width="80" 
                    height="80"
                  />
                </div>
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-white"></span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingStickyComponents;