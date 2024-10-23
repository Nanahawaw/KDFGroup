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
    <div className="flex flex-col justify-between gap-4">
      <div className="h-screen">
        {currentRecaps.map((recap, index) => (
          <div
            key={index}
            className="mb-10 flex max-h-80 flex-row justify-evenly"
            onClick={handleEpisodeRecapClick}
          >
            <div className="flex space-x-4">
              <img
                src={recap.image}
                alt={recap.title}
                className="rounded-md object-cover"
              />
              <div className="flex max-w-3xl flex-col">
                <p className="self-end text-sm text-gray-500">{recap.date}</p>
                <h3 className="mb-1 text-xl font-bold">{recap.title}</h3>
                <h4 className="text-l mb-1 font-bold">{recap.episodes}</h4>
                <p className="mt-4 text-clip text-gray-700">
                  {recap.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-4 py-2 ${
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
    </div>
  );
}

export default RecapsListPage;
