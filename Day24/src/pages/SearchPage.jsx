import { useState } from "react";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChanges={(e) => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </div>
      <div>
        <h1>Products</h1>
        <div></div>
      </div>
    </div>
  );
};

export { SearchPage };
