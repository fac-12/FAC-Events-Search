import React from "react";

export default props => {
  const { title, host, date, day, time, num_interested } = props.data;
  const renderTitle = hover => {
    if (!hover) {
      return (
        <div>
          <h1>
            {title.length > 40 ? title.slice(0, 37).concat("...") : title}
          </h1>
          <p>{host}</p>
        </div>
      );
    }
    return <h1>{title}</h1>;
  };

  return (
    <div className="smallEventCard_container">
      <div className="smallEventCard_top">
        <div className="smallEventCard_top_left">
          {renderTitle(props.hover)}
        </div>
        <div className="smallEventCard_top_right">
          <h2>{date}</h2>
          <p>{day}</p>
          <p>{time}</p>
        </div>
      </div>
      <p className="smallEventCard_footer">
        {num_interested} people interested
      </p>
    </div>
  );
};
