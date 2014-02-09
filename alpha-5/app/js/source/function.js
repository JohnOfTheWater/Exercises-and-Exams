/* exported canDrink */

'use strict';

function canDrink(x){
  var result ='';
  if (x <= 17){
    result = 'no';
  }

  if (x >= 18 && x< 21){
    result = 'maybe';
  }
  
  if (x >= 21){
    result = 'yes';
  }
  return result;
}

