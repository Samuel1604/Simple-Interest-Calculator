// const principalAmount = 1000;
// let annual_interest_rate = 0.05;
// let time = 3;
// let interest = principalAmount * annual_interest_rate * time;
// let totalAmount = principalAmount + interest;
// document.write(
//   "After " +
//     time +
//     " years at an interest rate of " +
//     (principalAmount / 100) * annual_interest_rate +
//     "% the total amountb will be N" +
//     totalAmount,
// );

const principal = document.getElementById("principal");
const rate = document.getElementById("rate");
const time = document.getElementById("time");
const trigger = document.getElementById("trigger");
trigger.addEventListener("click", () => {
  const interest = (principal.value * rate.value * time.value) / 100;
  const total = Number(principal.value) + interest;
  console.log(
    "After ",
    time.value,
    " years at an interest rate of ",
    rate.value,
    "%, the total amount will be ",
    total,
    ".",
  );
});
