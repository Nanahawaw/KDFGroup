import TrendingNowSideColumn from "../trendingNow/TrendingNowSideColumn";

// Recaps data
import hierarchyImage from "../../assets/EpisodeRecap/EPR-hierarchy.png";
import franklySpeakingImage from "../../assets/EpisodeRecap/franklySpeakingImage.png";
import atypicalFamilyImage from "../../assets/EpisodeRecap/atypicalFamilyImage.png";
import connectionImage from "../../assets/EpisodeRecap/connectionImage.png";
import RecapsListPage from "./RecapsListPage";

const recaps = [
  {
    title: "Hierarchy",
    episodes: "(Episodes 1-2)",
    date: "Jun 07, 2024",
    description:
      "Hierarchy opens, as an edgy teen drama is wont to do, with a gruesome incident. High school student KANG IN-HAN (Kim Min-chul) stalks down an alleyway, ranting over the phone that he’ll expose the insanity that takes place on school grounds. Predictably, In-han is hit by a car, and no one comes to his aid as he bleeds out..Kang",
    image: hierarchyImage,
  },
  {
    title: "Frankly Speaking ",
    episodes: "(Episodes 11-12)",
    date: "Jun 07, 2024",
    description:
      "The tense final moments of last week’s episodes are further exaggerated in our finale’s opening scenes, as we follow Ki-baek’s mother in the hours leading up to the car accident. The whole montage feels emotionally manipulative, like a Hallmark commercial trying to boost card and porcelain figurine sales before Mother’s Day, and even though there is no actual PPL to be seen, the vibe is morbid and very “show your mother you love her… before she dies.”",
    image: franklySpeakingImage,
  },
  {
    title: "The Atypical Family",
    episodes: "(Episodes 11-12)",
    date: "Jun 07, 2024",
    description:
      "Our atypical show wraps up its 13-year-old arc on a happy — or on a less than satisfying — note, depending on which side you stand on the divided opinion about the... Our atypical show wraps up its 13-year-old arc on a happy — or on a less than satisfying — note, depending on which side you stand on the divided opinion about the...",
    image: atypicalFamilyImage,
  },
  {
    title: "Connection ",
    episodes: "(Episodes 5-6)",
    date: "Jun 07, 2024",
    description:
      "In the aftermath of yet another murder, our protagonists double down on pursuing the few leads they have. Another fragment of the past resurfaces, calling to mind memories that — while... In the aftermath of yet another murder, our protagonists double down on pursuing the few leads they have. Another fragment of the past resurfaces, calling to mind memories that — while...",
    image: connectionImage,
  },
  // Add more recaps here when you have more episodes
];

function RecapsPageComponent() {
  return (
    <div className="p-x-4 pt-20 md:pt-16">
      <div className="flex flex-row">
        <div className="">
          {/* Title and Grey Line */}
          <p className="my-2 text-[14px] font-bold md:text-[26px] lg:mx-2 lg:my-4 lg:text-[36px]">
            Episode Recaps
          </p>

          <div className="border-r border-t border-gray-300 p-1 md:p-2 lg:p-4">
            <RecapsListPage recaps={recaps} />
          </div>
        </div>

        {/* Trending Now Side Column */}
        <div className="px-4">
          <TrendingNowSideColumn />
        </div>
      </div>
    </div>
  );
}

export default RecapsPageComponent;
