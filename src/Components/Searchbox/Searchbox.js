import React from "react";

const Searchbox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a movie title"
      />
    </div>
  );
};

export default Searchbox;
