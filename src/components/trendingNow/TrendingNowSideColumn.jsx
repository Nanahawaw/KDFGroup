import image1 from "../../assets/EpisodeRecap/TNSC-hierarchy.png";
import image2 from "../../assets/EpisodeRecap/TNSC-atypical.png";
import image3 from "../../assets/EpisodeRecap/TNSC-lovely.png";
import image4 from "../../assets/EpisodeRecap/TNSC-Frankly.png";

const trendingItems = [
  { image: image1, title: "Hierarchy", rate: "Ratings: 8/10" },
  { image: image2, title: "A Typical Family", rate: "Ratings: 9/10" },
  { image: image3, title: "Lovely Runner", rate: "Ratings: 9/10" },
  { image: image4, title: "Frankly Speaking", rate: "Ratings: 10/10" },
];

function TrendingNowSideColumn() {
  return (
    <div className="my-4 ml-1 min-w-[109px] md:pt-12 lg:w-[390px]">
      <p className="my-2 text-[14px] font-bold md:text-[26px] lg:mx-2 lg:my-4 lg:text-[36px]">
        Trending now
      </p>
      <div className="flex flex-col gap-6">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="border-gray-300' flex flex-col items-center border"
          >
            <img
              src={item.image}
              alt=""
              className="justify-center object-scale-down lg:w-[390px]"
            />
            <p className="w-full p-2 text-[12px] font-bold lg:ml-4 lg:text-[16px]">
              {item.title}
            </p>
            <p className="w-full pl-2 text-[12px] lg:ml-4 lg:text-[16px]">
              {item.rate}
            </p>
            <div className="flex w-full justify-end p-1 md:p-3">
              <button className="lg:text-[16px]lg:w-[147px]rounded md:text-[12px rounded-md bg-[#7F56DA] p-1 text-[8px] text-white">
                Join discussion
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingNowSideColumn;
