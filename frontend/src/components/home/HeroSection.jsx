
import { Terminal, ChevronRight } from "lucide-react";
const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
    {/* Background Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-violet-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>

    <div className="max-w-5xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs font-medium mb-8 animate-fade-in-up backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
        v1.0 is now live
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
        Code. Compile. <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
          Create.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        The Gen-Z coding platform built for the next generation of builders. 
        Write JavaScript, Python, HTML, & CSS instantly in your browser. 
        No setup required.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10 flex items-center justify-center gap-2">
          <Terminal size={20} />
          Start Coding Now
        </button>
        <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black border border-zinc-800 text-white font-semibold hover:bg-zinc-900 hover:border-violet-500/50 transition-all flex items-center justify-center gap-2 group">
          View Documentation
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform group-hover:text-violet-400" />
        </button>
      </div>

      {/* Code Snippet Preview */}
      <div className="mt-20 mx-auto max-w-4xl bg-[#0d1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden text-left transform rotate-1 hover:rotate-0 transition-transform duration-500 hover:shadow-violet-900/20 hover:border-violet-500/30">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <div className="ml-4 text-xs text-zinc-500 font-mono">script.js</div>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed">
            <code className="text-violet-400">const</code> <code className="text-white">welcome</code> <code className="text-violet-400">=</code> <code className="text-yellow-300">()</code> <code className="text-violet-400">=&gt;</code> <code className="text-yellow-300">{`{`}</code>{'\n'}
            <span className="pl-4 text-zinc-500">// Your journey starts here</span>{'\n'}
            <span className="pl-4 text-cyan-400">console</span>.<code className="text-fuchsia-400">log</code>(<code className="text-emerald-400">"Hello, World! Welcome to .repl"</code>);{'\n'}
            <span className="pl-4 text-violet-400">return</span> <code className="text-white">true</code>;{'\n'}
            <code className="text-yellow-300">{`}`}</code>;
          </pre>
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
