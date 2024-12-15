/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { trendingNowDramas } from "./TrendingNowPageFakeProps";
import octicon from "../../assets/octicon.png";

function TrendingNowPage() {
  const [dramas, setDramas] = useState(trendingNowDramas);
  const [currentPage, setCurrentPage] = useState(1);
  const dramasPerPage = 12;
  const indexOfLastRecap = currentPage * dramasPerPage;
  const indexOfFirstRecap = indexOfLastRecap - dramasPerPage;
  const currentDramas = trendingNowDramas.slice(
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
      <div className="flex flex-col">
        <h2 className="my-2 text-2xl font-bold md:text-3xl lg:text-4xl">
          Trending Now
        </h2>
        <p className="m-1 text-base md:text-lg lg:text-xl">
          The most popular dramas based on our user's ratings
        </p>
      </div>
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
            <div className="flex h-full flex-col justify-between p-4">
              <div>
                <h3 className="mb-1 text-sm font-bold lg:text-lg">
                  {drama.title}
                </h3>
                <h4 className="mb-1 text-sm font-bold lg:text-lg">
                  Ratings: {drama.ratings}
                </h4>
                <p className="text-sm text-gray-700 lg:text-base">
                  {drama.description}
                </p>
              </div>
              <div className="mt-2 flex justify-end">
                <button className="rounded bg-purple-600 px-3 py-1 text-xs text-white lg:text-sm">
                  Join discussion
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-4 flex justify-center">
        {[1, 2, 3, 4, 5].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 cursor-pointer px-2 py-1 text-xs md:px-4 md:py-2 md:text-base ${
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
          className="mx-1 cursor-pointer px-2 py-1 text-xs text-gray-500 md:px-4 md:py-2"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default TrendingNowPage;
