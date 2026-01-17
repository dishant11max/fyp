const BrandingSection = () => {
  return (
    <div className="hidden lg:flex flex-1 flex-col justify-center p-12 relative overflow-hidden bg-zinc-950/50 border-r border-zinc-800/50">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950/0 to-zinc-950/0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950/0 to-zinc-950/0 pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            .repl
          </span>
        </h1>

        <p className="text-lg text-zinc-400 mb-8">
          The next-gen developer platform for building, collaborating, and
          shipping code faster. Join the community of creators.
        </p>

        <div className="flex space-x-4">
          <div className="h-2 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500" />
          <div className="h-2 w-2 rounded-full bg-zinc-800" />
          <div className="h-2 w-2 rounded-full bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default BrandingSection;
