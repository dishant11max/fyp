const SocialAuth = () => {
  return (
    <div>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-black text-zinc-500">Or continue with</span>
        </div>
      </div>

      <button className="w-full inline-flex justify-center py-3 px-4 border border-zinc-800 rounded-xl bg-zinc-900/50 text-sm font-medium text-zinc-300 hover:bg-zinc-800/70 transition">
        Google
      </button>
    </div>
  );
};

export default SocialAuth;