import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#C4B1EE] p-1 text-[#000000] mt-auto font-sans w-[100vw]">
      <div className="md:flex md:justify-between p-7 md:p-11">
        <div className="grid gap-[10px] w-[292px] h-[176.6px] text-[#1A202C]">
          <div className="font-bold">KGFG</div>
          <div>Experience the best of K-dramas with fellow K-darama lovers</div>
          <div className="flex gap-5">
            <div className="bg-white rounded-full w-7 h-7 justify-center items-center flex">
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 justify-center items-center flex">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 justify-center items-center flex">
              {" "}
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
        <div className="flex lg:gap-[120px]  gap-4  md:h-[176.6px] text-[#1A202C]">
          <div className="gap-[10px] grid">
            <h1 className="font-semibold">Company</h1>
            <p>About us</p>
            <p>Our Team</p>
            <p>Contact us</p>
          </div>
          <div>
            <div className="gap-[10px] grid h-[176.6px] text-[#1A202C]">
              <h1 className="font-semibold">Community</h1>
              <p>Events</p>
              <p>Blog</p>
              <p>Invite a friend</p>
            </div>
          </div>
          <div className="gap-[10px] grid h-[176.6px] text-[#1A202C]">
            <h1 className="font-semibold">Socials</h1>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <hr className="bg-[#486284] h-[1px] border-none mx-10" />
      <div className=" md:flex justify-between md:p-11 p-3 text-[#className] font-light">
        <div className="flex justify-center gap-[120px]">
          <div>©{currentYear} KGFG. All rights reserved</div>
        </div>
        <div className="flex justify-center  gap-3 md:gap-[50px] pt-3">
          <div>
            <p>Privacy & Policy</p>
          </div>
          <div>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
