const weekDays = [
  'Sun',
  'Mon',
  'Tus',
  'Wen',
  'Thu',
  'Fri',
  'Sut'
]

const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  // return new Date(dateInFuture).getDay();
  return weekDays[new Date(dateInFuture).getDay()];
};

const result = getDayOfWeek(new Date(2025, 0, 1), 14);

console.log(result);
