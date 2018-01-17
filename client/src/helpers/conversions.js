import React from "react";

const zeroPadTime = input =>
  input.toString().length < 2 ? `0${input}` : input;

export const parseDateTime = datetime => {
  const dateObj = new Date(datetime);
  const dateArray = dateObj.toDateString().split(" ");
  const day = dateArray[0];
  const date = `${dateArray[1]} ${dateArray[2]}`;
  const time = `${zeroPadTime(dateObj.getHours())}:${zeroPadTime(
    dateObj.getMinutes()
  )}`;
  return { day, date, time };
};

export const renderInterested = num_interested => {
  if (num_interested === "0") {
    return <p>No people interested yet</p>;
  } else if (num_interested === "1") {
    return <p>1 person interested</p>;
  }
  return <p>{num_interested} people interested</p>;
};

export const pInt = input => parseInt(input, 10);
