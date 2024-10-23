import { useState } from "react";
import { useLocation } from "react-router-dom";
import AuthBanner from "./AuthBanner";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import EmailVerification from "./EmailVerification";
import ForgotPassword from "./ForgotPassword";

function AuthPage() {
  const location = useLocation();
  const initialPage = location.state?.pageString || "signIn";
  const [page, setPage] = useState(initialPage);

  const renderPage = () => {
    switch (page) {
      case "signIn":
        return <SignUp nextPage={setPage} />;
      case "logIn":
        return <LogIn nextPage={setPage} />;
      case "emailVerification":
        return <EmailVerification />;
      case "forgotPassword":
        return <ForgotPassword />;
      default:
        return <div></div>;
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full">
      {/* Left Section */}
      <div className="relative flex w-[60%] flex-grow">
        <AuthBanner />
      </div>

      {/* Right Section */}
      <div className="flex w-[40%] items-center justify-center bg-white p-8">
        {renderPage()}
      </div>
    </div>
  );
}

export default AuthPage;
