import { useState, useEffect } from "react";
import { dramasCatalogue } from "./movieCatalogueFakeProps"; // Hardcoded data
import Search from "../Search";
import FilterMenu from "../FilterMenu";

function MovieCatalogue() {
  const [dramas, setDramas] = useState([]); // Fetched dramas
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dramasPerPage = 21; // Number of dramas per page
  // const [totalPages, setTotalPages] = useState(5); // Placeholder for total pages

  // Function to fetch dramas (simulates API call)
  const fetchDramas = async (params) => {
    console.log("Fetching dramas with params:", params); // Debugging log
    // Simulate backend filtering, pagination, and search
    const filteredDramas = dramasCatalogue.filter((drama) => {
      const matchesSearch =
        !params.search ||
        drama.title.toLowerCase().includes(params.search.toLowerCase());
      const matchesGenre =
        !params.filters.genre || drama.genre === params.filters.genre;
      return matchesSearch && matchesGenre;
    });
    const paginatedDramas = filteredDramas.slice(
      (params.page - 1) * dramasPerPage,
      params.page * dramasPerPage,
    );
    setDramas(paginatedDramas);
    // setTotalPages(Math.ceil(filteredDramas.length / dramasPerPage));
  };

  // Fetch dramas on component mount or when filters change
  useEffect(() => {
    fetchDramas({ page: currentPage, search: searchQuery, filters });
  }, [currentPage, searchQuery, filters]);

  // Handle pagination click
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle search submission
  const handleSearchSubmit = (query) => {
    setSearchQuery(query); // Update the search query
    setCurrentPage(1); // Reset to the first page
  };

  // Handle filter application
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Update filters
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <div className="mx-auto mt-20 flex max-w-full flex-col px-4 md:px-6 lg:px-8">
      {/* Search and Filter */}
      <div className="mb-4 mt-4 w-full">
        <Search
          onSearchSubmit={handleSearchSubmit}
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      <FilterMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(false)}
        onFilterApply={handleFilterChange}
      />

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
            {/* <div className="p-4">
              <h3 className="font-bold">{drama.title}</h3>
              <p className="text-sm text-gray-500">{drama.genre}</p>
            </div> */}
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
