import React from "react";
import "./datepicker.css";

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
      <button
        className={props.clearBtn ? "clear_btn" : "hidden"}
        onClick={props.resetSearch}
      >
        <svg
          className="DateRangePickerInput_clearDates_svg DateRangePickerInput_clearDates_svg_1"
          viewBox="0 0 12 12"
        >
          <path
            fillRule="evenodd"
            d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
          />
        </svg>
      </button>
    </div>
  );
};
