import profileImg from "../assets/profile-img.jpeg";
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
      <div className="mx-auto my-20 max-w-[77.875rem]">
        <div className="my-24 flex h-64 rounded-md bg-gradient-to-r from-[#784DD845] via-[#C4B1EE45] to-[#784DD845] p-20 max-xl:mx-6">
          <div className="flex items-center justify-center gap-6">
            <div className="relative h-[7.5rem] w-[7.5rem]">
              <img
                src={profileImg}
                alt="user profile image"
                className="w-full rounded-full object-fill"
              />
              <div className="absolute -bottom-5 left-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#E7E7E7]">
                <FaCamera size={22} />
              </div>
            </div>
            <div className="text-3xl font-semibold">
              <p className="">Glory Ejemen</p>
              <div className="mt-3 text-[#414141]">@kdramalover01</div>
            </div>
          </div>
        </div>

        <div className="max-w-[40rem] px-6 text-3xl">
          <div className="border-b border-[#ABABB5]">
            <div className="flex justify-between">
              <p className="font-bold">Information</p>
              <a href="#" className="font-normal text-[#784DD8]">
                Edit
              </a>
            </div>
            <div className="my-10">
              <p className="flex gap-8">
                <LiaUserEditSolid />
                Glory Ejemen
              </p>
              <p className="my-5 flex gap-8">
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
              <div className="my-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-20 animate-pulse bg-slate-400">
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className="font-semibold">
                    <p className="">BTS Army</p>
                    <p className="text-xl text-[#929292]">Joined June 2024</p>
                  </div>
                </div>
                <button className="h-10 w-[6.625rem] rounded-lg bg-[#D4373F] text-xl text-white transition-all hover:bg-[#d24b52]">
                  Leave
                </button>
              </div>
              <hr />

              <div className="my-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-20 animate-pulse bg-slate-400">
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className="font-semibold">
                    <p className="">Genre Polls</p>
                    <p className="text-xl text-[#929292]">Joined June 2024</p>
                  </div>
                </div>
                <button className="h-10 w-[6.625rem] rounded-lg bg-[#D4373F] text-xl text-white transition-all hover:bg-[#d24b52]">
                  Leave
                </button>
              </div>
              <hr />

              <div className="my-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-20 animate-pulse bg-slate-400">
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className="font-semibold">
                    <p className="">Watch Parties</p>
                    <p className="text-xl text-[#929292]">Joined June 2024</p>
                  </div>
                </div>
                <button className="h-10 w-[6.625rem] rounded-lg bg-[#D4373F] text-xl text-white transition-all hover:bg-[#d24b52]">
                  Leave
                </button>
              </div>
              <hr />

              <div className="my-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-20 animate-pulse bg-slate-400">
                    {/* <img src="" alt="" /> */}
                  </div>
                  <div className="font-semibold">
                    <p className="">Watch Parties</p>
                    <p className="text-xl text-[#929292]">Joined June 2024</p>
                  </div>
                </div>
                <button className="h-10 w-[6.625rem] rounded-lg bg-[#D4373F] text-xl text-white transition-all hover:bg-[#d24b52]">
                  Leave
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Join discuession section */}
        <section className="mt-16 space-y-14 px-6">
          <div className="text-center">
            <div className="my-6 text-[2.5rem] font-bold leading-[3rem]">
              Join the Discussion!
            </div>
            <p className="text-base font-normal">
              Share your thoughts and ideas with the community
            </p>
          </div>
          <div className="flex flex-col divide-y divide-black/20">
            {[roomImg3, roomImg2, roomImg1, roomImg4].map((item, index) => (
              <div
                key={`room-${index}`}
                className="flex items-start justify-start gap-10 py-6"
              >
                <figure className="aspect-square min-w-12 bg-purple-300 sm:min-w-24 md:min-h-48">
                  <img src={item} alt="" className="size-full object-cover" />
                </figure>

                <div className="space-y-3 md:space-y-7">
                  <div className="flex items-end justify-between">
                    <h3 className="text-base md:text-3xl">Placeholder Title</h3>
                    <button className="cursor-pointer rounded-3xl bg-[#7F56DA] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9877e0] md:px-12 md:text-xl">
                      + Join
                    </button>
                  </div>
                  <p className="text-black/50 max-md:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas sit venenatis aliquet nunc nam scelerisque.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending now section */}
        <div className="flex flex-col content-center items-center">
          <div className="my-6 w-full text-center text-[2.5rem] font-bold leading-[3rem]">
            Trending Now
          </div>
          <div className="mx-8 my-10 flex flex-wrap items-start justify-center gap-5">
            <div className="flex w-full max-w-[15.3125rem] flex-col items-center gap-3 py-3">
              <div className="rounded-full bg-gray-200 p-7 text-4xl">📺</div>
              <p className="flex flex-col items-center gap-1 text-xl font-normal">
                Best Drama of the Year
                <span className="text-base text-[#00000080]">
                  Voted by Fans
                </span>
              </p>

              <p className="mt-4 text-3xl font-medium">Votes: 5000+</p>
            </div>

            <div className="flex w-full max-w-[15.3125rem] flex-col items-center gap-3 py-3">
              <div className="rounded-full bg-gray-200 p-7 text-4xl">🌟</div>
              <p className="flex flex-col items-center gap-1 text-xl font-normal">
                Top Actor Ranking
                {/* <span className="text-base text-[#00000080]">Voted by Fans</span> */}
              </p>
              <p className="mt-4 text-3xl font-medium">Updated Weekly</p>
            </div>

            <div className="flex w-full max-w-[15.3125rem] flex-col items-center gap-3 py-3">
              <div className="rounded-full bg-gray-200 p-7 text-4xl">💬</div>
              <p className="flex flex-col items-center gap-1 text-xl font-normal">
                Community Discussions
                <span className="text-base text-[#00000080]">
                  Engage with other fans
                </span>
              </p>
            </div>

            <div className="flex w-full max-w-[15.3125rem] flex-col items-center gap-3 py-3">
              <div className="rounded-full bg-gray-200 p-7 text-4xl">🎉</div>
              <p className="flex flex-col items-center gap-1 text-xl font-normal">
                Announcements
                <span className="text-base text-[#00000080]">
                  Stay informed
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
