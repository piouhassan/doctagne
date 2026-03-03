"use client"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Bot, Send, X, Stethoscope } from 'lucide-react';
import { APP_URL, API_URL } from '@/helpers/env';

interface Doctor {
  id: string;
  first_name: string;
  last_name: string;
  city: string;
  speciality_id: string;
  profile_image?: string;
  rating: number;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  doctors?: Doctor[];
  isTyping?: boolean;
}

const AIConsultation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSpeciality, setCurrentSpeciality] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const simulateTyping = (fullText: string, doctors?: Doctor[], isCityRequest?: boolean) => {
    const id = Math.random().toString(36).substr(2, 9);
    setMessages(prev => [...prev, {
      id,
      text: "",
      sender: 'bot',
      timestamp: new Date(),
      isCityRequest,
      isTyping: true
    }]);

    let i = 0;
    const interval = setInterval(() => {
      setMessages(prev => prev.map(m => 
        m.id === id ? { ...m, text: fullText.slice(0, i + 1) } : m
      ));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
        setMessages(prev => prev.map(m => 
          m.id === id ? { ...m, isTyping: false, doctors } : m
        ));
      }
    }, 20); // Vitesse légèrement plus lente pour mieux voir l'effet
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome1 = "Bonjour ! Je suis votre assistant santé Doctagne. 👋";
      const welcome2 = "Comment puis-je vous aider aujourd'hui ? Décrivez-moi vos symptômes.";
      
      simulateTyping(welcome1);
      setTimeout(() => {
        simulateTyping(welcome2);
      }, 1800);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}ai-assistant/ask`, {
        message: inputMessage,
        speciality: currentSpeciality ?? undefined
      }, {
        headers: { 'x-api-key': 'A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y' }
      });

      const data = response.data.data;
      if (data.detectedSpeciality) setCurrentSpeciality(data.detectedSpeciality);
      simulateTyping(data.advice, data.doctors);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: "Désolé, je rencontre une petite difficulté technique. Veuillez réessayer plus tard.",
        sender: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="ai-trigger-btn">
        <div className="ai-icon-wrapper"><Bot size={24} /></div>
        <span>Besoin d'aide ?</span>
      </button>

      {isOpen && (
        <div className="ai-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="ai-modal-content" onClick={e => e.stopPropagation()}>
            <div className="ai-header">
              <div className="ai-header-title">
                <div className="ai-avatar-small"><Stethoscope size={20} /></div>
                <div><h4 className='text-white'>Assistant Médical</h4><span>IA Doctagne • En ligne</span></div>
              </div>
              <button onClick={() => setIsOpen(false)} className="ai-close-btn"><X size={24} /></button>
            </div>

            <div className="ai-chat-body">
              {messages.map(msg => (
                <div key={msg.id} className={`ai-message-row ${msg.sender}`}>
                  <div className="ai-message-bubble">
                    <div className="ai-message-text">
                        {msg.text}
                        {msg.isTyping && <span className="typewriter-cursor">|</span>}
                    </div>
                    {msg.doctors && msg.doctors.length > 0 ? (
                      <div className="ai-doctors-list">
                        {msg.doctors.map(doc => (
                          <div key={doc.id} className="ai-doctor-card">
                             <div className="ai-doc-info">
                                <strong>Dr. {doc.first_name} {doc.last_name}</strong>
                                <span>{doc.city}</span>
                             </div>
                             <a href={`/doctors/${doc.id}`} className="ai-doc-link">Prendre RDV</a>
                          </div>
                        ))}
                        <div className="mt-3 text-center">
                           <p className="small text-muted mb-2">Vous voulez voir plus de praticiens ?</p>
                           <a href={`${APP_URL}/login`} className="ai-login-link-inline">Connectez-vous</a>
                        </div>
                      </div>
                    ) : (
                      msg.sender === 'bot' && !msg.isTyping && Array.isArray(msg.doctors) && msg.doctors.length === 0 && (
                        <div className="ai-no-results-fallback mt-3 p-3 bg-light rounded-3 border">
                           <p className="small mb-2">Je n'ai pas trouvé de résultats immédiats pour cette recherche.</p>
                           <p className="small fw-medium mb-3">Connectez-vous pour accéder à notre base complète de partenaires.</p>
                           <a href={`${APP_URL}/login`} className="btn btn-danger btn-sm w-100 rounded-pill">Se connecter</a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
              {isLoading && <div className="ai-message-row bot"><div className="ai-typing"><span></span><span></span><span></span></div></div>}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="ai-input-area">
              <input value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} placeholder="Ex: J'ai mal aux dents..." className="ai-input" />
              <button type="submit" disabled={!inputMessage.trim() || isLoading}><Send size={20} /></button>
            </form>
            <div className="ai-disclaimer">Cet assistant ne remplace pas un avis médical professionnel.</div>
          </div>
        </div>
      )}

      <style jsx>{`
        .ai-trigger-btn { position: fixed; bottom: 30px; right: 30px; display: flex; align-items: center; gap: 12px; background: #FB091A; color: white; border: none; padding: 8px 20px 8px 8px; border-radius: 50px; box-shadow: 0 10px 25px rgba(251, 9, 26, 0.3); cursor: pointer; transition: all 0.3s ease; z-index: 1000; font-weight: 500; }
        .ai-icon-wrapper { width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .ai-modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 20px; }
        .ai-modal-content { width: 100%; max-width: 500px; height: 80vh; background: white; border-radius: 24px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.2); }
        .ai-header { padding: 20px; background: #212529; color: white; display: flex; justify-content: space-between; align-items: center; }
        .ai-header-title { display: flex; align-items: center; gap: 12px; }
        .ai-avatar-small { width: 40px; height: 40px; background: #FB091A; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .ai-header h4 { margin: 0; font-size: 16px; font-weight: 600; }
        .ai-header span { font-size: 12px; opacity: 0.7; }
        .ai-close-btn { background: none; border: none; color: white; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; }
        .ai-chat-body { flex: 1; padding: 20px; overflow-y: auto; background: #f8f9fa; display: flex; flex-direction: column; gap: 15px; }
        .ai-message-row { display: flex; width: 100%; }
        .ai-message-row.user { justify-content: flex-end; }
        .ai-message-row.bot { justify-content: flex-start; }
        .ai-message-bubble { max-width: 85%; padding: 12px 16px; border-radius: 18px; font-size: 14px; line-height: 1.5; }
        .user .ai-message-bubble { background: #FB091A; color: white; border-bottom-right-radius: 4px; }
        .bot .ai-message-bubble { background: white; color: #212529; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        
        /* CURSEUR MACHINE A ECRIRE */
        .typewriter-cursor {
          margin-left: 2px;
          display: inline-block;
          font-weight: bold;
          animation: blink 0.7s infinite;
          color: #FB091A;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        .ai-doctors-list { margin-top: 12px; display: flex; flex-direction: column; gap: 10px; }
        .ai-doctor-card { background: #f8f9fa; padding: 10px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #eee; }
        .ai-doc-info { display: flex; flex-direction: column; }
        .ai-doc-info strong { font-size: 13px; color: #212529; }
        .ai-doc-link { background: #212529; color: white; padding: 5px 12px; border-radius: 8px; font-size: 11px; text-decoration: none; }
        .ai-login-link-inline { color: #FB091A; font-weight: 600; text-decoration: underline; font-size: 13px; cursor: pointer; }
        .ai-input-area { padding: 20px; display: flex; gap: 10px; background: white; border-top: 1px solid #eee; }
        .ai-input { flex: 1; border: 1px solid #ddd; border-radius: 12px; padding: 10px 15px; outline: none; font-size: 14px; }
        .ai-input-area button { background: #FB091A; color: white; border: none; width: 45px; height: 40px; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
        .ai-disclaimer { padding: 10px; font-size: 10px; text-align: center; color: #999; background: #fdfdfd; }
        .ai-typing { display: flex; gap: 4px; padding: 10px; }
        .ai-typing span { width: 6px; height: 6px; background: #ccc; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      `}</style>
    </>
  );
};

export default AIConsultation;
