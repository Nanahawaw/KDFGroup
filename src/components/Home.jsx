// // import Carousel from "./carousel/Carousel";
// // import Image from "../assets/image 3.png";
// // import arrow from "../assets/arrow.png";
// // import HighestRatedBanner from "./highestRated/HighestRatedBanner";
// // import highestRatedTitles from "./highestRated/titles";
// // import EpisodeRecapsBanner from "./episodeRecaps/EpisodeRecapsBanner";
// // import TrendingNowBanner from "./trendingNow/TrendingNowBanner";

// // function Home() {
// //   return (
// //     <div>
// //       <Carousel />
// //       <div className="mb-3 mt-5">
// //         <div className="mb-5 mt-3 flex flex-col items-center justify-center shadow-md">
// //           <TrendingNowBanner />
// //         </div>
// //         <div className="m-2 flex flex-col items-center justify-center">
// //           <HighestRatedBanner titles={highestRatedTitles} />
// //         </div>
// //       </div>
// //       <div className="justify-between bg-[#CBD5F0] font-sans md:flex md:h-[428px] md:p-0">
// //         <div className="flex flex-col justify-center p-2 md:p-0 md:pl-9">
// //           <h1 className="p-2 text-[30px] font-semibold md:text-[70px] md:leading-[95.33px]">
// //             Spill the tea on your favorite K-dramas!
// //           </h1>
// //           <p className="w-[351.05px] p-2 text-[25px] font-light md:leading-[34.05px]">
// //             connect with fellow K-Drama enthusiasts and dive deep into your
// //             favorite shows.
// //           </p>
// //           <button className="h- mt-3 hidden h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:flex md:w-[237.68px]">
// //             Join Community
// //             <img src={arrow} alt="" />
// //           </button>
// //         </div>
// //         <div className="mb-1 flex items-center justify-center md:h-[410px] md:w-[800px] md:justify-end">
// //           <img className="" src={Image} alt="" />
// //         </div>
// //         <div className="flex items-center justify-center">
// //           <button className="h- mb-3 mt-3 flex h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:hidden md:w-[237.68px]">
// //             Join Community
// //             <img src={arrow} alt="" />
// //           </button>
// //         </div>
// //       </div>
// //       <div className="m-0">
// //         <EpisodeRecapsBanner />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;
// import Carousel from "./carousel/Carousel";
// import { useNavigate } from "react-router-dom";
// import Image from "../assets/image 3.png";
// import arrow from "../assets/arrow.png";
// import HighestRatedBanner from "./highestRated/HighestRatedBanner";
// import highestRatedTitles from "./highestRated/titles";
// import EpisodeRecapsBanner from "./episodeRecaps/EpisodeRecapsBanner";
// import TrendingNowBanner from "./trendingNow/TrendingNowBanner";

// function Home() {
//   const navigate = useNavigate();

//   function handleJoinCommunity() {
//     navigate("/communityPage"); // Change "/communityPage" to your actual route if different
//   }

//   return (
//     <div>
//       <Carousel />
//       <div className="mb-3 mt-5">
//         <div className="mb-5 mt-3 flex flex-col items-center justify-center shadow-md">
//           <TrendingNowBanner />
//         </div>
//         <div className="m-2 flex flex-col items-center justify-center">
//           <HighestRatedBanner titles={highestRatedTitles} />
//         </div>
//       </div>
//       <div className="justify-between bg-[#CBD5F0] font-sans md:flex md:h-[428px] md:p-0">
//         <div className="flex flex-col justify-center p-2 md:p-0 md:pl-9">
//           <h1 className="p-2 text-[30px] font-semibold md:text-[70px] md:leading-[95.33px]">
//             Spill the tea on your favorite K-dramas!
//           </h1>
//           <p className="w-[351.05px] p-2 text-[25px] font-light md:leading-[34.05px]">
//             connect with fellow K-Drama enthusiasts and dive deep into your
//             favorite shows.
//           </p>
//           <button className="mt-3 hidden h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:flex md:w-[237.68px]">
//             Join Community
//             <img src={arrow} alt="" />
//           </button>
//         </div>
//         <div className="mb-1 flex items-center justify-center md:h-[410px] md:w-[800px] md:justify-end">
//           <img className="" src={Image} alt="" />
//         </div>
//         <div className="flex items-center justify-center">
//           <button 
//             onClick={handleJoinCommunity} 
//             className="mb-3 mt-3 flex h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:hidden md:w-[237.68px]">
//             Join Community
//             <img src={arrow} alt="" />
//           </button>
//         </div>
//       </div>
//       <div className="m-0">
//         <EpisodeRecapsBanner />
//       </div>
//     </div>
//   );
// }

// export default Home;


import Carousel from "./carousel/Carousel";
import { Link } from "react-router-dom";
import Image from "../assets/image 3.png";
import arrow from "../assets/arrow.png";
import HighestRatedBanner from "./highestRated/HighestRatedBanner";
import highestRatedTitles from "./highestRated/titles";
import EpisodeRecapsBanner from "./episodeRecaps/EpisodeRecapsBanner";
import TrendingNowBanner from "./trendingNow/TrendingNowBanner";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="mb-3 mt-5">
        <div className="mb-5 mt-3 flex flex-col items-center justify-center shadow-md">
          <TrendingNowBanner />
        </div>
        <div className="m-2 flex flex-col items-center justify-center">
          <HighestRatedBanner titles={highestRatedTitles} />
        </div>
      </div>
      <div className="justify-between bg-[#CBD5F0] font-sans md:flex md:h-[428px] md:p-0">
        <div className="flex flex-col justify-center p-2 md:p-0 md:pl-9">
          <h1 className="p-2 text-[30px] font-semibold md:text-[70px] md:leading-[95.33px]">
            Spill the tea on your favorite K-dramas!
          </h1>
          <p className="w-[351.05px] p-2 text-[25px] font-light md:leading-[34.05px]">
            connect with fellow K-Drama enthusiasts and dive deep into your
            favorite shows.
          </p>
          <Link
            to="/communityPage"
            className="mt-3 hidden h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:flex md:w-[237.68px]">
            Join Community
            <img src={arrow} alt="" />
          </Link>
        </div>
        <div className="mb-1 flex items-center justify-center md:h-[410px] md:w-[800px] md:justify-end">
          <img className="" src={Image} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/communityPage"
            className="mb-3 mt-3 flex h-[46.68px] w-[170px] items-center justify-center gap-1 rounded-full bg-[#EFB7BA] p-2 md:hidden md:w-[237.68px]">
            Join Community
            <img src={arrow} alt="" />
          </Link>
        </div>
      </div>
      <div className="m-0">
        <EpisodeRecapsBanner />
      </div>
    </div>
  );
}

export default Home;
