const getGreenwichTime = (date) => {
  const formatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC", // Set the time zone to UTC for Greenwich time
  });
  return formatter.format(date);
};

// Example usage:
const inputDate = new Date(); // Example date
const greenwichTime = getGreenwichTime(inputDate);
console.log(greenwichTime);
