let counter = 0;

function count () {
  setTimeout(() => {
    console.log(counter += 1);
    count();
  }, 1000)
}

count();

