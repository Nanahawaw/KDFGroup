import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/Group .png"

// eslint-disable-next-line react/prop-types
function LogIn({ nextPage }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    // const userData = {
    //   email: email,
    //   password: password,
    // }

    // before the API, how do we handle form errors?

    // signInApi(userData)
    // if response is successful
    // add response data to local State -- how do we store the local state?
    // clear form
    setEmail("")
    setPassword("")
    navigate("/Home")
  }

  const handleSignIn = () => {
    // render LogIn Page
    nextPage("signIn") // this is the setPage callback from AuthPage
  }

  const handleForgotPassword = () => {
    // render LogIn Page
    nextPage("forgotPassword") // this is the setPage callback from AuthPage
  }

  return (
    <div className="w-max flex items-center justify-center bg-white p-8">
      <div className="w-[430px] h-[752px] flex flex-col ">
        <div className="flex justify-flex-start mb-8">
          <img src={logo} alt="K Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-5xl font-semibold mb-4">Login</h2>
        <p className="mb-8 text-gray-500 text-lg">Welcome back!</p>

        <p className="mb-1 font-semibold text-lg">Email*</p>
        <input
          type="text"
          value={email}
          placeholder="Enter your email"
          className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <p className="mb-1 font-semibold text-lg">Password*</p>
        <input
          type="password"
          value={password}
          placeholder="Create a password"
          className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />

        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] mt-16"
        >
          Login
        </button>

        <button
          onClick={handleSubmit}
          className="py-2 px-6 border rounded-md border-color:#ABABB5 w-[430px] h-[52px] mt-1 font-semibold hover:bg-purple-700 "
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign in with Google
        </button>
        <p className="font-normal text-gray-500 mt-6 text-center">
          Do not have an account?{" "}
          <span
            className="text-purple-500 font-semibold hover:bg-purple-700"
            onClick={handleSignIn}
          >
            Sign in
          </span>
        </p>
        <p className="font-normal text-gray-500 mt-2 text-center">
          Forgot password?{" "}
          <span
            className="text-purple-500 font-semibold hover:bg-purple-700"
            onClick={handleForgotPassword}
          >
            Recover
          </span>
        </p>
      </div>
    </div>
  )
}

export default LogIn
