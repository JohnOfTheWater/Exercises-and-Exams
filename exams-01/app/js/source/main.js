(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#getInput').click(getValue);
    //whoIsPenny();
    //bho();
  }

  var value = 0;
  var random = 255;

  function sum(x){
    var somma = 0;
    for(var i = 0; i < x; i++){
      somma = somma + (x-1);
    }
    return somma;
  }

  function ifEven(word){
    debugger;
    word = pigWord(word);
    word = word.toLowerCase();
    var $even = $('<a>');
    $even.text(word);
    $even.val(word).attr('href', 'https://www.google.com/#q='+word+'');
    $even.css('color', 'rgb('+rand1()+','+rand1()+','+rand1()+')').css('background-color', 'rgb('+rand1()+','+rand1()+','+rand1()+')');
    $('#even').append($even);
    var $sum = $('<div>');
    var y = word.length;
    y = sum(y);
    $sum.text(y).css('color', 'rgb('+rand1()+','+rand1()+','+rand1()+')').css('background-color', 'rgb('+rand1()+','+rand1()+','+rand1()+')').css('float', 'right');
    $even.append($sum);
  }

  function ifOdd(word){
    var newWord = noVows(word);
    debugger;
    newWord = newWord.toUpperCase();
    var $odd = $('<a>');
    $odd.text(newWord);
    $odd.val(newWord).attr('href', 'https://www.google.com/#q='+word+'');
    $odd.css('color', 'rgb('+rand1()+','+rand1()+','+rand1()+')').css('background-color', 'rgb('+rand1()+','+rand1()+','+rand1()+')');
    $('#odd').append($odd);
  }

  //function getValue(){
    //setInterval(start, 1000);
  //}

  function getValue(){
    value = $('#input').val();
    value = value.replace(/,/g, '');
    value = value.replace(/\./g, '').split(' ');
    //value = value.split(' ');
    var word = value.splice(rand(), 1).join();
    if ((word.length) %2 === 0){
      ifEven(word);
    }else{
      ifOdd(word);
    }
    console.log(word);
  }

  function pigWord(word){
    debugger;
    var letter = word.charAt(0);
    var rest = word.substring(1);
    //var letter = newWord.slice(1);
    //
    //console.log(letter);
    //newWord = letter + newWord + 'a';
    word = rest + letter + 'a';
    return word;
  }

  function noVows(word){
    debugger;
    word = word.replace(/[aeiou]/ig,'');
    return word;
  }
  function rand1(){
    return Math.floor(Math.random() * random);
  }

  function rand(){
    return Math.floor(Math.random() * value.length);
  }

})();

