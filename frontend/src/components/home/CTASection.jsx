import { Terminal, ArrowRight } from "lucide-react";
const CTASection = () => (
  <section className="py-32 px-6 bg-black border-t border-white/5 relative">
    <div className="max-w-5xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-900/30 border border-white/10 px-8 py-20 md:px-20 md:py-24 text-center group">
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-violet-600/30 transition-colors duration-700"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            System Ready
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Ready to build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-200 via-white to-violet-200">
              the future?
            </span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Initialize your environment in seconds. Join the next generation of developers shipping code on <span className="text-white font-mono">.repl</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
             <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-violet-50 transition-all transform hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3">
               <Terminal size={20} />
               Start Coding
             </button>
             <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-black border border-zinc-800 text-white font-bold text-lg hover:bg-zinc-900 hover:border-zinc-700 transition-all flex items-center justify-center gap-3 group/btn">
               Read Documentation
               <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* Decorative Grid Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
      </div>
    </div>
  </section>
);
export default CTASection;