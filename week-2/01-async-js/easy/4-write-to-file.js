const fs = require('fs');

fs.writeFileSync('./sample.txt', "hi my name is aditya yadav and im a software engineer, more specifically im trying to be a full stack develop i hope my hardwork pays off :)")
const data = fs.readFileSync('./sample.txt', 'utf-8');
console.log("This is the data inside your file " + data);