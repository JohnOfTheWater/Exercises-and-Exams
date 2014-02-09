(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#start').click(getText);
    $('#start').click(start);
  }

  var words = [];
  //var evenWord = '';
  //var oddWord = '';

  function getText(){
    debugger;
    words = $('#words').val();
    words = words.split(' ');
    console.log(words);
    pullRandomWord();
  }

  function rand(){
    return Math.floor(Math.random() * words.length);
  }
  
  function start(){
    setInterval(pullRandomWord, 1000);
  }

  function pullRandomWord(){
    debugger;
    var word = '';
    word = words.splice(rand(),1);
    console.log(word);
    var y = word.join();
    var yLength = y.length;
    var $even = $('<div>');
    var $odd = $('<div>');
     
    if (yLength %2 === 0){
      var latin = y.split('');
      var latinX = latin.shift();
      latin.push(latinX);
      latin = latin.toString();
      latin = latin.replace(',','');
      console.log(latin);
      y = y.toLowerCase();
      $even.css('background', 'blue').addClass('pari');
      $even.val(y);
      $even.text(y);
      $('#evens').append($even);
      var $evenL = $('<div>');
      //yLength = yLength+(yLength-1)+(yLength-2);
      $evenL.text(yLength*2).addClass('number1');
      $even.append($evenL);
    }
    if (yLength %2 !== 0){
      y = y.toUpperCase();
      $odd.css('background-color', 'green').addClass('dispari');
      $odd.val(y);
      $odd.text(y);
      $('#odds').append($odd);
      var $oddL = $('<div>');
      $oddL.text(yLength*3).addClass('number2');
      $odd.append($oddL);

    }
  }

  //function sum(yLength){
    //for (var i = 0; i<yLength; i++){
      //var result = 0;
      //var somma = result + (yLength - i);
      //return somma;
    //}
  //}

})();
