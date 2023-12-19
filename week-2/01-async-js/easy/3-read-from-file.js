let fs = require('fs');

fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if(err){
    console.error("There was an error");
  }else{
    console.log("this was the data in the file "+ data);
  }
})

let counter = 0;

while(true){
  counter = counter + 1;
  console.log(counter);
  if(counter == 100){
    break;
  }
}