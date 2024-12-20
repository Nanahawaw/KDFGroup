import PropTypes from "prop-types";
import { useState } from "react";

function FilterMenu({ onApplyFilters }) {
  const [localFilters, setLocalFilters] = useState({
    type: "",
    genre: "",
    year: "",
    rating: "",
  });

  const handleFilterChange = (key, value) => {
    setLocalFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const applyFilters = () => {
    onApplyFilters(localFilters);
  };

  return (
    <div className="w-full max-w-7xl px-2">
      <div className="relative w-full rounded-lg bg-white p-4 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <h3 className="text-lg font-semibold text-[#7F56DA]">Filters</h3>
          {/* The close button is controlled by parent; we don’t close here */}
        </div>

        {/* Filter Options */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
          {/* Filter Type */}
          <div className="mb-4 lg:mb-0 lg:flex-grow">
            <label className="mb-1 block font-semibold">Type</label>
            <select
              value={localFilters.type}
              onChange={(e) => handleFilterChange("type", e.target.value)}
              className="w-full rounded-lg border px-3 py-2 shadow-sm"
            >
              <option value="">Select Type</option>
              <option value="movie">Movie</option>
              <option value="tv series">TV Series</option>
              <option value="limited tv show">Limited TV Show</option>
            </select>
          </div>

          {/* Filter Genre */}
          <div className="mb-4 lg:mb-0 lg:flex-grow">
            <label className="mb-1 block font-semibold">Genre</label>
            <select
              value={localFilters.genre}
              onChange={(e) => handleFilterChange("genre", e.target.value)}
              className="w-full rounded-lg border px-3 py-2 shadow-sm"
            >
              <option value="">Select Genre</option>
              <option value="romance">Romance</option>
              <option value="thriller">Thriller</option>
              <option value="action">Action</option>
              <option value="historical">Historical</option>
              <option value="medical">Medical</option>
              <option value="legal">Legal</option>
              <option value="school">School</option>
              <option value="fantasy">Fantasy</option>
              <option value="every day life">Every Day Life</option>
            </select>
          </div>

          {/* Filter Year */}
          <div className="mb-4 lg:mb-0 lg:flex-grow">
            <label className="mb-1 block font-semibold">Year</label>
            <input
              type="number"
              value={localFilters.year}
              onChange={(e) => handleFilterChange("year", e.target.value)}
              className="w-full rounded-lg border px-3 py-2 shadow-sm"
              placeholder="Enter Year"
            />
          </div>

          {/* Filter Rating */}
          <div className="mb-4 lg:mb-0 lg:flex-grow">
            <label className="mb-1 block font-semibold">Rating</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              value={localFilters.rating}
              onChange={(e) => handleFilterChange("rating", e.target.value)}
              className="w-full min-w-[200px] rounded-lg border px-3 py-2 shadow-sm"
              placeholder="Enter Rating (0-5)"
            />
          </div>

          {/* Apply Filters Button */}
          <div className="lg:flex-grow">
            <button
              onClick={applyFilters}
              className="w-full rounded-lg bg-[#7F56DA] px-4 py-2 text-white shadow-md hover:bg-purple-800 lg:mt-6 lg:w-auto"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterMenu.propTypes = {
  onApplyFilters: PropTypes.func.isRequired,
};

export default FilterMenu;
