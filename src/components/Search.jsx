import PropTypes from "prop-types";
import { useState } from "react";
import octicon from "../assets/octicon.png";
import FilterMenu from "./FilterMenu"; // Import the FilterMenu component

function Search({ onSearchSubmit, onFiltersSubmit }) {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchClick = () => {
    if (localSearchQuery.trim()) {
      onSearchSubmit(localSearchQuery); // Trigger search only if input is valid
    }
  };

  const handleApplyFilters = (appliedFilters) => {
    onFiltersSubmit(appliedFilters); // Send the filters to the parent component
    setIsFilterOpen(false); // Close the filter menu
  };

  return (
    <div className="relative flex flex-col">
      {/* Search Bar */}
      <div className="flex items-center justify-between space-x-4">
        <form
          className="flex h-10 flex-grow items-center rounded-[10px] border border-gray-300 px-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchClick(); // Trigger search on form submit
          }}
        >
          <input
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            placeholder="Search here..."
            className="flex-grow border-none text-sm font-light placeholder-gray-300 outline-none"
          />
          <img
            alt="Search icon"
            src={octicon}
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleSearchClick}
          />
        </form>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)} // Toggle filter dropdown
          className="h-10 rounded bg-purple-700 px-4 py-2 text-sm text-white"
        >
          Filter
        </button>
      </div>

      {/* Filter Menu */}
      <div
        className={`absolute left-0 right-0 top-full z-50 mt-2 rounded-lg bg-white shadow-lg transition-all duration-300 ${
          isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {isFilterOpen && (
          <FilterMenu
            isMenuOpen={isFilterOpen} // Pass the isFilterOpen state
            toggleMenu={() => setIsFilterOpen(false)}
            onApplyFilters={handleApplyFilters} // Pass the apply filters handler
          />
        )}
      </div>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired, // Triggered when the search query is submitted
  onFiltersSubmit: PropTypes.func.isRequired, // Triggered when filters are applied
};

export default Search;
