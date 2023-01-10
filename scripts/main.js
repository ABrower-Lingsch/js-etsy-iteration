(function () {
  "use strict";

  //////////////////////////////////////////////////////////////  #1

  const prices = items.map(function (item) {
    return item.price;
  });

  function getAvg(prices) {
    const total = prices.reduce((acc, i) => acc + i, 0);
    return total / prices.length;
  }

  const avgPrice = getAvg(prices);
  console.log(`The average price is $${avgPrice.toFixed(2)}.`);

  //////////////////////////////////////////////////////////////  #2

  const inRange = items.filter(function (item) {
    return item.price >= 14 && item.price <= 18;
  });

  console.log("Items that cost between $14.00 USD and $18.00 USD:");

  inRange.forEach(function (item) {
    console.log(item.title);
  });

  //////////////////////////////////////////////////////////////  #3

  const currencyType = items.filter(function (item) {
    return item.currency_code === "GBP";
  });

  currencyType.forEach(function (item) {
    console.log(item.title, "costs £", item.price);
  });

  //////////////////////////////////////////////////////////////  #4

  const materialType = items.filter(function (item) {
    return item.materials.includes("wood");
  });

  materialType.forEach(function (item) {
    console.log(item.title, "is made of wood");
  });

  //////////////////////////////////////////////////////////////  #5

  const matQuantity = items.filter(function (item) {
    return item.materials.length >= 8;
  });

  matQuantity.forEach(function (item) {
    console.log(
      item.title,
      "has",
      item.materials.length,
      "materials",
      item.materials
    );
  });

  //////////////////////////////////////////////////////////////  #6

  const madeBy = items.filter(function (item) {
    return item.who_made === "i_did";
  });

  console.log(`${madeBy.length} were made by their sellers`);
})();
