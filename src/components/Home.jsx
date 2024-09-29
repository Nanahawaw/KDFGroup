import Carousel from "./carousel/Carousel"
import Image from "../assets/image 3.png"
import arrow from "../assets/arrow.png"
import HighestRated from "./highestRated/HighestRated"
import highestRatedTitles from "./highestRated/titles"
import EpisodeRecaps from "./episodeRecaps/EpisodeRecaps"
import TrendingNow from "./trendingNow/TrendingNow"

function Home() {
  return (
    <div>
      <Carousel />
      <div className="mb-3 mt-5">
        <div className="shadow-md flex flex-col justify-center items-center mt-3 mb-5 ">
          <TrendingNow />
        </div>
        <div className="m-2  flex flex-col justify-center items-center  ">
          <HighestRated titles={highestRatedTitles} />
        </div>
      </div>
      <div className=" md:flex justify-between bg-[#CBD5F0] font-sans md:h-[428px]  md:p-0">
        <div className="flex flex-col justify-center md:pl-9 p-2 md:p-0">
          <h1 className="font-semibold md:text-[70px] md:leading-[95.33px] text-[30px] p-2">
            Spill the tea on your favorite K-dramas!
          </h1>
          <p className="md:leading-[34.05px] w-[351.05px]  text-[25px]  font-light p-2">
            connect with fellow K-Drama enthusiasts and dive deep into your favorite shows.
          </p>
          <button className=" md:flex justify-center bg-[#EFB7BA] h- w-[170px] p-2 md:w-[237.68px] h-[46.68px] items-center mt-3 rounded-full gap-1 hidden">
            Join Community
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className="md:h-[410px] md:w-[800px] flex justify-center mb-1 items-center md:justify-end ">
          <img className="" src={Image} alt="" />
        </div>
        <div className=" flex justify-center items-center">
          <button className=" flex justify-center bg-[#EFB7BA] h- w-[170px] p-2 md:w-[237.68px] h-[46.68px] items-center mb-3 mt-3 rounded-full gap-1 md:hidden">
            Join Community
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="m-0 pr-[x]">
        <EpisodeRecaps />
      </div>
    </div>
  )
}

export default Home
