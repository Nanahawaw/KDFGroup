/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { dramasCatalogue } from "./movieCatalogueFakeProps";
import octicon from "../../assets/octicon.png";

function MovieCatalogue() {
  const [dramas, setDramas] = useState(dramasCatalogue);
  const [currentPage, setCurrentPage] = useState(1);
  const dramasPerPage = 21;
  const indexOfLastRecap = currentPage * dramasPerPage;
  const indexOfFirstRecap = indexOfLastRecap - dramasPerPage;
  const currentDramas = dramasCatalogue.slice(
    indexOfFirstRecap,
    indexOfLastRecap,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const fakeDramasFetch = (rating) => {
    console.log(rating);
  };

  useEffect(() => {
    const response = fakeDramasFetch("rating");
    setDramas(response);
  }, [dramas]);

  return (
    <div className="mx-auto mt-20 flex max-w-full flex-col px-4 md:px-6 lg:px-8">
      <div className="mb-4 mt-4 w-full">
        <form className="flex h-12 w-full items-center rounded-[10px] border border-gray-300 p-3 md:h-[60px] md:p-4 lg:rounded-[20px]">
          <input
            placeholder="Search here..."
            className="flex-grow border-none px-5 text-lg font-light placeholder-gray-300 outline-none md:text-xl"
          />
          <img alt="Search icon" src={octicon} className="mr-3 h-5 w-5" />
        </form>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {currentDramas.map((drama) => (
          <div
            key={drama.id}
            className="flex cursor-pointer flex-col overflow-hidden rounded-md border border-gray-300"
          >
            <img
              src={drama.image}
              alt={drama.title}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-2 py-1 text-xs md:px-4 md:py-2 md:text-base ${
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
          className="mx-1 px-2 py-1 text-xs text-gray-500 md:px-4 md:py-2"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default MovieCatalogue;
