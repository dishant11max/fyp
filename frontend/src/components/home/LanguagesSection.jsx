const LanguageCard = ({ name, color, code }) => (
  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
    <div className={`w-3 h-3 rounded-full ${color} mb-4`}></div>
    <h4 className="text-white font-bold mb-2">{name}</h4>
    <div className="bg-black/50 p-2 rounded text-xs font-mono text-zinc-500">
      {code}
    </div>
  </div>
);
export default LanguageCard;