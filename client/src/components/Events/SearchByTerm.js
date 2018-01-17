import React from "react";

export default props => {
  const onChange = e => {
    props.onTermSearch(e.currentTarget.value);
  };

  return (
    <input
      type="text"
      value={props.searchTerm}
      onChange={onChange}
      placeholder="search..."
      className="search_text_input"
    />
  );
};
