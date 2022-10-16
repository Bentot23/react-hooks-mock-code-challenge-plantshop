import React from "react";

function Search({onSearch}) {

  // const [search, setSearch] = useState('');

  function handleSearch(e) {
    // e.preventDefault();
    // console.log(e.target.value)
    onSearch(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => console.log("Searching...")}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
