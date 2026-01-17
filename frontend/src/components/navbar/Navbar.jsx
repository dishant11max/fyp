import React, { useState } from "react"; // Removed useEffect since we don't need scroll detection anymore
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Removed the scroll listener logic entirely to make it "static" and consistent.

  return (
    <nav
      // Changed 'fixed' to 'sticky'. 
      // Added consistent background color and border to prevent white spaces showing through.
      className="sticky top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 py-3 transition-all duration-300"
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
          <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-white hover:text-violet-400 transition-colors">Home</Link>
          <Link to="/about" className="text-sm font-medium text-zinc-400 hover:text-white hover:text-violet-400 transition-colors">About</Link>
          <Link to="/docs" className="text-sm font-medium text-zinc-400 hover:text-white hover:text-violet-400 transition-colors">Docs</Link>
          <Link to="/community" className="text-sm font-medium text-zinc-400 hover:text-white hover:text-violet-400 transition-colors">Community</Link>
        </div>

        {/* Desktop Auth & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/signin">
            <button className="text-zinc-400 hover:text-white font-medium text-sm transition-colors">
              Sign In
            </button>
          </Link>
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
          <Link to="/signin" onClick={() => setIsOpen(false)}>
            <button className="text-zinc-400 hover:text-white font-medium text-left py-2 w-full">
              Sign In
            </button>
          </Link>
          <button className="w-full py-3 rounded-lg bg-violet-600 text-white font-bold text-center">
            Start Coding
          </button>
        </div>
      )}
    </nav>
  );
};

// Simplified the NavLink helper since we are using Link component directly above for cleaner code
const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-lg font-medium text-zinc-300 hover:text-violet-400 text-left py-2"
  >
    {children}
  </button>
);

export default Navbar;