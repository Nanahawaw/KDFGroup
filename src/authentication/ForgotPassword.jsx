import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Group .png";

function ForgotPassword() {
  const [passwordForgotten, setPasswordForgotten] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleVerify = () => {
    // check code API
    // if response is successful:

    setPasswordForgotten(true);
  };

  const navigateHome = () => {
    navigate("/Home");
  };

  return (
    <div className="flex w-max items-center justify-center bg-white p-8">
      <div className="flex h-[752px] w-full flex-col justify-center lg:max-w-[430px]">
        <div
          className="justify-flex-start mb-8 flex cursor-pointer"
          onClick={navigateHome}
        >
          <img src={logo} alt="K Logo" className="h-12 w-12" />
        </div>
        <h2 className="mb-2 text-[40px] font-bold leading-[56px] tracking-[0.8px]">
          Forgot Password ?
        </h2>
        {!passwordForgotten ? (
          <div className="flex flex-col justify-center">
            <p className="mb-10 w-full max-w-[363px] text-center text-lg font-semibold text-gray-500">
              Enter your email bellow to reset your password.
            </p>

            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              className="border-color:#ABABB5 mb-10 mt-10 h-[52px] w-[430px] rounded border p-2 font-light"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="mt-10 flex flex-col justify-center">
              <button
                onClick={handleVerify}
                className="h-[52px] w-[430px] cursor-pointer rounded-md bg-purple-500 px-6 py-2 font-semibold text-white hover:bg-purple-700 focus:outline-none"
              >
                Verify
              </button>
              <button
                onClick={navigateHome}
                className="mt-4 h-[52px] w-[430px] cursor-pointer rounded-md bg-gray-500 px-6 py-2 font-semibold text-white hover:bg-gray-700 focus:outline-none"
              >
                Back
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10 flex flex-col justify-center">
            <p className="mb-1 text-lg font-semibold">New Password*</p>
            <input
              type="password"
              value={newPassword}
              placeholder="Create a password"
              className="border-color:#ABABB5 mb-3 h-[52px] w-[430px] rounded border p-2 font-light"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
            <p className="mb-1 text-lg font-semibold">Confirm Password*</p>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              className="border-color:#ABABB5 mb-3 h-[52px] w-[430px] rounded border p-2 font-light"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="mt-10 flex justify-center">
              <button
                onClick={navigateHome}
                className="h-[52px] w-[430px] cursor-pointer rounded-md bg-purple-500 px-6 py-2 font-semibold text-white hover:bg-purple-700 focus:outline-none"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
