import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import octicon from "../assets/octicon.png";
import assets from "../assets/Group .png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    if (dropdownOpen) {
      document.body.classList.remove("backdrop-blur");
    } else {
      document.body.classList.add("backdrop-blur");
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      document.body.classList.remove("backdrop-blur");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAuthNavigation = (pageString) => {
    setMobileMenuOpen(false);
    navigate(`/Auth?page=${pageString}`);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 grid h-[80px] bg-[#ffffff] p-4 font-sans text-[#000000] shadow">
      <div className="flex cursor-pointer items-center justify-between md:pl-8 md:pr-8">
        <Link to="/" className="flex items-center gap-1">
          <img alt="" src={assets} />
          <h1>KDFG</h1>
        </Link>
        <div className="hidden leading-[22.4px] p-1 sm:gap-[12px] md:text-[15px]  lg:flex lg:gap-[40px] lg:text-[15px]">
          <Link to="/TrendingNow">Trending Now</Link>
          <Link to="/Community">Community</Link>
          <Link to="/RecapsPage">Episode Recaps</Link>
          <Link to="/AboutUs">About Us</Link>
        </div>
          <div>
          <form
  className="flex md:flex-row-reverse h-[38px] w-full md:w-[210px] items-center justify-between  rounded-md md:border p-4 outline-none md:gap-1"
>
  <input
    placeholder="Search"
    className="w-full border-none  text-[15px] outline-none placeholder-transparent md:placeholder:text-black text-right md:text-left"
  />
  <img alt="" src={octicon} className="md:pl-1" />
</form>

          </div>
        <div className="hidden items-center gap- lg:flex">
          <div onClick={toggleDropdown} ref={dropdownRef} className="relative">
            <div className="flex gap-1">
              <button className="h-[48px] md:w-[148px] rounded-md border bg-[#7F56DA] text-white">
                Get Started
              </button>
            </div>
            {dropdownOpen && (
              <div className="fixed inset-0 z-10">
                <div className="absolute right-0 z-20 mr-4 mt-[81px] flex h-[179px] w-[272px] flex-col rounded-md bg-white shadow-lg">
                  <div
                    onClick={toggleDropdown}
                    className="m-0 flex cursor-pointer justify-end pr-8 pt-4"
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      onClick={toggleDropdown}
                      className="flex justify-end"
                    />
                  </div>
                  <div className="grid h-[130px] items-center justify-center">
                    <button
                      className="h-[38px] w-[220px] rounded-md border hover:bg-[#DCE3F5]"
                      onClick={() => handleAuthNavigation("logIn")}
                    >
                      Login
                    </button>
                    <button
                      className="h-[38px] w-[220px] rounded-md border hover:bg-[#DCE3F5]"
                      onClick={() => handleAuthNavigation("signUp")}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          className="flex items-center lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 flex justify-end bg-gray-800 bg-opacity-50">
          <div className="w-[100%] bg-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex justify-center items-center"> <img alt="" src={assets} />
              <h2>KDFG</h2></div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <nav className="mt-4">
              <Link
                to="/Community"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Community
              </Link>
              <Link
                to="/Trendingnow"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trending Now
              </Link>
              <Link
                to="/RecapsPage"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Episode Recaps
              </Link>
              <Link
                to="/AboutUs"
                className="block py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="mt-4 flex justify-around">
                <div className="flex w-[100%] justify-between">
                  <button
                    className="h-[38px] w-[120px] rounded-md border hover:bg-[#DCE3F5]"
                    onClick={() => handleAuthNavigation("logIn")}
                  >
                    Login
                  </button>
                  <button
                    className="h-[38px] w-[120px] rounded-md border hover:bg-[#DCE3F5]"
                    onClick={() => handleAuthNavigation("signUp")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
