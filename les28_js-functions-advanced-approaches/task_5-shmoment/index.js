// You can create a function `shmoment` to support method chaining for date operations. The function should accept an initial date as input and return an object with methods for adding and subtracting time intervals. Here's the implementation of the `shmoment` function:

// ```javascript
function shmoment(initialDate) {
  const resultDate = new Date(initialDate);

  const dateOperations = {
    add(unit, value) {
      if (unit === "years") {
        resultDate.setFullYear(resultDate.getFullYear() + value);
      } else if (unit === "months") {
        resultDate.setMonth(resultDate.getMonth() + value);
      } else if (unit === "days") {
        resultDate.setDate(resultDate.getDate() + value);
      } else if (unit === "hours") {
        resultDate.setHours(resultDate.getHours() + value);
      } else if (unit === "minutes") {
        resultDate.setMinutes(resultDate.getMinutes() + value);
      } else if (unit === "seconds") {
        resultDate.setSeconds(resultDate.getSeconds() + value);
      } else if (unit === "milliseconds") {
        resultDate.setMilliseconds(resultDate.getMilliseconds() + value);
      }
      return this;
    },
    subtract(unit, value) {
      return this.add(unit, -value);
    },
    result() {
      return resultDate;
    },
  };

  return dateOperations;
}

const initialDate = new Date(2020, 0, 7, 17, 17, 17);

// Example usage:
const finalDate = shmoment(initialDate)
  .add("minutes", 2)
  .add("days", 8)
  .subtract("years", 1)
  .result();

console.log(finalDate); // ... Jan 15 2019 17:19:17 ...
