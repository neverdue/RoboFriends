import React from 'react';

const SearchBox = ({ SearchChange }) => {
  return (
    <div className="pb3">
      <input
      className="ba b--green
      bg-lightest-blue ma2 pa3"
      type="Search"
      placeholder="Search robots"
      onChange={SearchChange}
      />
    </div>
  )
}

export default SearchBox;
