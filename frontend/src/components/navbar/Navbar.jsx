import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center text-white font-bold font-mono">
            {`>_`}
          </div>
          <span className="text-2xl font-bold text-white font-mono tracking-tighter group-hover:text-violet-400 transition-colors">
            .repl
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/community">Community</Link>
        </div>

        {/* Desktop Auth & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-zinc-400 hover:text-white font-medium text-sm transition-colors">
            Sign In
          </button>
          <button className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Start Coding
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          <MobileNavLink onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink onClick={() => setIsOpen(false)}>
            Community
          </MobileNavLink>
          <div className="h-px bg-zinc-800 my-2"></div>
          <button className="text-zinc-400 hover:text-white font-medium text-left py-2">
            Sign In
          </button>
          <button className="w-full py-3 rounded-lg bg-violet-600 text-white font-bold text-center">
            Start Coding
          </button>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, active, href }) => (
  <a
    href={href}
    className={`text-sm font-medium transition-colors ${
      active ? "text-white" : "text-zinc-400 hover:text-violet-400"
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-lg font-medium text-zinc-300 hover:text-violet-400 text-left py-2"
  >
    {children}
  </button>
);

export default Navbar;
