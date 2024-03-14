const weekDays = [
  'Su',
  'Mo',
  'Tu',
  'We',
  'Th',
  'Fr',
  'St'
]

const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
};

const result = dayOfWeek(new Date(2025, 0, 1), 14);

console.log(result);
