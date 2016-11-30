function checkCashRegister(price, cash, cid){
  var change = cash - price;
  var arreglo = [];
  var currency = {
      'PENNY' : 0.01,
      'NICKEL': 0.05,
      'DIME': 0.10,
      'QUARTER': 0.25,
      'ONE': 1.00,
      'FIVE': 5.00,
      'TEN': 10.00,
      'TWENTY': 20.00,
      'ONE HUNDRED': 100.00
  };
var count = 0;
var sum = 0;
  while(cid.length > count){
    sum += cid[count][1];
    count++;
  }
  sum  = Math.round(sum * 100) / 100;


  if(price < sum){

    for (var j = 0; j < cid.length; j++) {
      var value = currency[cid[j][0]];
      var number = Math.round(cid[j][1] / value);
      cid[j][1] = value;
      cid[j].push(number);

    }

      while (change > 0.00) {
        for (var i = cid.length -1; i >= 0; i--) {


          if(cid[i][2] > 0){

            if(change >= cid[i][1]){
              cid[i][2] = cid[i][2] - 1;
              var index = arreglo.indexOf(cid[i][0]);

              if(index !== -1){
                arreglo[index +1] = arreglo[index +1] + cid[i][1];

              }else{
                arreglo.push(cid[i][0],cid[i][1]);
              }

              change = change - cid[i][1];
              change = Math.round(change * 100) / 100;
              i++;
            }


          }


        }

      }
      var result = [];
      while(arreglo.length > 0){
        result.push(arreglo.splice(0, 2));
      }

      console.log(result);
      return result;


  } else if(change === sum){
    console.log("Closed");
    return "Closed";
  }else{
    console.log("Insufficient Funds");
    return "Insufficient Funds";
  }


}

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
