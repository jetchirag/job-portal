function AddOrSubtractDays(startingDate, number, add) {
  if (add) {
    return new Date(new Date().setDate(startingDate.getDate() + number)).toLocaleDateString();
  } else {
    return new Date(new Date().setDate(startingDate.getDate() - number)).toLocaleDateString();
  }
}

console.log('Today : ' + new Date());
console.log('Future : ' + AddOrSubtractDays(new Date(), 5, true));
console.log('Past : ' + AddOrSubtractDays(new Date(), 5, false));

const currentDate = new Date();
const dateOne = AddOrSubtractDays(new Date(), 1, false);

const data = [
  {
    name: AddOrSubtractDays(new Date(), 6, false),
    uv: 3,
    pv: 4,
    amt: 2400,
  },
  {
    name: AddOrSubtractDays(new Date(), 5, false),
    uv: 5,
    pv: 10,
    amt: 2210,
  },
  {
    name: AddOrSubtractDays(new Date(), 4, false),
    uv: 2,
    pv: 5,
    amt: 2290,
  },
  {
    name: AddOrSubtractDays(new Date(), 3, false),
    uv: 11,
    pv: 23,
    amt: 2000,
  },
  {
    name: AddOrSubtractDays(new Date(), 2, false),
    uv: 10,
    pv: 28,
    amt: 2181,
  },
  {
    name: AddOrSubtractDays(new Date(), 1, false),
    uv: 9,
    pv: 10,
    amt: 2500,
  },
  {
    name: currentDate.toLocaleDateString(),
    uv: 34,
    pv: 44,
    amt: 2100,
  },
];

module.exports = data;
