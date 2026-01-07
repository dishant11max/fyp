const InputField = ({ label, type = 'text', placeholder, icon }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-400 mb-1">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600">
          {icon}
        </div>
        <input
          type={type}
          required
          placeholder={placeholder}
          className="block w-full pl-10 py-3 border border-zinc-800 rounded-xl bg-zinc-900/50 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600"
        />
      </div>
    </div>
  );
};

export default InputField;