import { useState } from "react"
import { useLocation } from "react-router-dom"
import AuthBanner from "./AuthBanner"
import SignIn from "./SignIn"
import LogIn from "./LogIn"
import EmailVerification from "./EmailVerification"
import ForgotPassword from "./ForgotPassword"

const AuthPage = () => {
  const location = useLocation()
  const initialPage = location.state?.pageString || "signIn"
  const [page, setPage] = useState(initialPage)

  const renderPage = () => {
    switch (page) {
      case "signIn":
        return <SignIn nextPage={setPage} />
      case "logIn":
        return <LogIn nextPage={setPage} />
      case "emailVerification":
        return <EmailVerification />
      case "forgotPassword":
        return <ForgotPassword />
      default:
        return <div></div>
    }
  }

  return (
    <div className="relative flex w-full h-full min-h-screen">
      {/* Left Section */}
      <div className="flex w-[60%] flex-grow relative">
        <AuthBanner />
      </div>

      {/* Right Section */}
      <div className="w-[40%] flex items-center justify-center bg-white p-8">{renderPage()}</div>
    </div>
  )
}

export default AuthPage
