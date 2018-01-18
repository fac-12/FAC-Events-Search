import React from "react";
import { renderInterested } from "../../helpers/conversions";

export default props => {
  const { title, host, date, day, time, num_interested, url } = props.data;

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
    <a className="smallEventCard_container" href={url} target="_blank">
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
      <div className="smallEventCard_footer">
        {renderInterested(num_interested)}
      </div>
    </a>
  );
};
