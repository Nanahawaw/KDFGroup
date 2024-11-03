import image1 from "../../assets/trendingNow/image1.png";
import image2 from "../../assets/trendingNow/image2.png";
import image3 from "../../assets/trendingNow/image3.png";
import image4 from "../../assets/trendingNow/image4.png";
import image5 from "../../assets/trendingNow/image5.png";
import { useNavigate } from "react-router-dom";

function TrendingNowBanner() {
  const trendingItems = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
    { image: image3 },
  ];

  const navigate = useNavigate();
  const goToTrendingNowPage = () => {
    navigate("/TrendingNow");
  };

  return (
    <div className="m-2 flex flex-col items-center justify-center font-sans md:mb-5 md:mt-3">
      <p className="mb-4 w-full text-[27px] font-bold leading-[47.66px] md:text-[37px]">
        Trending now
      </p>
      <div className="grid grid-cols-2 gap-2 md:flex md:flex-row">
        {trendingItems.map((item, index) => (
          <div key={index} className="items-center' flex flex-col">
            <img
              src={item.image}
              alt=""
              className="object-cover md:h-64 md:w-48"
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-[49px] w-[178px] items-center justify-center rounded-full bg-[#7F56DA]">
        <button
          className="text-[#ffffff]"
          onClick={() => goToTrendingNowPage()}
        >
          View more
        </button>
      </div>
    </div>
  );
}

export default TrendingNowBanner;
