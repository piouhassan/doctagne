"use client"
import React, {useState, CSSProperties, useEffect} from 'react';
import {useTranslation} from "react-i18next";

// Bouton 1: Minimal Border
export const LanguageButton1: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '8px 16px',
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
  };

  const hoverStyle: CSSProperties = {
    borderColor: '#9ca3af',
    transform: 'translateY(-1px)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang.toUpperCase()}
    </button>
  );
};

// Bouton 2: Pill Shape
export const LanguageButton2: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    background: '#f9fafb',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    color: '#374151',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    letterSpacing: '0.5px',
    zIndex: 1000,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  };

  const hoverStyle: CSSProperties = {
    background: '#f3f4f6',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang === 'fr' ? 'Français' : 'English'}
    </button>
  );
};

// Bouton 3: Subtle Shadow
export const LanguageButton3: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 18px',
    background: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#111827',
    transition: 'all 0.25s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  };

  const hoverStyle: CSSProperties = {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    transform: 'translateY(-2px)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang === 'fr' ? 'FR' : 'EN'}
    </button>
  );
};

// Bouton 4: With Flag Emoji
export const LanguageButton4: React.FC = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language || "fr");
    const [isHovered, setIsHovered] = useState(false);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLang(lang);
        document.documentElement.lang = lang;
        localStorage.setItem("i18nextLng", lang);
    };


    const buttonStyle: CSSProperties = {
        position: "fixed",
        bottom: "20px",
        right: "-33px",
        padding: "8px 14px",
        background: "#fafafa",
        border: "1px solid #e5e5e5",
        borderRadius: "12px",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",
        fontFamily: "system-ui, -apple-system, sans-serif",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        transformOrigin: "right center",
    };

    const hoverStyle: CSSProperties = {
        background: "#f5f5f5",
        transform: "scale(1.05)",
        right : "0"
    };

    useEffect(() => {
        const stored = localStorage.getItem("i18nextLng");
        if (stored) {
            setLang(stored);
            i18n.changeLanguage(stored);
        }
    }, [i18n]);


    return (
        <button
            style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => changeLanguage(lang === "fr" ? "en" : "fr")}
        >
            <span>{lang === "fr" ? "🇫🇷" : "🇬🇧"}</span>
            <span
                style={{ fontSize: "13px", fontWeight: "500", color: "#525252" }}
            >
        {lang.toUpperCase()}
      </span>
        </button>
    );
};

// Bouton 5: Glassmorphism
export const LanguageButton5: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '14px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1f2937',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
  };

  const hoverStyle: CSSProperties = {
    background: 'rgba(255, 255, 255, 0.85)',
    transform: 'translateY(-1px)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang === 'fr' ? 'Français' : 'English'}
    </button>
  );
};

// Bouton 6: Outline Thin
export const LanguageButton6: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '9px 18px',
    background: 'transparent',
    border: '1.5px solid #d1d5db',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    color: '#4b5563',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    letterSpacing: '0.3px',
    zIndex: 1000,
  };

  const hoverStyle: CSSProperties = {
    borderColor: '#6b7280',
    color: '#1f2937',
    background: 'rgba(249, 250, 251, 0.5)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang.toUpperCase()}
    </button>
  );
};

// Bouton 7: Compact Circle
export const LanguageButton7: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '44px',
    height: '44px',
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    color: '#374151',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06)',
  };

  const hoverStyle: CSSProperties = {
    background: '#f9fafb',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transform: 'rotate(5deg) scale(1.05)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang.toUpperCase()}
    </button>
  );
};

// Bouton 8: Split Design
export const LanguageButton8: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const containerStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    display: 'flex',
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    overflow: 'hidden',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  };

  const buttonStyle = (isActive: boolean): CSSProperties => ({
    padding: '8px 14px',
    background: isActive ? '#f3f4f6' : 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: isActive ? '600' : '500',
    color: isActive ? '#111827' : '#6b7280',
    transition: 'all 0.25s ease',
  });

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle(lang === 'fr')}
        onClick={() => setLang('fr')}
      >
        FR
      </button>
      <div style={{ width: '1px', background: '#e5e7eb' }} />
      <button
        style={buttonStyle(lang === 'en')}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
};

// Bouton 9: Soft Rounded
export const LanguageButton9: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '11px 22px',
    background: '#f8f9fa',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    color: '#495057',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
  };

  const hoverStyle: CSSProperties = {
    background: '#e9ecef',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-1px)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      {lang === 'fr' ? 'FR' : 'EN'}
    </button>
  );
};

// Bouton 10: Minimal Dot Indicator
export const LanguageButton10: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const buttonStyle: CSSProperties = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '9px 16px',
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '9px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '500',
    color: '#262626',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
  };

  const dotStyle: CSSProperties = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: lang === 'fr' ? '#3b82f6' : '#10b981',
    transition: 'all 0.3s ease',
  };

  const hoverStyle: CSSProperties = {
    background: '#fafafa',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{ ...buttonStyle, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
    >
      <div style={dotStyle} />
      <span>{lang.toUpperCase()}</span>
    </button>
  );
};
