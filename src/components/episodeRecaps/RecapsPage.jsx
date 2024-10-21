import RecapsListComponent from "./RecapsListComponent"
import TrendingNowSideColumn from "../trendingNow/TrendingNowSideColumn"

// Recaps data
import hierarchyImage from "../../assets/EpisodeRecap/Group 1326.png"
import franklySpeakingImage from "../../assets/EpisodeRecap/franklySpeakingImage.png"
import atypicalFamilyImage from "../../assets/EpisodeRecap/atypicalFamilyImage.png"
import connectionImage from "../../assets/EpisodeRecap/connectionImage.png"

const recaps = [
  {
    title: "Hierarchy (Episodes 1-2)",
    date: "Jun 07, 2024",
    description:
      "Hierarchy opens, as an edgy teen drama is wont to do, with a gruesome incident...",
    image: hierarchyImage,
  },
  {
    title: "Frankly Speaking (Episodes 11-12)",
    date: "Jun 07, 2024",
    description: "The tense final moments of last week’s episodes are further exaggerated...",
    image: franklySpeakingImage,
  },
  {
    title: "The Atypical Family (Episodes 11-12)",
    date: "Jun 07, 2024",
    description: "Our atypical show wraps up its 13-year-old arc on a happy — or on a less than...",
    image: atypicalFamilyImage,
  },
  {
    title: "Connection (Episodes 5-6)",
    date: "Jun 07, 2024",
    description: "In the aftermath of yet another murder, our protagonists double down...",
    image: connectionImage,
  },
  // Add more recaps here when you have more episodes
]

function RecapsPage() {
  return (
    <div className="container mx-auto h-screen flex flex-col">
      {/* Title and Grey Line */}
      <div className="flex items-center py-4 border-b border-gray-300 mb-6">
        <h1 className="text-2xl font-bold">Episode Recaps</h1>
        <div className="flex-grow border-t border-gray-300 mx-4"></div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-grow">
        {/* Recaps Component (2/3 of the page) */}
        <div className="w-full md:w-2/3 flex-grow">
          <RecapsListComponent recaps={recaps} />
        </div>

        {/* Trending Now Side Column (1/3 of the page) */}
        <div className="w-full md:w-1/3 flex-grow md:flex-grow-0">
          <TrendingNowSideColumn />
        </div>
      </div>
    </div>
  )
}

export default RecapsPage
