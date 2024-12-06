import PropTypes from "prop-types";
import { useState } from "react";
import octicon from "../assets/octicon.png";
import FilterMenu from "./FilterMenu";

function Search({ onSearchSubmit, onFiltersSubmit }) {
  const [localSearchQuery, setLocalSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchClick = () => {
    if (localSearchQuery.trim()) {
      onSearchSubmit(localSearchQuery);
    }
  };

  const handleApplyFilters = (appliedFilters) => {
    onFiltersSubmit(appliedFilters);
    setIsFilterOpen(false); // close the filter after applying
  };

  return (
    <div className="relative flex flex-col">
      {/* Search Bar */}
      <div className={`flex items-center justify-between space-x-4`}>
        <form
          className="flex h-10 flex-grow items-center rounded-[10px] border border-gray-300 px-3"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearchClick();
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
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="h-10 rounded bg-[#7F56DA] px-4 py-2 text-sm text-white"
        >
          Filter
        </button>
      </div>

      {/* Filter Menu Container with smoother animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isFilterOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="relative mt-2 rounded-lg bg-white p-4 shadow-lg">
          {/* A close button inside, if desired */}

          <FilterMenu onApplyFilters={handleApplyFilters} />
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onFiltersSubmit: PropTypes.func.isRequired,
};

export default Search;
