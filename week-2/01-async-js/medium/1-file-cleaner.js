const fs = require('fs');

const data = fs.readFileSync('./sample.txt', 'utf8');

console.log(data);

const dataWithoutExtraSpaces = data.replace(/\s+/g, ' ');

fs.writeFileSync('./sample.txt', dataWithoutExtraSpaces);

console.log(fs.readFileSync('./sample.txt', 'utf8'));