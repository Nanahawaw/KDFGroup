import image1 from "../../assets/EpisodeRecap/TNSC-hierarchy.png";
import image2 from "../../assets/EpisodeRecap/TNSC-atypical.png";
import image3 from "../../assets/EpisodeRecap/TNSC-lovely.png";
import image4 from "../../assets/EpisodeRecap/TNSC-Frankly.png";

const trendingItems = [
  { image: image1, title: "Hierarchy", rate: "Ratings: 8/10" },
  { image: image2, title: "A Typical Family", rate: "Ratings: 9/10" },
  { image: image3, title: "Lovely Runner", rate: "Ratings: 9/10" },
  { image: image4, title: "Item 5", rate: "Ratings: 10/10" },
];

function TrendingNowSideColumn() {
  return (
    <div className="mt-2 md:pt-12">
      <p className="mb-3 mt-1 w-full text-[20px] font-bold md:mb-9 md:mt-2 md:text-[37px] md:leading-[47.66px]">
        Trending now
      </p>
      <div className="flex flex-col gap-10">
        {trendingItems.map((item, index) => (
          <div
            key={index}
            className="w-px-330 h-px-339 border-gray-300' flex flex-col items-center border"
          >
            <img
              src={item.image}
              alt=""
              className="h-52 justify-center object-scale-down p-2"
            />
            <p className="w-full p-2 text-[14px] font-bold md:pl-5">
              {item.title}
            </p>
            <p className="w-full pl-2 md:pl-5">{item.rate}</p>
            <div className="flex w-full justify-start p-2 md:justify-end md:p-2">
              <button className="rounded bg-[#7F56DA] p-1 text-white md:px-4 md:py-2">
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
