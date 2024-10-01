/* eslint-disable no-irregular-whitespace */
import QOF from "../../assets/qT.png"
import image1 from "../../assets/trendingNow/image1.png"
import image2 from "../../assets/trendingNow/image2.png"
import image3 from "../../assets/trendingNow/image3.png"
import image4 from "../../assets/trendingNow/image4.png"
import image5 from "../../assets/trendingNow/image5.png"
import MoviesComments from "./MovieComments"

const trendingItems = [
  { image: image1, title: "Hierarchy", rate: "Ratings: 8/10" },
  { image: image2, title: "My Demon", rate: "Ratings: 9/10" },
  { image: image3, title: "A Ttypical Family", rate: "Ratings: 7/10" },
  { image: image4, title: "Item 4", rate: "Ratings: 5/10" },
  { image: image5, title: "Item 5", rate: "Ratings: 10/10" },
  { image: image3, title: "Item 6", rate: "Ratings: 8/10" },
]

const MovieDetails = () => {
  return (
    <div className="container mx-auto p-4 font-sans">
      <div className=" grid md:flex justify-between pt-3">
        {/* Left Column */}
        <div className="w- p-4 bg-white ">
          <div className="flex flex-col md:gap-14 gap-4">
            <div className="">
              <p className=" font-bold text-[2s0px] md:text-[37px] w-full md:leading-[47.66px] md:pb-6 pb-1">
                Queen of Tears
              </p>
              <img className="md:w-[900px] w-[800px] object-cover" src={QOF} alt="" />
              <div className="flex gap-3 items-center mt-6">
                <p className="font-bold text-[20px] md:text-[37px]  md:leading-[47.66px] md:pb- pb-1">
                  Synopsis
                </p>
                <button className="flex items-center justify-center bg-[#7F56DA] text-white p-2 rounded-md">
                  See Recaps
                </button>
              </div>
              <p>
                The queen of department stores and the prince of supermarkets weather a marital
                crisis—until love miraculously begins to bloom again.
              </p>
              <p>Genre: family, human, rom-com, workplace</p>
            </div>
            <div>
              <p className="font-bold text-[20px] md:text-[37px] w-full md:leading-[47.66px] md:pb- pb-1">
                Ratings:
              </p>
              <div className="border">
                <MoviesComments />
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className=" p-4">
          <div className="md:pt-12 mt-2">
            <p className=" md:mb-9 md:mt-2 mb-3 mt-1 font-bold text-[20px] md:text-[37px] w-full md:leading-[47.66px]  ">
              Trending now
            </p>
            <div className=" grid grid-cols-2  md:flex md:flex-col gap-2  md:gap-6">
              {trendingItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center  border border-gray-300'">
                  <img src={item.image} alt="" className="justify-center  object-cover p-2" />
                  <p className=" w-full p-2 font-bold text-[14px] md:pl-5">{item.title}</p>
                  <p className="w-full md:pl-5 pl-2">{item.rate}</p>
                  <div className=" w-full flex md:justify-end justify-start md:p-2 p-2">
                    <button className="bg-[#7F56DA] text-white md:px-4 md:py-2 p-1 rounded">
                      Join discussion
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
