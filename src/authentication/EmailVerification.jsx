import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Group .png";

function EmailVerification() {
  const [code, setCode] = useState(new Array(6).fill(""));
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {
    // check code API
    // if response is successful:

    setIsVerified(true);
  };

  const handleResendCode = () => {
    // resendCode API
    //should we add a rendered div that code has been sent again?
  };
  const navigateHome = () => {
    navigate("/Home");
  };

  return (
    <div className="flex w-max items-center justify-center bg-white p-8">
      <div className="flex h-[752px] w-[430px] flex-col">
        <div
          className="justify-flex-start mb-8 flex cursor-pointer"
          onClick={navigateHome}
        >
          <img src={logo} alt="K Logo" className="h-12 w-12" />
        </div>
        <h2 className="mb-8 text-4xl font-semibold">Verify your e-mail</h2>
        {!isVerified ? (
          <div className="flex flex-col justify-center">
            <p className="mb-10 text-center text-lg text-gray-500">
              Please check your mail and enter the 6 digit code that was sent to{" "}
              <span className="font-medium">abcd@gmail.com</span> below.
            </p>
            <div className="mb-10 mt-10 flex justify-center">
              {code.map((data, index) => {
                return (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="mx-2 h-14 w-12 rounded-md border border-gray-300 text-center text-lg focus:border-purple-500 focus:outline-none"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                );
              })}
            </div>

            <p className="mb-10 mt-10 text-center font-normal text-gray-500">
              Did not receive the code?{" "}
              <span
                className="cursor-pointer font-semibold text-purple-500 hover:bg-purple-700"
                onClick={handleResendCode}
              >
                Resend code
              </span>
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={handleVerify}
                className="h-[52px] w-[430px] cursor-pointer rounded-md bg-purple-500 px-6 py-2 font-semibold text-white hover:bg-purple-700 focus:outline-none"
              >
                Verify
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <p className="mb-10 text-center text-2xl text-gray-500">
              Your e-mail verification was successful. This will enable you:
            </p>
            <ul className="text-left">
              <li className="my-6 flex items-center">
                <span className="mx-8 h-3 w-3 rounded-full bg-purple-500"></span>
                Reset your password at any time.
              </li>
              <li className="my-6 flex items-center">
                <span className="mx-8 h-3 w-3 rounded-full bg-purple-500"></span>
                Get updates on latest gists on your favorite shows.
              </li>
            </ul>
            <div className="flex justify-center">
              <button
                onClick={navigateHome}
                className="mt-10 h-[52px] w-[430px] cursor-pointer rounded-md bg-purple-500 px-6 py-2 font-semibold text-white hover:bg-purple-700 focus:outline-none"
              >
                Go to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmailVerification;
