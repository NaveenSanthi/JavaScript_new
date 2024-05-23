const tickBooking = () => {
  let count = 0;
  return function () {
    count = count + 2;
    console.log(count);
  };
};

const innerFun = tickBooking();
innerFun();
