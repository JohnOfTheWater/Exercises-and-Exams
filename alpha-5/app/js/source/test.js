/* global test:false, canDrink: false, deepEqual: false */

'use strict';

test('function#canDrink', function(){

  deepEqual(canDrink(7), 'no' ,' should not drink');
  deepEqual(canDrink(18), 'maybe' ,'maybe');
  deepEqual(canDrink(21), 'yes' ,'lets drink some booze!!!');
});

