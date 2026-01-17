import { Zap, Globe, Users, BookOpen, Terminal, Cpu } from "lucide-react";

const FeaturesSection = () => (
  <section className="py-24 bg-black relative border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Everything you need to ship
        </h2>
        <p className="text-zinc-400">
          Powerful features wrapped in a simple design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          icon={<Zap className="text-blue-400" />}
          title="Instant Execution"
          desc="Run your code in milliseconds. No server setup, no waiting times. Just pure speed."
        />
        <FeatureCard
          icon={<Globe className="text-cyan-400" />}
          title="Browser Based"
          desc="Access your projects from anywhere. Your environment lives in the cloud."
        />
        <FeatureCard
          icon={<Users className="text-indigo-400" />}
          title="Community Built"
          desc="Share snippets, ask questions, and collaborate with other developers in real-time."
        />
        <FeatureCard
          icon={<BookOpen className="text-emerald-400" />}
          title="Interactive Docs"
          desc="Learn as you type. Our smart documentation helps you master concepts faster."
        />
        <FeatureCard
          icon={<Terminal className="text-rose-400" />}
          title="Multi-Language"
          desc="Support for JavaScript, Python, HTML, and CSS. More languages coming soon."
        />
        <FeatureCard
          icon={<Cpu className="text-indigo-400" />}
          title="Beginner Friendly"
          desc="Clean interface designed for clarity. Perfect for your first line of code."
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all group">
    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-zinc-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

export default FeaturesSection;
