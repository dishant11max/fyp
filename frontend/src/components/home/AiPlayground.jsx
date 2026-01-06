
import { useState } from "react";
import {
  Sparkles,
  Terminal,
  Copy,
  Check
} from "lucide-react";




const AiPlayground = () => {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('// Your generated code will appear here...');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const fetchWithRetry = async (url, options, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        if (response.status === 429) {
             throw new Error("Rate limit exceeded");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (err) {
      if (retries > 0) {
        await new Promise(res => setTimeout(res, delay));
        return fetchWithRetry(url, options, retries - 1, delay * 2);
      } else {
        throw err;
      }
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    setCode('// Summoning digital spirits...');
    
    const apiKey = ""; // Injected at runtime
    const systemPrompt = "You are an expert coding assistant for a platform called .repl. Generate clean, efficient, and modern code based on the user's request. Output ONLY the raw code, no markdown backticks, no explanations unless specifically asked in the comments of the code. If the user asks for a specific language, use it. Default to JavaScript if unsure.";

    try {
      const response = await fetchWithRetry(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] }
          })
        }
      );
      
      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (generatedText) {
        // Clean up markdown code blocks if the model adds them despite instructions
        const cleanCode = generatedText.replace(/^```[\w]*\n/g, '').replace(/\n```$/g, '');
        setCode(cleanCode);
      } else {
        setError("The spirits were silent. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to the AI mainframe. Please try again.");
      setCode('// Error generating code.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Text & Input */}
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-6">
              <Sparkles size={12} className="text-violet-400 animate-pulse" />
              .repl playground
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Code at the speed of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">thought.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              Stuck on logic? Need a boilerplate? Just ask. Our integrated AI assistant helps you write better code, faster.
            </p>
            
            <div className="bg-zinc-900/50 p-2 rounded-2xl border border-white/10 focus-within:border-violet-500 transition-colors shadow-lg">
              <textarea 
                className="w-full bg-transparent text-white p-4 resize-none outline-none min-h-[120px] placeholder:text-zinc-600 font-medium"
                placeholder="Describe what you want to build... (e.g., 'Write a Python function to check for palindromes')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="flex justify-between items-center px-2 pb-2">
                <span className="text-xs text-zinc-500 font-mono">CMD + Enter to send</span>
                <button 
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className={`px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
                    loading 
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
                      : 'bg-white text-black hover:bg-zinc-200 hover:scale-105'
                  }`}
                >
                  {loading ? (
                    <>Processing...</>
                  ) : (
                    <>Generate Code <Sparkles size={16} /></>
                  )}
                </button>
              </div>
            </div>
            {error && <p className="text-red-400 text-sm mt-4 font-medium">{error}</p>}
          </div>

          {/* Right Side: Code Output */}
          <div className="md:w-1/2 w-full">
            <div className="relative rounded-2xl bg-[#0d1117] border border-white/10 shadow-2xl overflow-hidden group">
              {/* Fake Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-3 text-xs text-zinc-500 font-mono">ai_generated.js</span>
                </div>
                <button 
                  onClick={copyToClipboard}
                  className="text-zinc-500 hover:text-white transition-colors"
                  title="Copy Code"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                </button>
              </div>
              
              {/* Code Area */}
              <div className="p-6 overflow-x-auto min-h-[300px] max-h-[300px] text-sm font-mono leading-relaxed relative">
                 {loading && (
                   <div className="absolute inset-0 bg-[#0d1117]/80 backdrop-blur-[2px] flex items-center justify-center z-10">
                     <div className="flex flex-col items-center gap-3">
                       <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
                       <span className="text-violet-400 text-xs font-bold tracking-wider animate-pulse">GENERATING...</span>
                     </div>
                   </div>
                 )}
                 <pre className={`text-zinc-300 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
                   <code>{code}</code>
                 </pre>
              </div>
            </div>
            
            {/* Decoration below card */}
            <div className="flex justify-end mt-4 gap-4 opacity-50">
               <div className="h-2 w-2 rounded-full bg-violet-500 animate-bounce delay-100"></div>
               <div className="h-2 w-2 rounded-full bg-cyan-500 animate-bounce delay-200"></div>
               <div className="h-2 w-2 rounded-full bg-fuchsia-500 animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AiPlayground;