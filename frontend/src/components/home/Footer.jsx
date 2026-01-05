const Footer = () => (
  <footer className="bg-black py-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded bg-violet-600 flex items-center justify-center text-white text-xs font-bold font-mono">{`>_`}</div>
          <span className="text-xl font-bold text-white font-mono">.repl</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Built for the future. <br />
          © 2024 .repl Inc.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-4">Product</h4>
        <ul className="space-y-2 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-white">Editor</a></li>
          <li><a href="#" className="hover:text-white">Features</a></li>
          <li><a href="#" className="hover:text-white">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Resources</h4>
        <ul className="space-y-2 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-white">Docs</a></li>
          <li><a href="#" className="hover:text-white">Learn</a></li>
          <li><a href="#" className="hover:text-white">Community</a></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-4">Legal</h4>
        <ul className="space-y-2 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-white">Privacy</a></li>
          <li><a href="#" className="hover:text-white">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
