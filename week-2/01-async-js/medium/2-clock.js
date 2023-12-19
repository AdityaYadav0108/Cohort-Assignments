setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  console.log(`${hour}:${minute}:${seconds<10?'0'+seconds:seconds}`);
}, 1000);
