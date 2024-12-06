import { useState, useEffect } from "react";
import { dramasCatalogue } from "./movieCatalogueFakeProps"; // Hardcoded data
import Search from "../Search";

function MovieCatalogue() {
  const [dramas, setDramas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const dramasPerPage = 21; // Number of dramas per page
  // const [totalPages, setTotalPages] = useState(5); // Placeholder for total pages

  // Fetch dramas (simulate API call) and apply filtering logic
  const fetchDramas = async (params) => {
    const { search, filters, page } = params;

    const filteredDramas = dramasCatalogue.filter((drama) => {
      const matchesSearch =
        !search || drama.title.toLowerCase().includes(search.toLowerCase());

      const matchesGenre = !filters.genre || drama.genre === filters.genre;

      const matchesType = !filters.type || drama.type === filters.type;

      const matchesYear =
        !filters.year || parseInt(filters.year, 10) === drama.year;

      const matchesRating =
        !filters.rating ||
        (parseFloat(filters.rating) <= 5 &&
          parseFloat(filters.rating) >= 0 &&
          drama.rating >= parseFloat(filters.rating));

      return (
        matchesSearch &&
        matchesGenre &&
        matchesType &&
        matchesYear &&
        matchesRating
      );
    });

    // const totalPages = Math.ceil(filteredDramas.length / dramasPerPage);
    const paginatedDramas = filteredDramas.slice(
      (page - 1) * dramasPerPage,
      page * dramasPerPage,
    );

    setDramas(paginatedDramas);

    // If you want to show pagination dynamically, you'd store totalPages in state:
    // setTotalPages(totalPages);
    // For simplicity, we’ll just rely on a fixed pagination range or you can dynamically render pagination buttons.
  };

  // Fetch dramas on component mount or when filters change
  useEffect(() => {
    fetchDramas({ page: currentPage, search: searchQuery, filters });
  }, [currentPage, searchQuery, filters]);

  // Handle search submission
  const handleSearchSubmit = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Handle filter application
  const handleFiltersSubmit = (appliedFilters) => {
    setFilters(appliedFilters);
    setCurrentPage(1);
  };

  // Handle pagination click
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mx-auto mt-20 flex max-w-full flex-col px-4 md:px-6 lg:px-8">
      {/* Search and Filter */}
      <div className="mb-4 mt-4 w-full">
        <Search
          onSearchSubmit={handleSearchSubmit}
          onFiltersSubmit={handleFiltersSubmit}
        />
      </div>

      {/* Dramas Grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {dramas.map((drama) => (
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

      {/* Pagination */}
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

export default MovieCatalogue;
