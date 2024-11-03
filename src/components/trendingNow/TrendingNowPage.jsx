/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
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

  // Handling page changes
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  //mock API
  const fakeDramasFetch = (rating) => {
    console.log(rating);
  };
  useEffect(() => {
    // here we would have an api which would fetch the dramas from the backend sorted based on rating (or how else we decide what's trending)
    // we would then update the dramas state with the response from the API
    const response = fakeDramasFetch("rating");
    setDramas(response);
  }, [dramas]);

  // const navigateToDrama = (dramaId) => {
  //   // navigate to drama based on the drama id
  //   // or render the Synopsis page
  //   console.log(dramaId);
  // };

  return (
    <div className="mt-20 flex flex-col p-10">
      <div className="flex flex-col">
        <h2 className="my-2 text-[36px] font-bold lg:mx-2 lg:my-4">
          Trending Now
        </h2>
        <p className="m-1 text-xl">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          The most popular dramas based on our user's ratings
        </p>
      </div>
      <div className="mb-4 mt-4">
        <form className="flex h-[79px] w-full max-w-[1287px] items-center rounded-[20px] border border-gray-300 p-4">
          <input
            placeholder="search here..."
            className="flex-grow border-none px-10 text-[36px] font-light italic placeholder-gray-300 outline-none"
            style={{ fontSize: "36px" }}
          />
          <img alt="Search icon" src={octicon} className="mr-4 h-6 w-6" />
        </form>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
      <div>
        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-4 py-2 text-xs md:text-xl ${
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

export default TrendingNowPage;
