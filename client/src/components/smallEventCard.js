import React from "react";

export default props => {
  const { id, title, host, date, day, time } = props.data;

  const onHover = () => {
    console.log("hovering");
  };
  return (
    <li
      key={id}
      onMouseEnter={title.length > 40 ? onHover : () => {}}
      className="smallEventCard_container"
    >
      <div className="smallEventCard_top">
        <div className="smallEventCard_top_left">
          <h1>
            {title.length > 40 ? title.slice(0, 37).concat("...") : title}
          </h1>
          <p>{host}</p>
        </div>
        <div className="smallEventCard_top_right">
          <h2>{date}</h2>
          <p>{day}</p>
          <p>{time}</p>
        </div>
      </div>
      <p className="smallEventCard_footer">10 people interested</p>
    </li>
  );
};
