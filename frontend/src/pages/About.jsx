import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Layout, Server } from "lucide-react";


const SectionTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mb-6 border-l-2 border-violet-500 pl-4">
    {children}
  </h2>
);

const PrincipleCard = ({ title, desc }) => (
  <div className="p-5 border border-zinc-800 rounded bg-zinc-900/20">
    <h3 className="text-zinc-200 font-medium mb-2">{title}</h3>
    <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TeamMember = ({ name, role }) => (
  <li className="flex justify-between items-center py-3 border-b border-zinc-800/50 last:border-0">
    <span className="text-zinc-300 font-medium">{name}</span>
    <span className="text-zinc-500 text-sm font-mono">{role}</span>
  </li>
);

const TechItem = ({ label }) => (
  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-400 font-mono">
    {label}
  </span>
);

const AboutPage = () => {
  return (
    <div className="bg-black text-zinc-300 min-h-screen font-sans selection:bg-zinc-800 selection:text-white">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        {/* Intro Section */}
        <div className="mb-20">
          <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">About .repl</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            .repl is a browser-based coding platform engineered to lower the barrier to entry for programming. 
            Built by students, for developers, it provides an instant, zero-setup environment to write, 
            compile, and execute code directly in the browser.
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-20">
          <SectionTitle>Vision & Purpose</SectionTitle>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            The complexity of setting up local development environments often discourages beginners. 
            .repl solves this by abstracting the infrastructure, allowing users to focus purely on logic and syntax. 
            Our vision is to create a tool that is as accessible as a notepad but as powerful as an IDE, 
            fostering a "learning-first" ecosystem.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <PrincipleCard 
              title="Clean Interface" 
              desc="A distraction-free UI that prioritizes the code editor and output." 
            />
            <PrincipleCard 
              title="Instant Execution" 
              desc="Real-time compilation and feedback loops to accelerate learning." 
            />
            <PrincipleCard 
              title="Accessibility" 
              desc="Available on any device with a browser, democratizing access to coding tools." 
            />
            <PrincipleCard 
              title="Beginner Friendly" 
              desc="Integrated documentation and simplified error reporting." 
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <SectionTitle>The Engineering Team</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4 flex items-center gap-2">
                <Layout size={16} className="text-violet-400"/> Frontend Engineering
              </h3>
              <ul>
                <TeamMember name="Md Sahil" role="Frontend Head" />
                <TeamMember name="Arbaz Khan" role="Junior Frontend Engineer" />
                <TeamMember name="Sk Rais" role="Junior Frontend Engineer" />
              </ul>
            </div>
            <div>
              <h3 className="text-zinc-100 font-semibold mb-4 flex items-center gap-2">
                <Server size={16} className="text-violet-400"/> Backend Engineering
              </h3>
              <ul>
                <TeamMember name="Subasis Panigrahi" role="Backend Head" />
                <TeamMember name="Himanshu Das" role="Backend Engineer" />
                <TeamMember name="Dishant Savadia" role="Backend Head" />
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <SectionTitle>Technology Stack</SectionTitle>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest mb-3 font-semibold">Frontend</div>
              <div className="flex flex-wrap gap-2">
                <TechItem label="React.js" />
                <TechItem label="Tailwind CSS" />
                <TechItem label="Vite" />
              </div>
            </div>
            
            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest mb-3 font-semibold">Backend</div>
              <div className="flex flex-wrap gap-2">
                <TechItem label="Node.js" />
                <TechItem label="Express.js" />
              </div>
            </div>

            <div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest mb-3 font-semibold">Tools & Infrastructure</div>
              <div className="flex flex-wrap gap-2">
                <TechItem label="Monaco Editor" />
                <TechItem label="Gemini / Claude AI" />
                <TechItem label="GitHub" />
                <TechItem label="REST APIs" />
              </div>
            </div>
          </div>
        </section>

        {/* Project Context */}
        <section className="p-8 border border-zinc-800 rounded-lg bg-zinc-900/10">
          <h3 className="text-white font-semibold mb-2">Project Context</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            .repl was architected and built as a final-year academic project. It represents the culmination 
            of our bca curriculum, emphasizing real-world development practices, version control, 
            collaborative workflows, and system design principles.
          </p>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;