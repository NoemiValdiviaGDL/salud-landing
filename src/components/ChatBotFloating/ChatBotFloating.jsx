import React, { useState } from "react";
import { MessageSquare, X, Bot, MessageCircle, RefreshCw } from "lucide-react";
import "./ChatbotFloating.css";

export const ChatbotFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! 👋 Soy el asistente virtual de la Dra. María Elena. ¿En qué te puedo ayudar hoy?",
    },
  ]);
  const [showRedirect, setShowRedirect] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");

  const numeroTelefono = "523300000000";

  const preguntasFrecuentes = [
    {
      id: "citas",
      label: "📅 ¿Cómo puedo agendar una cita?",
      respuesta:
        "Para agendar, confirmamos la disponibilidad directamente en agenda. Te redirijo a WhatsApp para elegir horario.",
      whatsappMsg:
        "Hola Dra. María Elena, me gustaría consultar horarios disponibles para agendar una cita.",
    },
    {
      id: "ubicacion",
      label: "📍 ¿Dónde está el consultorio?",
      respuesta:
        "Estamos en Av. Empresarios 150, Piso 5, Consultorio 502, Puerta de Hierro, Zapopan, Jal.",
      whatsappMsg:
        "Hola Dra. María Elena, quisiera pedirles la ubicación e instrucciones de llegada.",
    },
    {
      id: "servicios",
      label: "🩺 ¿Qué servicios atienden?",
      respuesta:
        "Ofrecemos consulta pediátrica integral, control de niño sano, vacunación y seguimiento del crecimiento.",
      whatsappMsg:
        "Hola Dra. María Elena, quisiera consultar información sobre sus servicios pediátricos.",
    },
    {
      id: "urgencia",
      label: "🚨 Tengo una urgencia médica",
      respuesta:
        "En caso de urgencia, comunícate inmediatamente a nuestro WhatsApp de atención prioritaria.",
      whatsappMsg:
        "URGENCIA MÉDICA: Hola Dra. María Elena, necesito atención prioritaria para mi hijo/a.",
    },
  ];

  const handleOptionClick = (opcion) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: opcion.label },
      { sender: "bot", text: opcion.respuesta },
    ]);
    setSelectedTopic(opcion.whatsappMsg);
    setShowRedirect(true);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: "bot",
        text: "¡Hola! 👋 Soy el asistente virtual de la Dra. María Elena. ¿En qué te puedo ayudar hoy?",
      },
    ]);
    setShowRedirect(false);
  };

  const urlWhatsapp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(selectedTopic)}`;

  return (
    <>
      <button
        className="chatbot-float-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir asistente virtual"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
      </button>
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">P</div>
              <div className="chatbot-header-text">
                <h4>Asistente Pediátrico</h4>
                <p>Respuesta inmediata</p>
              </div>
            </div>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {!showRedirect && (
              <div className="chatbot-options">
                {preguntasFrecuentes.map((item) => (
                  <button
                    key={item.id}
                    className="chat-option-btn"
                    onClick={() => handleOptionClick(item)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
            {showRedirect && (
              <div>
                <a
                  href={urlWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-whatsapp-redirect"
                >
                  <MessageCircle size={20} />
                  Continuar en WhatsApp
                </a>

                <button
                  onClick={handleReset}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#64748b",
                    fontSize: "0.78rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    margin: "12px auto 0 auto",
                    cursor: "pointer",
                  }}
                >
                  <RefreshCw size={14} /> Hacer otra pregunta
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotFloating;
