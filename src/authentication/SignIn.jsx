import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/Group .png"

// eslint-disable-next-line react/prop-types
function SignIn({ nextPage }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    backend: "",
  })

  // Debounce timer states
  const emailTimer = useRef(null)
  const passwordTimer = useRef(null)

  // Email validation logic
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address."
    }
    return ""
  }

  // Password validation logic
  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password too short, must be at least 8 characters."
    }
    return ""
  }

  // Debounced Email Validation Effect
  useEffect(() => {
    if (email) {
      // Clear the existing timer
      if (emailTimer.current) clearTimeout(emailTimer.current)

      // Set a new timer for validation after 500ms of no typing
      emailTimer.current = setTimeout(() => {
        const emailError = validateEmail(email)
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: emailError,
        }))
      }, 500)
    }

    // Cleanup function to clear the timer when component unmounts or email changes
    return () => {
      if (emailTimer.current) clearTimeout(emailTimer.current)
    }
  }, [email])

  // Debounced Password Validation Effect
  useEffect(() => {
    if (password) {
      // Clear the existing timer
      if (passwordTimer.current) clearTimeout(passwordTimer.current)

      // Set a new timer for validation after 500ms of no typing
      passwordTimer.current = setTimeout(() => {
        const passwordError = validatePassword(password)
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: passwordError,
        }))
      }, 500)
    }
    // Cleanup function to clear the timer when component unmounts or email changes
    return () => {
      if (passwordTimer.current) clearTimeout(passwordTimer.current)
    }
  }, [password])

  const handleSubmit = async () => {
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (emailError || passwordError) {
      // Update errors if any are found
      setFormErrors({
        email: emailError,
        password: passwordError,
      })
      return
    }

    // No client-side errors, proceed with API call
    const userData = {
      email: email,
      password: password,
    }

    try {
      // Mock backend API call to create a new user
      const response = await fakeApiSignUp(userData) // Replace with actual API

      if (!response.success) {
        // Backend error (email already exists in database)
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          backend: "This email is already registered. Please log in or reset password",
        }))
      } else {
        // API call successful, navigate to home page
        // add response data to local State -- how do we store the local state?
        setUsername("")
        setEmail("")
        setPassword("")
        // navigate("/Home") -not yet as we need the email verification
        nextPage("emailVerification")
      }
    } catch (error) {
      // Handle any unexpected backend errors
      console.error(error)
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        backend: "An error occurred. Please try again later.",
      }))
    }
  }

  const handleLogIn = () => {
    //render LogIn Page
    nextPage("logIn") // this is the setPage callback from AuthPage
  }

  return (
    <div className="w-max flex items-center justify-center bg-white p-8">
      <form className="w-[430px] h-[752px] flex flex-col ">
        <div className="flex justify-flex-start mb-8">
          <img src={logo} alt="K Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-5xl font-semibold mb-4">Sign Up</h2>
        <p className="mb-8 text-gray-500 text-lg">To get started</p>
        <p className="mb-1 font-semibold text-lg">Username*</p>
        <input
          type="text"
          value={username}
          placeholder="Enter your username"
          className="w-[430px] h-[52px] border rounded font-light border-color:#ABABB5 p-2 mb-3"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
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
        {formErrors.email && <p className="text-red-500 mb-3">{formErrors.email}</p>}
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
        {formErrors.password && <p className="text-red-500 mb-3">{formErrors.password}</p>}
        <p className="mb-4 text-16 text-gray-500 font-light text-base">
          Must be at least 8 characters
        </p>
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] mt-10"
        >
          Create Account
        </button>

        <button
          onClick={handleSubmit}
          className="py-2 px-6 border rounded-md border-color:#ABABB5 w-[430px] h-[52px] mt-1 font-semibold hover:bg-purple-700 "
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-2" />
          Sign up with Google
        </button>
        <p className="font-normal text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <span className="text-purple-500 font-semibold hover:bg-purple-700" onClick={handleLogIn}>
            Log in
          </span>
        </p>
      </form>
    </div>
  )
}

export default SignIn
