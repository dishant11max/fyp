const SignInLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black font-sans selection:bg-violet-500/30">
      {children}
    </div>
  );
};

export default SignInLayout;