/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  let myObj ={};

  for(let i=0; i<transactions.length; i++){
    if(myObj.hasOwnProperty(transactions[i].category)){
      myObj[transactions[i].category] += transactions[i].price;
    }else{
      myObj[transactions[i].category] = transactions[i].price;
    }
  }

  let myArr = convertArrToObj(myObj);

  return myArr;
}

function convertArrToObj(obj) {
  let myArr = [];
  Object.keys(obj).forEach(key => {
    let newObj = {};
    newObj.category = key;
    newObj.totalSpent = obj[key];
    myArr.push(newObj);
  })

  return myArr;
}

module.exports = calculateTotalSpentByCategory;

