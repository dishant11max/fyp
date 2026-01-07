import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import InputField from './InputField';
import SocialAuth from './SocialAuth';

const SignInForm = ({ isSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 bg-black">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white">
            {isSignUp ? 'Create an account' : 'Sign In'}
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            {isSignUp
              ? 'Start your coding journey today.'
              : 'Welcome back! Please enter your details.'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            {isSignUp && (
              <InputField
                label="Username"
                placeholder="username"
                icon={<User className="h-5 w-5" />}
              />
            )}

            <InputField
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={<Mail className="h-5 w-5" />}
            />

            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-600" />
                </div>

                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full pl-10 pr-10 py-3 border border-zinc-800 rounded-xl bg-zinc-900/50 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-600 hover:text-zinc-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>
          </div>

          <button className="group relative w-full flex justify-center py-3 px-4 font-bold rounded-xl text-white bg-gradient-to-r from-violet-600 to-fuchsia-600">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <ArrowRight className="h-5 w-5 text-violet-200" />
            </span>
            {isSignUp ? 'Create Account' : 'Sign In'}
          </button>
        </form>

        <SocialAuth />

        <div className="text-center text-sm text-zinc-400">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <Link
            to={isSignUp ? '/signin' : '/signup'}
            className="font-medium text-violet-500 hover:text-violet-400"
          >
            {isSignUp ? 'Sign in instead' : 'Create one now'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;