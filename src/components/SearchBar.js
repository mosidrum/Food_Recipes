import React from "react";

const SearchBar =(
  {value, isLoading, handleSubmit, onChange}

) => {
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} placeholder="Search Recipes" className="form-search" disabled={isLoading} onChange={onChange} />

        <input type='submit' className="submit-btn" value='Search' disabled={isLoading || !value} />
      </form>
    </div>
    );
}

export default SearchBar;
