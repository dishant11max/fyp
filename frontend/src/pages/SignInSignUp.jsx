import { useLocation } from 'react-router-dom';
import SignInLayout from '../components/SignLayout/SignInLayout';
import BrandingSection from '../components/SignLayout/BrandingSection';
import SignInForm from '../components/SignLayout/SignInForm';

const SignInSignUp = () => {
  const { pathname } = useLocation();
  const isSignUp = pathname === '/signup';

  return (
    <>
      
      <SignInLayout>
      <BrandingSection />
      <SignInForm isSignUp={isSignUp} />
    </SignInLayout>
    </>
  );
};

export default SignInSignUp;
