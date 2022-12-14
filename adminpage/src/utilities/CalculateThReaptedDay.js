export const days = {
  mon: new Date(new Date().setDate(new Date().getDate() - 6))
    .toString()
    .split(" ")[2],

  tu: new Date(new Date().setDate(new Date().getDate() - 5))
    .toString()
    .split(" ")[2],
  wedn: new Date(new Date().setDate(new Date().getDate() - 4))
    .toString()
    .split(" ")[2],

  thur: new Date(new Date().setDate(new Date().getDate() - 3))
    .toString()
    .split(" ")[2],
  fri: new Date(new Date().setDate(new Date().getDate() - 2))
    .toString()
    .split(" ")[2],
  sat: new Date(new Date().setDate(new Date().getDate() - 1))
    .toString()
    .split(" ")[2],
  sun: new Date(new Date().setDate(new Date().getDate()))
    .toString()
    .split(" ")[2],
};

export const dayfinder = (num) => {
  const dayoftheweek = [
    {
      num: 0,
      day: "sun",
    },
    {
      num: 1,
      day: "mon",
    },
    {
      num: 2,
      day: "tue",
    },
    {
      num: 3,
      day: "wed",
    },
    {
      num: 4,
      day: "thur",
    },
    {
      num: 5,
      day: "fri",
    },
    {
      num: 6,
      day: "sat",
    },
  ];

  const day = dayoftheweek.find((day) => day.num === num);
  return day.day;
};
