import React from "react";

export default props => {
  const onChange = e => {
    props.onTermSearch(e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="text"
        value={props.searchTerm}
        onChange={onChange}
        placeholder="Enter Search Term..."
        className="search_text_input"
      />
      <button className="clear_btn">x</button>
    </div>
  );
};
