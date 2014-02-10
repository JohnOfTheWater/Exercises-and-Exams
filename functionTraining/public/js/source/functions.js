/* exported average,factorial,longestWord,squirrelParty,fibonacci,replaceZero,melt,meltAgain, startLastSix,  ifUppercase, calcInterest, stndDev, variance, appendIfOdd, capVowels, sum, diffOfsum, sumOfsquare, pippo, pluto */

'use strict';



function appendIfOdd(x,y){
  var total = x+y;
  var num = total.length;
  if (num %2 === 0){
    total = ' ';
    return total;
  } else {
    return total;
  }
}

function sum(x){
  var total = 0;
  for (var i = 0; i < x.length; i++){
    total += x[i];
  }
  return total;
}

function diffOfsum(x,y){
  var first = sum(x);
  var second = sum(y);

  return first - second;
}

function sumOfsquare(x){
  var total = 0;
  for (var i = 0; i < x.length; i++ ){
    var y = x[i]*x[i];
    console.log(y);
    total += y;
  }
  return total;
}

function pippo(x){
  var newArray = [];
  for (var i = 0; i < x.length; i++){
    if (x[i]%2 === 0){
      var y = x[i]*x[i];
      newArray.push(y);
    } else {
      var z = x[i]*x[i]*x[i];
      newArray.push(z);
    }
  }
  return sum(newArray);
}

function pluto(x){
  var newArray = [];
  for (var i = 0; i < x.length; i++){
    if (x[i]%2 === 0){
      console.log('removed!!');
    } else {
      var z = x[i]*x[i];
      newArray.push(z);
    }
  }
  return newArray;
}

function capVowels(x){
  var y = x.replace(/e/gi, 'E');
  y = y.replace(/o/gi, 'O');
  y = y.replace(/a/gi, 'A');
  y = y.replace(/i/gi, 'I');
  y = y.replace(/u/gi, 'U');
  return y;
}

function average(x){
  var total = 0;
  for(var i = 0; i < x.length; i++){
    total += x[i];
  }
  return total / x.length;
}

function variance(x){
  var mean = average(x);
  var newArray = [];
  for(var i = 0; i < x.length; i++){
    var y = (x[i]-mean)*(x[i]-mean);
    newArray.push(y);
  }
  return average(newArray);
}

function stndDev(x){
  var y = Math.sqrt(variance(x));
  return Math.round(y);
}

function calcInterest(x,y,z){
  var interest = (y/x)*100;
  var numOfMonths = Math.round(z/30);
  var intPerMonths = interest*numOfMonths;
  return x+intPerMonths;
}

function ifUppercase(x){
  var array = x.split('');
  var newArray = _.map(array, function(str){return str.toLowerCase(); });
  return newArray.join('');
}

function startLastSix(x){
  var y = x.length;
  var result = (x[0] === 6  || x[y-1]=== 6)? true : false;
  return result;
}

function melt(x,y){
  var newArray = [];
  for(var i = 0; i < x.length; i++){
    var z = x[i]+y[i];
    newArray.push(z);
  }
  return newArray;
}

function meltAgain(x,y){
  var newArray = [];
  for(var i = 0; i < x.length; i++){
    var z = x[i];
    var k = y[i];
    newArray.push(z);
    newArray.push(k);
  }
  return newArray;
}

function replaceZero(x){
  var newArray = _.remove(x, function(number){return number === 0; });
  console.log(newArray);
  return x;
}

function fibonacci(num){
  var array = [1,2];
  for(var i = 0; i < num-2; i++){
    var next = array[i]+array[i+1];
    array.push(next);
  }
  var newArray = _.remove(array, function(x){return x%2 === 0; });
  var sum = 0;
  for (var k = 0; k < newArray.length; k++){
    sum += newArray[k];
  }
  return sum;
}

function squirrelParty(x,y){
  var result = (x >= 40 || (x >= 10 && y === 'sun'))? true : false;
  return result;
}

function longestWord(x){
  debugger;
  var array = x.split(' ');
  var word = ['x'];
  for (var i = 0; i < array.length; i++){
    if (array[i].length >= word[0].length){
      word.splice(0,1,array[i]);
    }
  }
  return word[0];
}

function factorial(x){
  var total = 1;
  for(var i = 0; i < x; i++){
    total = total * (x-i);
  }
  return total;
}
