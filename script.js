let price = 1;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
let cash = document.getElementById("cash");

const purchaseBtn = document.getElementById("purchase-btn");
const changeDueContainer = document.getElementById("change-due");

const calculate = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
    changeDueContainer.innerHTML = "<p>No change due - customer paid with exact cash</p>"
  }
};

purchaseBtn.addEventListener("click", calculate);