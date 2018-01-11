import React from "react";

export default props => (
  <li key={props.data.id} className="smallEventCard_container">
    <div className="smallEventCard_top">
      <div className="smallEventCard_top_left">
        <h1>{props.data.title}</h1>
        <p>{props.data.host}</p>
      </div>
      <div className="smallEventCard_top_right">
        <h2>{props.data.date}</h2>
        <p>{props.data.day}</p>
        <p>{props.data.time}</p>
      </div>
    </div>
    <p className="smallEventCard_footer">10 people interested</p>
  </li>
);
