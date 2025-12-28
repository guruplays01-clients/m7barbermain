
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Sparkles, X, MessageSquare, Loader2, Scissors, User, Zap } from 'lucide-react';

interface AIAdvisorProps {
  onClose: () => void;
}

const AIAdvisor: React.FC<AIAdvisorProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm your M7 Barber Style Consultant. Describe your face shape, hair type, or the vibe you're going for, and I'll suggest the perfect cut for you!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Use the injected environment variable directly
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are the "M7 Style Consultant", an expert barber AI. Your job is to suggest haircuts based on user input. 
            Keep answers professional, stylish, and brief. Recommend specific services from this list if relevant: 
            Skin Fade, Classic Scissor Cut, Beard Sculpt, Hot Towel Shave. 
            Current request: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are the M7 Style Consultant. You work for M7 Barber Kippax. You are polite, knowledgeable about men's grooming, and focus on style trends.",
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Try asking about a specific fade or beard style!";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops, my style books are a bit dusty. Please try asking again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-neutral-950 border border-[#D4AF37]/30 w-full max-w-2xl rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col h-[80vh] animate-in fade-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-neutral-900 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 gold-bg rounded-lg">
              <Sparkles className="text-black w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-serif">M7 Style Consultant</h3>
              <p className="text-xs gold-text uppercase tracking-widest font-bold">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-neutral-900 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
                <div className={`p-2 rounded-lg shrink-0 ${msg.role === 'user' ? 'bg-[#D4AF37]' : 'bg-neutral-800'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-black" /> : <Scissors className="w-4 h-4 text-[#D4AF37]" />}
                </div>
                <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-[#D4AF37] text-black rounded-tr-none font-medium' : 'bg-neutral-900 text-neutral-300 rounded-tl-none'}`}>
                  {msg.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex flex-row items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-800">
                  <Loader2 className="w-4 h-4 text-[#D4AF37] animate-spin" />
                </div>
                <div className="p-4 bg-neutral-900 rounded-2xl rounded-tl-none text-neutral-500 italic">
                  Analyzing style trends...
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-neutral-900">
          <div className="flex items-center space-x-4 bg-neutral-900 rounded-2xl p-2 pl-6 pr-2 border border-neutral-800 focus-within:border-[#D4AF37]/50 transition-colors">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="E.g. I have a round face, what fade works best?"
              className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-neutral-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 gold-bg text-black rounded-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
            >
              <Zap className="w-5 h-5 fill-current" />
            </button>
          </div>
          <p className="text-center text-[10px] text-neutral-600 mt-4 uppercase tracking-[0.2em]">
            Expert advice for the modern gentleman
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;
