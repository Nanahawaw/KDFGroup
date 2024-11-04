import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/Group .png"

function ForgotPassword() {
  const [passwordForgotten, setPasswordForgotten] = useState(false)
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  const handleVerify = () => {
    // check code API
    // if response is successful:

    setPasswordForgotten(true)
  }

  const handleGoHome = () => {
    navigate("/Home")
  }

  return (
    <div className="w-max flex items-center justify-center bg-white p-8">
      <div className="w-full lg:max-w-[430px] h-[752px] flex flex-col justify-center ">
        <div className="flex justify-flex-start mb-8">
          <img src={logo} alt="K Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-[40px] leading-[56px] tracking-[0.8px] font-bold mb-2">Forgot Password ?</h2>
        {!passwordForgotten ? (
          <div className="flex flex-col justify-center ">
            <p className="mb-10 font-semibold text-center w-full max-w-[363px] text-gray-500 text-lg">
              Enter your email bellow to reset your password.
            </p>

            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mt-10 mb-10"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <div className="flex flex-col justify-center mt-10">
              <button
                onClick={handleVerify}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] "
              >
                Verify
              </button>
              <button
                onClick={handleGoHome}
                className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none w-[430px] h-[52px] mt-4"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center mt-10">
            <p className="mb-1 font-semibold text-lg">New Password*</p>
            <input
              type="password"
              value={newPassword}
              placeholder="Create a password"
              className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
              onChange={(e) => {
                setNewPassword(e.target.value)
              }}
            />
            <p className="mb-1 font-semibold text-lg">Confirm Password*</p>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
              onChange={(e) => {
                setConfirmPassword(e.target.value)
              }}
            />
            <div className="flex justify-center mt-10">
              <button
                onClick={handleGoHome}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] "
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
