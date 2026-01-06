import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Radio,
  Layout,
  Server,
  Heart,
  Check,
  Settings,
  Send
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
// Assuming Footer is in the same relative path as Navbar based on previous code
import Footer from "../components/footer/Footer"; 

const CommunityPage = ({ onNavigate }) => {
  const [channel, setChannel] = useState('general');
  // Local state for messages instead of Firestore
  const [messages, setMessages] = useState([]); 
  const [newMessage, setNewMessage] = useState('');
  
  // User state (simplified, no auth object needed)
  const [username, setUsername] = useState('Anonymous');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  
  const messagesEndRef = useRef(null);

  // 1. Load Username from LocalStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem('repl_username');
    if (savedName) {
      setUsername(savedName);
      setTempName(savedName);
    }
  }, []);

  // 2. Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, channel]);

  // Handle Local Message Sending
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newMsg = {
      id: Date.now().toString(), // Simple unique ID
      text: newMessage,
      sender: username,
      channel: channel,
      timestamp: new Date(), // Local Date object
      type: 'text'
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage('');
  };

  const saveName = () => {
    if (tempName.trim()) {
      setUsername(tempName);
      localStorage.setItem('repl_username', tempName);
      setIsEditingName(false);
    }
  };

  // Filter messages for current channel for rendering
  const currentChannelMessages = messages.filter(m => m.channel === channel);

  const channels = [
    { id: 'general', label: 'GENERAL_UPLINK', icon: <Radio size={14} /> },
    { id: 'frontend', label: 'UI_DEV_OPS', icon: <Layout size={14} /> },
    { id: 'backend', label: 'SERVER_LOGS', icon: <Server size={14} /> },
    { id: 'help', label: 'DEBUG_ASSIST', icon: <Heart size={14} /> },
  ];

  return (
    <div className="bg-black text-green-400 min-h-screen font-mono flex flex-col overflow-hidden selection:bg-green-900 selection:text-white">
      <Navbar onNavigate={onNavigate} currentView="community" />
      
      <div className="flex-1 pt-24 max-w-7xl mx-auto w-full flex flex-col overflow-hidden h-screen pb-6 px-6 gap-4">
        
        {/* TOP BAR: HUD & Channels */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
            
           {/* Connection Status */}
           <div className="flex items-center gap-4">
              <div className="flex flex-col">
                 <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Connection Status</span>
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-bold text-green-500">LOCAL_NET</span>
                 </div>
              </div>
              <div className="h-8 w-[1px] bg-zinc-800 hidden md:block"></div>
              
              {/* Identity Module */}
              <div className="flex flex-col group relative">
                 <span className="text-[10px] text-zinc-600 tracking-widest uppercase">Identity</span>
                 {isEditingName ? (
                   <div className="flex items-center gap-1">
                      <input 
                        autoFocus
                        value={tempName}
                        onChange={(e) => setTempName(e.target.value)}
                        className="bg-zinc-900 text-white text-xs border border-zinc-700 w-24 outline-none px-1"
                        onKeyDown={(e) => e.key === 'Enter' && saveName()}
                      />
                      <button onClick={saveName}><Check size={12} /></button>
                   </div>
                 ) : (
                   <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsEditingName(true)}>
                      <span className="text-sm font-bold text-violet-400">@{username}</span>
                      <Settings size={12} className="text-zinc-600 opacity-0 group-hover:opacity-100" />
                   </div>
                 )}
              </div>
           </div>

           {/* Channel Tabs (Horizontal) */}
           <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto scrollbar-hide">
              {channels.map(ch => (
                 <button
                    key={ch.id}
                    onClick={() => setChannel(ch.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-bold border border-transparent rounded transition-all ${
                       channel === ch.id 
                       ? "bg-zinc-900 text-green-400 border-green-900 shadow-[0_0_10px_rgba(34,197,94,0.1)]" 
                       : "text-zinc-600 hover:text-zinc-400 hover:bg-zinc-900/50"
                    }`}
                 >
                    {ch.icon}
                    {ch.label}
                 </button>
              ))}
           </div>
        </div>

        {/* MAIN TERMINAL: Chat Stream */}
        <div className="flex-1 bg-black/50 border border-zinc-800 rounded-lg overflow-hidden relative shadow-[inset_0_0_20px_rgba(0,0,0,1)]">
           {/* CRT Scanline Effect Overlay */}
           <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] opacity-20"></div>
           
           <div className="absolute top-0 left-0 w-full h-6 bg-zinc-900/80 border-b border-zinc-800 flex items-center px-4 justify-between z-20">
              <span className="text-[10px] text-zinc-500">ROOT_ACCESS::{channel.toUpperCase()}</span>
              <div className="flex gap-1.5">
                 <div className="w-2 h-2 rounded-full bg-red-900"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-900"></div>
                 <div className="w-2 h-2 rounded-full bg-green-900"></div>
              </div>
           </div>

           <div className="h-full overflow-y-auto p-4 pt-10 font-mono text-sm space-y-1 scrollbar-thin scrollbar-thumb-zinc-800">
              {currentChannelMessages.length === 0 ? (
                 <div className="text-zinc-700 mt-4">
                    <span>{'>'} SYSTEM_INIT...</span><br/>
                    <span>{'>'} ESTABLISHING LOCAL UPLINK TO #{channel.toUpperCase()}...</span><br/>
                    <span>{'>'} READY FOR INPUT.</span><span className="animate-pulse">_</span>
                 </div>
              ) : (
                currentChannelMessages.map((msg) => (
                    <div key={msg.id} className="hover:bg-zinc-900/30 px-2 -mx-2 py-0.5 group">
                       <span className="text-zinc-600 mr-3 text-[10px]">
                          [{msg.timestamp.toLocaleTimeString([], { hour12: false })}]
                       </span>
                       <span className={`font-bold mr-3 ${msg.sender === 'Anonymous' ? 'text-zinc-500' : 'text-violet-400'}`}>
                          {`<${msg.sender}>`}
                       </span>
                       <span className="text-zinc-300 break-all">{msg.text}</span>
                    </div>
                 ))
              )}
              <div ref={messagesEndRef} />
           </div>
        </div>

        {/* INPUT: Command Line */}
        <div className="bg-zinc-900/20 border border-zinc-800 p-2 rounded flex items-center gap-3">
           <span className="text-green-500 font-bold ml-2">❯</span>
           <form onSubmit={handleSendMessage} className="flex-1">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full bg-transparent outline-none text-green-300 placeholder:text-zinc-700 font-mono"
                placeholder="Enter command or message..."
                autoComplete="off"
              />
           </form>
           <button onClick={handleSendMessage} className="text-zinc-600 hover:text-white transition-colors px-4">
              <Send size={14} />
           </button>
        </div>

      </div>
    </div>
  );
};

export default CommunityPage;