import PropTypes from "prop-types";
import { useState } from "react";

function FilterMenu({ isMenuOpen, toggleMenu, onFilterApply }) {
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
    onFilterApply(localFilters); // Send filters to parent on apply
  };

  return (
    <div
      className={`fixed right-0 top-0 mt-20 h-full w-80 bg-white shadow-lg transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          onClick={toggleMenu}
          className="rounded bg-gray-200 p-2 text-sm hover:bg-gray-300"
        >
          ✕
        </button>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <label className="block font-semibold">Type</label>
          <select
            value={localFilters.type}
            onChange={(e) => handleFilterChange("type", e.target.value)}
            className="w-full rounded border px-3 py-2"
          >
            <option value="">Select Type</option>
            <option value="movie">Movie</option>
            <option value="tv series">TV Series</option>
            <option value="limited tv show">Limited TV Show</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Genre</label>
          <select
            value={localFilters.genre}
            onChange={(e) => handleFilterChange("genre", e.target.value)}
            className="w-full rounded border px-3 py-2"
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
        <div className="mb-4">
          <label className="block font-semibold">Year</label>
          <input
            type="number"
            value={localFilters.year}
            onChange={(e) => handleFilterChange("year", e.target.value)}
            className="w-full rounded border px-3 py-2"
            placeholder="Enter Year"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Rating</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="5"
            value={localFilters.rating}
            onChange={(e) => handleFilterChange("rating", e.target.value)}
            className="w-full rounded border px-3 py-2"
            placeholder="Enter Rating (0-5)"
          />
        </div>
        <button
          onClick={applyFilters}
          className="w-full rounded bg-purple-700 px-4 py-2 text-white"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

FilterMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // Whether the menu is open
  toggleMenu: PropTypes.func.isRequired, // Toggles the menu visibility
  onFilterApply: PropTypes.func.isRequired, // Sends filters to parent
};

export default FilterMenu;
