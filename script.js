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
const cidDisplayContainer = document.getElementById("cid-text-each-coin-bill");
const priceDisplayContainer = document.getElementById("price-display");
let registerStatus = "";
let change = 0;
let coinValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
let coinNames = ['Pennies', 'Nickles', 'Dimes', 'Quarters', 'Ones', 'Fives', 'Tens', 'Twenties', 'Hundreds'];
let amountWithEachCoin = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const ifCashBelowOrEqual = () => {
  if (cash.value < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (Number(cash.value) === price) {
    changeDueContainer.innerHTML = "<p>No change due - customer paid with exact cash</p>"
  } else {
    change = calculateChange();
    //console.log(change);
    let totalCid = getTotalCid(cid);
    console.log(change);
    registerStatus = determineStatus(change, totalCid);
    let dollarAmountOfEachCoin = coinsToGiveForChange(change);
    updateChangeDueContainer(registerStatus, dollarAmountOfEachCoin);
    updateCidDisplay(cid);
  }
};

const calculateChange = () => {
  return change = Number(cash.value) - price;
}

const getTotalCid = (cid) => {
  totalCid = 0;
  
  cid.forEach(i => {
    totalCid += i[1];
  });
  
  totalCid = Number(totalCid.toFixed(2));
  
  return totalCid;
}

const determineStatus = (change, totalCid) => {
  if (totalCid < change) {
    return "INSUFFICIENT_FUNDS";
  } else if (totalCid > change) {
    return "OPEN";
  }
  
  return "CLOSED";
};

const coinsToGiveForChange = (change) => {
  let dollarAmountOfEachCoin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  let i = dollarAmountOfEachCoin.length - 1;
  while(change > 0 && i >= 0) {
    if (coinValues[i] > change || cid[i][1] === 0) {
      i--;
      continue;
    } else {
      change -= coinValues[i];
      amountWithEachCoin[i] += 1;
      dollarAmountOfEachCoin[i] += coinValues[i];
      cid[i][1] -= coinValues[i];
      console.log(cid);
      //console.log(coinValues[i]);
      //console.log(amountWithEachCoin);
      //console.log(dollarAmountOfEachCoin);
      
      //console.log(change);
      //console.log("");
    }
  }
  
  return dollarAmountOfEachCoin;
  
};

const clearChangeDueContainer = () => {
  changeDueContainer.innerHTML = "";
};

const updateChangeDueContainer = (registerStatus, dollarAmountOfEachCoin) => {
  clearChangeDueContainer();
  changeDueContainer.innerHTML += `<p>Status: ${registerStatus}</p>`;
  console.log(dollarAmountOfEachCoin)
  
  for (let a = dollarAmountOfEachCoin.length - 1; a >= 0; a--){
    if (dollarAmountOfEachCoin[a] > 0) {
      changeDueContainer.innerHTML += `<p>${cid[a][0]}: $${dollarAmountOfEachCoin[a]}</p>`;
      console.log(`${cid[a][0]}: $${dollarAmountOfEachCoin[a]}`);
    }
    
  }
};

const updateCidDisplay = (cid) => {
  cidDisplayContainer.innerHTML = "";
  for (let i = 0; i < cid.length; i++) {
    cidDisplayContainer.innerHTML += `<p>${coinNames[i]}: $${cid[i][1]}</p>`;
  }
}

priceDisplayContainer.innerHTML = `<p>Total: $${price}</p>`;
updateCidDisplay(cid);

purchaseBtn.addEventListener("click", ifCashBelowOrEqual);
