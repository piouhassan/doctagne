// components/Chatbot.tsx
"use client"
import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Message d'accueil automatique
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessages: Message[] = [
        {
          id: '1',
          text: "Hello bienvenu 👋",
          sender: 'bot',
          timestamp: new Date()
        },
        {
          id: '2',
          text: "Comment puis-je vous aider aujourd'hui ?",
          sender: 'bot',
          timestamp: new Date()
        },
        {
          id: '3',
          text: "Sur quel domaine de santé avez-vous besoin d'informations ?",
          sender: 'bot',
          timestamp: new Date()
        }
      ];
      
      // Afficher les messages avec un délai pour un effet plus naturel
      welcomeMessages.forEach((msg, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, msg]);
        }, index * 500);
      });
    }
  }, [isOpen, messages.length]);

  // Scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus sur l'input quand la chatbox s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simuler une réponse du bot après un délai
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Je suis là pour vous aider ! Pour des questions médicales spécifiques, je vous recommande de consulter un professionnel de santé.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSendMessage(e);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Bouton flottant du chatbot */}
      <button
        onClick={toggleChat}
        className="chatbot-toggle-btn"
        aria-label="Ouvrir le chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="chatbot-overlay"
          onClick={closeChat}
        />
      )}

      {/* Fenêtre de chat - Version agrandie mais proche du bouton */}
      <div className={`chatbot-container ${isOpen ? 'chatbot-open' : ''}`}>
        {/* En-tête */}
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <h3 className="chatbot-title">Doctagné Chatbot</h3>
              <span className="chatbot-status">En ligne</span>
            </div>
          </div>
          <button 
            className="chatbot-close-btn"
            onClick={closeChat}
            aria-label="Fermer le chat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Zone des messages */}
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString('fr-FR', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de saisie */}
        <form onSubmit={handleSendMessage} className="chatbot-input-container">
          <div className="chatbot-input-wrapper">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message..."
              className="chatbot-input"
            />
            <button 
              type="submit"
              className="chatbot-send-btn"
              disabled={!inputMessage.trim()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        /* Bouton flottant */
        .chatbot-toggle-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(251, 9, 26, 0.3);
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .chatbot-toggle-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(251, 9, 26, 0.4);
        }

        /* Overlay */
        .chatbot-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        /* Container principal - Agrandi mais près du bouton */
        .chatbot-container {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 1000px; /* Largeur augmentée */
          height: 730px; /* Hauteur augmentée */
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          transition: all 0.3s ease;
          z-index: 1000;
          overflow: hidden;
        }

        .chatbot-open {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* En-tête */
        .chatbot-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          background: var(--primary-color);
          color: white;
        }

        .chatbot-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .chatbot-avatar {
          width: 40px;
          height: 40px;
          background: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .chatbot-title {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .chatbot-status {
          font-size: 12px;
          opacity: 0.8;
        }

        .chatbot-close-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }

        .chatbot-close-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Zone des messages - Plus grande */
        .chatbot-messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .message {
          max-width: 80%;
          animation: messageAppear 0.3s ease;
        }

        .message-bot {
          align-self: flex-start;
        }

        .message-user {
          align-self: flex-end;
        }

        .message-content {
          padding: 12px 16px;
          border-radius: 18px;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .message-bot .message-content {
          background: var(--secondary-color);
          color: var(--primary-color);
          border-bottom-left-radius: 4px;
        }

        .message-user .message-content {
          background: var(--accent-color);
          color: white;
          border-bottom-right-radius: 4px;
        }

        .message-time {
          font-size: 11px;
          color: var(--text-color);
          margin-top: 4px;
          text-align: right;
        }

        .message-bot .message-time {
          text-align: left;
        }

        /* Zone de saisie */
        .chatbot-input-container {
          padding: 20px;
          border-top: 1px solid var(--divider-color);
        }

        .chatbot-input-wrapper {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .chatbot-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid var(--divider-color);
          border-radius: 25px;
          outline: none;
          font-size: 14px;
          transition: border-color 0.3s ease;
        }

        .chatbot-input:focus {
          border-color: var(--accent-color);
        }

        .chatbot-send-btn {
          width: 40px;
          height: 40px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .chatbot-send-btn:hover:not(:disabled) {
          background: var(--primary-color);
          transform: scale(1.05);
        }

        .chatbot-send-btn:disabled {
          background: var(--divider-color);
          cursor: not-allowed;
          opacity: 0.6;
        }

        /* Animation */
        @keyframes messageAppear {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive - Ajustements pour les grandes boîtes */
        @media (max-width: 768px) {
          .chatbot-container {
            width: calc(100vw - 40px);
            height: 70vh;
            bottom: 80px;
            right: 20px;
            left: 20px;
          }

          .chatbot-toggle-btn {
            bottom: 20px;
            right: 20px;
            width: 56px;
            height: 56px;
          }
        }

        @media (max-width: 480px) {
          .chatbot-container {
            height: 60vh;
          }
          
          .message {
            max-width: 90%;
          }
        }

        /* Pour les très petits écrans */
        @media (max-width: 360px) {
          .chatbot-container {
            width: calc(100vw - 30px);
            right: 15px;
            left: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default Chatbot;