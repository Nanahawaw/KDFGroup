import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AuthBanner from "./AuthBanner";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import EmailVerification from "./EmailVerification";
import ForgotPassword from "./ForgotPassword";

function AuthPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = queryParams.get("page") || "signUp";
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    setPage(initialPage); // Updates page whenever URL changes
  }, [initialPage]);

  const renderPage = () => {
    switch (page) {
      case "signUp":
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
    <div className="relative flex flex-col lg:flex-row h-full min-h-screen w-full gap-3 xl:gap-10">
      {/* Left Section */}
      <div className="relative flex w-full lg:w-[60%] flex-grow">
        <AuthBanner />
      </div>

      {/* Right Section */}
      <div className="flex w-full lg:w-[40%] items-center bg-white p-8">
        {renderPage()}
      </div>
    </div>
  );
}

export default AuthPage;
