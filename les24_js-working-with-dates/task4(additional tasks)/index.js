// Function to group students by their birth dates
const students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "Q", birthDate: "03/15/2011" },
  { name: "w", birthDate: "06/15/2012" },
  { name: "e", birthDate: "11/15/2014" },
  { name: "r", birthDate: "12/15/2007" },
  { name: "t", birthDate: "12/15/2007" },
];

const studentsBirthDays = (students) => {
  const months = {};
  const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  students.forEach((student) => {
    const [month] = student.birthDate.split("/");
    const monthName = monthsNames[parseInt(month, 10) - 1];

    if (!months[monthName]) {
      months[monthName] = [];
    }

    months[monthName].push(student.name);
  });

  for (const month in months) {
    months[month].sort((a, b) => {
      const dayA = parseInt(
        students.find((student) => student.name === a).birthDate.split("/")[1],
        10
      );
      const dayB = parseInt(
        students.find((student) => student.name === b).birthDate.split("/")[1],
        10
      );
      return dayB - dayA;
    });
  }

  const sortedMonths = Object.fromEntries(Object.entries(months).sort((a, b) => monthsNames.indexOf(a[0]) - monthsNames.indexOf(b[0])));

  return months;
};

// Example usage:
const students = [
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
  { name: "Q", birthDate: "03/15/2011" },
  { name: "w", birthDate: "06/15/2012" },
  { name: "e", birthDate: "11/15/2014" },
  { name: "r", birthDate: "12/15/2007" },
  { name: "t", birthDate: "12/15/2007" },
];
const groupedByBirthDays = studentsBirthDays(students);
console.log(groupedByBirthDays);
