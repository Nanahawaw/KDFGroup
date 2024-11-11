import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RecapsListPage({ recaps }) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recapsPerPage = 4;

  // This would be replaced by API call later to get the recaps from backend DB
  useEffect(() => {
    // Example API call placeholder (replace later)
    // fetchRecapsFromAPI()
    //     .then(response => setRecaps(response.data));
  }, []);

  // Pagination logic
  const indexOfLastRecap = currentPage * recapsPerPage;
  const indexOfFirstRecap = indexOfLastRecap - recapsPerPage;
  // eslint-disable-next-line react/prop-types
  const currentRecaps = recaps.slice(indexOfFirstRecap, indexOfLastRecap);

  // Handling page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEpisodeRecapClick = () => {
    navigate("/EpisodeRecaps");
  };

  return (
    <div className="flex flex-col gap-6">
      {currentRecaps.map((recap, index) => (
        <div
          key={index}
          className="flex cursor-pointer flex-col border-b border-gray-300 pb-6 lg:flex-row"
          onClick={handleEpisodeRecapClick}
        >
          {/* Image */}
          <img
            src={recap.image}
            alt={recap.title}
            className="mb-4 h-auto w-full object-cover lg:mb-0 lg:h-full lg:w-1/3"
          />
          {/* Text Content */}
          <div className="lg:ml-4">
            <p className="mb-2 text-xs text-gray-500 lg:text-sm">
              {recap.date}
            </p>
            <h3 className="text-base font-bold lg:text-xl">{recap.title}</h3>
            <h4 className="mb-2 text-sm font-bold lg:text-lg">
              {recap.episodes}
            </h4>
            <p className="text-s text-gray-700 lg:text-base">
              {recap.description}
            </p>
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-4 py-2 text-xs md:text-lg ${
              currentPage === number
                ? "border-b-4 border-purple-700 text-black"
                : "text-gray-500"
            }`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          className="mx-1 px-4 py-2 text-xs text-gray-500"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default RecapsListPage;
