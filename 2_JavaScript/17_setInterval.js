let ctr = 0;
function callBackFunc() {
  ctr = ctr + 1;
  console.log(ctr);
}

setInterval(callBackFunc, 1000);
