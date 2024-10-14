import profileImg from "../assets/profile-img.jpeg"
import { FaCamera, FaRegEnvelope } from "react-icons/fa";
import { LiaUserEditSolid } from "react-icons/lia";
import { TbUserCheck } from "react-icons/tb";
import roomImg1 from "../assets/CommunityPage/Frame 32.png";
import roomImg2 from "../assets/CommunityPage/Frame 33.png";
import roomImg3 from "../assets/CommunityPage/Frame 34.png";
import roomImg4 from "../assets/CommunityPage/Frame 35.png";
function UserProfile() {
  return (
    <div className="w-full">
      <div className="max-w-[77.875rem] mx-auto my-20">
        <div className="my-24 h-64 flex rounded-md p-20 bg-gradient-to-r from-[#784DD845]  via-[#C4B1EE45] to-[#784DD845]">
          <div className="flex justify-center items-center gap-6"> 
            <div className="h-[7.5rem] w-[7.5rem] relative">
              <img src={profileImg} alt="user profile image" className="w-full object-fill rounded-full" />
              <div className="absolute bg-[#E7E7E7] left-20 -bottom-5 h-10 w-10  rounded-full flex justify-center items-center">
                <FaCamera size={22}/>
              </div>
            </div>
            <div className="text-3xl font-semibold">
              <p className="">Glory Ejemen</p>
              <div className=" text-[#414141] mt-3">@kdramalover01</div>
            </div>
          </div>


        </div>
        <div className="w-[40rem] text-3xl ">
          <div className="border-b border-[#ABABB5]">
            <div className="flex justify-between">
              <p className="font-bold">Information</p>
              <a href="#" className="font-normal text-[#784DD8]">Edit</a>
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

          <div className="mt-10">
              <h4 className="font-bold">Communities</h4>

              <div className="my-10">
                <div className="flex justify-between items-center my-6 ">
                  <div className="flex items-center gap-2">
                    <div className="size-20 bg-slate-400 animate-pulse">
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className="font-semibold">
                      <p className="">BTS Army</p>
                      <p className=" text-xl text-[#929292]">Joined June 2024</p>
                    </div>
                  </div>
                  <button className="bg-[#D4373F] text-white rounded-lg text-xl h-10 w-[6.625rem] transition-all hover:bg-[#d24b52]">Leave</button>
                </div>
                <hr className="w-96"/>

                <div className="flex justify-between items-center my-6">
                  <div className="flex items-center gap-2">
                    <div className="size-20 bg-slate-400 animate-pulse">
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className="font-semibold ">
                      <p className="">Genre Polls</p>
                      <p className=" text-xl text-[#929292]">Joined June 2024</p>
                    </div>
                  </div>
                  <button className="bg-[#D4373F] text-white rounded-lg text-xl h-10 w-[6.625rem] transition-all hover:bg-[#d24b52]">Leave</button>
                </div>
                <hr className="w-96"/>

                <div className="flex justify-between items-center my-6 ">
                  <div className="flex items-center gap-2">
                    <div className="size-20 bg-slate-400 animate-pulse">
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className="font-semibold ">
                      <p className="">Watch Parties</p>
                      <p className=" text-xl text-[#929292]">Joined June 2024</p>
                    </div>
                  </div>
                  <button className="bg-[#D4373F] text-white rounded-lg text-xl h-10 w-[6.625rem] transition-all hover:bg-[#d24b52]">Leave</button>
                </div>
                <hr className="w-96"/>

                <div className="flex justify-between items-center my-6 ">
                  <div className="flex items-center gap-2">
                    <div className="size-20 bg-slate-400 animate-pulse">
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className="font-semibold ">
                      <p className="">Watch Parties</p>
                      <p className=" text-xl text-[#929292]">Joined June 2024</p>
                    </div>
                  </div>
                  <button className="bg-[#D4373F] text-white rounded-lg text-xl h-10 w-[6.625rem] transition-all hover:bg-[#d24b52]">Leave</button>
                </div>
              </div>

          </div>
        </div>

        {/* Join discuession section */}
        <section className="mt-16 space-y-14">
          <div className="text-center">
            <div className="font-bold text-[2.5rem] leading-[3rem] my-6">Join the Discussion!</div>
            <p className="text-base font-normal">Share your thoughts and ideas with the community</p>
          </div>
          <div className="flex flex-col divide-y divide-black/20">
            {[roomImg3, roomImg2, roomImg1, roomImg4].map((item, index) => (
              <div
                key={`room-${index}`}
                className="py-6 flex justify-start items-center gap-10"
              >
                <figure className="min-w-48 aspect-square bg-purple-300">
                  <img src={item} alt="" className="size-full object-cover" />
                </figure>

                <div className="space-y-7">
                  <div className="flex justify-between">
                    <h3 className="text-3xl">Placeholder Title</h3>
                    <button className="font-semibold text-xl text-white bg-[#7F56DA] py-3 px-12 rounded-3xl cursor-pointer hover:bg-[#9877e0]">+ Join</button>
                  </div>
                  <p className="text-black/50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit venenatis aliquet nunc nam scelerisque. Proin congue viverra risus placerat augue odio cras neque. Felis netus tincidunt sed hac urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit venenatis aliquet nunc nam scelerisque. Proin congue viverra risus placerat augue odio cras neque. Felis netus tincidunt sed hac urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit venenatis 
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending now section */}
        <div className="flex flex-col items-center content-center">
          <div className="font-bold text-[2.5rem] leading-[3rem] my-6 w-full text-center">Trending Now</div>
          <div className="flex gap-5 my-10">
            <div className="w-[15.3125rem] flex flex-col gap-3 items-center py-3">
              <div className="bg-gray-200 rounded-full  p-7 text-4xl">📺</div>
                <p className="flex flex-col items-center gap-1 text-xl font-normal">Best Drama of the Year
                  <span className="text-base text-[#00000080]">Voted by Fans</span>
                </p>

                <p className="font-medium text-3xl mt-4">Votes: 5000+</p>
            </div>
            <div className="w-[15.3125rem] flex flex-col gap-3 items-center py-3">
              <div className="bg-gray-200 rounded-full  p-7 text-4xl">🌟</div>
                <p className="flex flex-col items-center gap-1 text-xl font-normal">Top Actor Ranking
                  {/* <span className="text-base text-[#00000080]">Voted by Fans</span> */}
                </p>
                <p className="font-medium text-3xl mt-4">Updated Weekly</p>

            </div>
            <div className="w-[15.3125rem] flex flex-col gap-3 items-center py-3">
              <div className="bg-gray-200 rounded-full  p-7 text-4xl">💬</div>
                <p className="flex flex-col items-center gap-1 text-xl font-normal">Community Discussions
                  <span className="text-base text-[#00000080]">Engage with other fans</span>
                </p>
            </div>
            <div className="w-[15.3125rem] flex flex-col gap-3 items-center py-3">
              <div className="bg-gray-200 rounded-full  p-7 text-4xl">🎉</div>
                <p className="flex flex-col items-center gap-1 text-xl font-normal">Announcements
                  <span className="text-base text-[#00000080]">Stay informed</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile