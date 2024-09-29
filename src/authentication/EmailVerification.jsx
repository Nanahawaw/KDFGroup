import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../assets/Group .png"

const EmailVerification = () => {
  const [code, setCode] = useState(new Array(6).fill(""))
  const [isVerified, setIsVerified] = useState(false)
  const navigate = useNavigate()

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))])
    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  }

  const handleVerify = () => {
    // check code API
    // if response is successful:

    setIsVerified(true)
  }
  const handleGoHome = () => {
    navigate("/Home")
  }

  const handleResendCode = () => {
    // resendCode API
    //should we add a rendered div that code has been sent again?
  }

  return (
    <div className="w-max flex items-center justify-center bg-white p-8">
      <div className="w-[430px] h-[752px] flex flex-col ">
        <div className="flex justify-flex-start mb-8">
          <img src={logo} alt="K Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-4xl font-semibold mb-8">Verify your e-mail</h2>
        {!isVerified ? (
          <div className="flex flex-col justify-center">
            <p className="mb-10 text-center text-gray-500 text-lg">
              Please check your mail and enter the 6 digit code that was sent to{" "}
              <span className="font-medium">abcd@gmail.com</span> below.
            </p>
            <div className="flex justify-center mb-10 mt-10">
              {code.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-12 h-14 mx-2 text-center text-lg border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                )
              })}
            </div>

            <p className="font-normal text-gray-500 mt-10 mb-10 text-center">
              Did not receive the code?{" "}
              <span
                className="text-purple-500 font-semibold hover:bg-purple-700"
                onClick={handleResendCode}
              >
                Resend code
              </span>
            </p>

            <div className="flex justify-center  mt-10">
              <button
                onClick={handleVerify}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px]"
              >
                Verify
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <p className="mb-10 text-center text-gray-500 text-2xl">
              Your e-mail verification was successful. This will enable you:
            </p>
            <ul className="text-left">
              <li className="my-6 flex items-center">
                <span className="w-3 h-3 mx-8 bg-purple-500 rounded-full"></span>
                Reset your password at any time.
              </li>
              <li className="my-6 flex items-center">
                <span className="w-3 h-3 mx-8 bg-purple-500 rounded-full"></span>
                Get updates on latest gists on your favorite shows.
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                onClick={handleGoHome}
                className="bg-purple-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700 focus:outline-none w-[430px] h-[52px] mt-10"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EmailVerification
