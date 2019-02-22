const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/:arr", (req, res) => {
  let arrayToSort = req.params.arr;
  let myArr = arrayToSort.replace(/\s/g, "").split(',').map((item) => {
    return parseInt(item, 10);
  });
  console.log(myArr);

  function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
        }
      }
      return arr;
  }
  res.status(200).json(bubbleSort(myArr));
});

module.exports = app;
