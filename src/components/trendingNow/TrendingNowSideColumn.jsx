import image1 from "../../assets/EpisodeRecap/TNSC-hierarchy.png"
import image2 from "../../assets/EpisodeRecap/TNSC-atypical.png"
import image3 from "../../assets/EpisodeRecap/TNSC-lovely.png"
import image4 from "../../assets/EpisodeRecap/TNSC-Frankly.png"

const trendingItems = [
  { image: image1, title: "Hierarchy", rate: "Ratings: 8/10" },
  { image: image2, title: "A Typical Family", rate: "Ratings: 9/10" },
  { image: image3, title: "Lovely Runner", rate: "Ratings: 9/10" },
  { image: image4, title: "Item 5", rate: "Ratings: 10/10" },
]

function TrendingNowSideColumn() {
  return (
    <div className="md:pt-12 mt-2">
      <p className=" md:mb-9 md:mt-2 mb-3 mt-1 font-bold text-[20px] md:text-[37px] w-full md:leading-[47.66px]  ">
        Trending now
      </p>
      <div className="flex flex-col gap-10">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className=" w-px-330 h-px-339 flex flex-col items-center  border border-gray-300'"
          >
            <img src={item.image} alt="" className="justify-center  h-52 object-scale-down p-2" />
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
  )
}

export default TrendingNowSideColumn
