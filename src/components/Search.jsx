import PropTypes from "prop-types";
import { useState } from "react";
import octicon from "../assets/octicon.png";

function Search({ onSearchSubmit, toggleMenu }) {
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const handleSearchClick = () => {
    if (localSearchQuery.trim()) {
      onSearchSubmit(localSearchQuery); // Trigger search only if input is valid
    }
  };

  return (
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
        onClick={toggleMenu} // Open the filter menu
        className="h-10 rounded bg-purple-700 px-4 py-2 text-sm text-white"
      >
        Filter
      </button>
    </div>
  );
}

Search.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired, // Triggered on search icon click
  toggleMenu: PropTypes.func.isRequired, // Opens the filter menu
};

export default Search;
