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
