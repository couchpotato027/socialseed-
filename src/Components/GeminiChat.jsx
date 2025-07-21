import React, { useState, useRef, useEffect } from 'react';

const getChatBoxStyle = () => {
  if (window.innerWidth < 600) {
    return {
      position: 'fixed',
      bottom: '12px',
      right: '2vw',
      left: '2vw',
      width: '96vw',
      maxWidth: '98vw',
      maxHeight: '60vh',
      background: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      overflow: 'hidden',
    };
  }
  return {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '350px',
    maxWidth: '95vw',
    maxHeight: '70vh',
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    overflow: 'hidden',
  };
};

const headerStyle = {
  background: '#4f46e5',
  color: '#fff',
  padding: '14px 18px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const messagesStyle = {
  flex: 1,
  padding: '16px',
  overflowY: 'auto',
  background: '#f9f9fb',
};

const inputBarStyle = {
  display: 'flex',
  borderTop: '1px solid #eee',
  background: '#fff',
  padding: '10px',
};

const inputStyle = {
  flex: 1,
  border: 'none',
  outline: 'none',
  fontSize: '1rem',
  padding: '8px',
  borderRadius: '8px',
  background: '#f3f4f6',
  marginRight: '8px',
};

const sendBtnStyle = {
  background: '#4f46e5',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '8px 16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
};

const toggleBtnStyle = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  background: '#4f46e5',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: '56px',
  height: '56px',
  fontSize: '2rem',
  boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
  cursor: 'pointer',
  zIndex: 1001,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function GeminiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am Gemini. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [chatBoxStyle, setChatBoxStyle] = useState(getChatBoxStyle());

  useEffect(() => {
    const handleResize = () => setChatBoxStyle(getChatBoxStyle());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { from: 'user', text: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5001/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input })
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { from: 'bot', text: data.text }]);
    } catch (e) {
      setMessages(msgs => [...msgs, { from: 'bot', text: 'Sorry, there was an error.' }]);
    }
    setLoading(false);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') sendMessage();
  };

  if (!open) {
    return (
      <button style={toggleBtnStyle} onClick={() => setOpen(true)} title="Chat with Gemini">
        <span role="img" aria-label="chat">💬</span>
      </button>
    );
  }

  return (
    <div style={chatBoxStyle}>
      <div style={headerStyle}>
        Gemini Chat
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }} title="Close">×</button>
      </div>
      <div style={messagesStyle}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.from === 'user' ? 'right' : 'left',
            margin: '8px 0',
          }}>
            <span style={{
              display: 'inline-block',
              background: msg.from === 'user' ? '#4f46e5' : '#e0e7ff',
              color: msg.from === 'user' ? '#fff' : '#222',
              borderRadius: '12px',
              padding: '8px 12px',
              maxWidth: '80%',
              wordBreak: 'break-word',
            }}>{msg.text}</span>
          </div>
        ))}
        {loading && <div style={{ color: '#888', fontStyle: 'italic' }}>Gemini is typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div style={inputBarStyle}>
        <input
          style={inputStyle}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button style={sendBtnStyle} onClick={sendMessage} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default GeminiChat; 