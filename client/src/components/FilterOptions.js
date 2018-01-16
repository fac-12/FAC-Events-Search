import React from "react";

export default props => {
  const options = [
    { name: "My Events", filter: "interested" },
    { name: "Popular", filter: "popular" },
    { name: "Suggested", filter: "suggested" },
    { name: "All Events", filter: "all" }
  ];
  const renderButton = option => (
    <li key={option.filter}>
      <button id={option.filter} onClick={props.onClick}>
        {props.filter === option.filter ? <span>></span> : null}
        {option.name}
      </button>
    </li>
  );
  return <ul>{options.map(option => renderButton(option))}</ul>;
};
