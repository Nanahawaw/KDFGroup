import profileImg from "../assets/CommunityPage/Frame 34.png"
import { FaCamera, FaRegEnvelope } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbUserCheck } from "react-icons/tb";
function UserProfile() {
  return (
    <div className="w-full">
      <div className="max-w-[77.875rem] mx-auto my-20">
        <div className="my-24 h-64 flex rounded-md p-20 bg-gradient-to-r from-[#784DD845]  via-[#C4B1EE45] to-[#784DD845]">
          <div className="flex justify-center items-center gap-6"> 
            <div className="h-28 w-28 relative">
              <img src={profileImg} alt="user profile image" className="rounded-full w-full" />
              <div className="absolute bg-[#E7E7E7] left-20 bottom-1 h-10 w-10  rounded-full flex justify-center items-center">
                <FaCamera size={22}/>
              </div>
            </div>
            <div className="text-3xl font-semibold">
              <p className="">Glory Ejemen</p>
              <div className=" text-[#414141] mt-3">@kdramalover01</div>
            </div>
          </div>


        </div>
        <div className="w-[40rem] text-3xl border-b border-[#ABABB5]">
          <div className="flex justify-between">
            <p className="font-bold">Information</p>
            <p className="font-normal text-[#784DD8]">Edit</p>
          </div>
          <div className="my-10">
            <p className="flex gap-8">
              <LiaUserEditSolid />
              Glory Ejemen
            </p>
            <p className="flex gap-8 my-5">
              <FaRegEnvelope />
              gloryejemen@gmail.com
            </p>
            <p className="flex gap-8">
              <TbUserCheck />
              Followed by 500 people
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile