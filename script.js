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
let status = "";
let change = 0;

const ifCashBelowOrEqual = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
    changeDueContainer.innerHTML = "<p>No change due - customer paid with exact cash</p>"
  } else {
    change = calculateChange();
    console.log(change);
    status = determineStatus(change);
    console.log(status);
    coinsToGiveForChange(change);
    updatePage(status);
  }
};

const calculateChange = () => {
  return change = Number(cash.value) - price;
}

const determineStatus = (change) => {
  totalCid = 0;
  
  cid.forEach(i => {
    totalCid += i[1];
  });
  
  totalCid = Number(totalCid.toFixed(2));
  console.log(totalCid);
  
  if (totalCid < change) {
    return "INSUFFICIENT_FUNDS";
  } else if (totalCid > change) {
    return "OPEN";
  }
  
  return "CLOSED";
};

const coinsToGiveForChange = (change) => {
  let coinValues = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let amountWithEachCoin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  coinValues.forEach((i) => {
    if (i > change) {
      return;
    } else {
      console.log(i);
    }
  });
  
};

const clearChangeDueContainer = () => {
  changeDueContainer.innerHTML = "";
};

const updatePage = (status) => {
  clearChangeDueContainer();
  changeDueContainer.innerHTML += `<p>Status: ${status}</p>`;
};

purchaseBtn.addEventListener("click", ifCashBelowOrEqual);
