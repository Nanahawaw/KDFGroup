import image1 from "../../assets/trendingNow/image1.png"
import image2 from "../../assets/trendingNow/image2.png"
import image3 from "../../assets/trendingNow/image3.png"
import image4 from "../../assets/trendingNow/image4.png"
import image5 from "../../assets/trendingNow/image5.png"

function TrendingNowBanner() {
  const trendingItems = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image3 },
  ]

  return (
    <div className="md:mt-3 md:mb-5 flex flex-col items-center justify-center font-sans m-2">
      <p className="mb-4 font-bold text-[27px] md:text-[37px] w-full leading-[47.66px]  ">
        Trending now
      </p>
      <div className="  grid grid-cols-2 md:flex  md:flex-row  gap-2">
        {trendingItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center'">
            <img src={item.image} alt="" className="md:w-48 md:h-64  object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-3 w-[178px] h-[49px] bg-[#7F56DA] rounded-full flex items-center justify-center">
        <button className="text-[#ffffff]">View more</button>
      </div>
    </div>
  )
}

export default TrendingNowBanner
