/* global test,longestWord,squirrelParty,fibonacci,replaceZero, melt,meltAgain, startLastSix, ifUppercase, calcInterest, stndDev, variance, average, capVowels, pippo, pluto, deepEqual, appendIfOdd, ok, sumOfsquare, sum, diffOfsum: false  */

'use strict';

test('function#oddUppercase', function(){

  deepEqual(appendIfOdd('john', '117'), 'john117', ' welcome back chief');
  deepEqual(appendIfOdd('john', '17'), ' ', 'where is the chief?');
});

test('function#Sum', function(){

  ok(sum([3, 5, 7]) === 15, 'the sum of this 3 numbers is 15');
  ok(sum([3, 5, 7]) !== 16, 'the sum of this 3 numbers is not 16');
});

test('function#diffOfSum', function(){

  ok(diffOfsum([2, 3, 5], [6, 7, 8]) === -11, 'the difference is -11');
});

test('function#sumOfsquare', function(){

  ok(sumOfsquare([1, 2, 3, 4]) === 30, 'the sum of these square is 30');
});

test('function#sseqo', function(){

  deepEqual(pippo([2, 5, 4, 5]), 270, 'after all the shit we get 172');
});

test('function#sreco', function(){

  deepEqual(pluto([1, 2, 3, 4, 5, 6]), [1, 9, 25], 'after all the shit we get the new array');
});

test('function#capVowels', function(){

  deepEqual(capVowels('hello world'), 'hEllO wOrld', 'after all the shit we get the new strin');
});

test('function#average', function(){

  deepEqual(average([2,2,4,4]), 3, 'the average of these numbers should be 6');
});

test('function#variance', function(){

  deepEqual(variance([600,470,170,430,300]), 21704, 'the variance of these numbers should be 21.704');
});

test('function#stndDev', function(){

  deepEqual(stndDev([600,470,170,430,300]), 147, 'the the standard deviation of these numbers should be 147');
});

test('function#calcInterest', function(){

  deepEqual(calcInterest(100,10,60), 120, 'the final price of the item should be 120 bucks');
});

test('function#ifUppercase', function(){

  deepEqual(ifUppercase('ciao CIAo'), 'ciao ciao', 'the sentence should become lowercase');
  deepEqual(ifUppercase('Mamma Mia CHe FreddO CHe fA!'), 'mamma mia che freddo che fa!', 'the sentence should become lowercase');
});

test('function#startLastSix', function(){

  deepEqual(startLastSix([6,4,7,3]), true, 'the first or the last element of the array should be 6');
  deepEqual(startLastSix([3,4,7,6]), true, 'the first or the last element of the array should be 6');
  deepEqual(startLastSix([4,4,7,3]), false, 'the first or the last element of the array should be 6');
});

test('function#melt', function(){

  deepEqual(melt(['a','b','c','d'],[1,2,3,4]), ['a1','b2','c3','d4'], 'the new array should be melted');
});

test('function#meltAgain', function(){

  deepEqual(meltAgain(['a','b','c','d'],[1,2,3,4]), ['a',1,'b',2,'c',3,'d',4], 'the new array should be melted even more');
});

test('function#replaceZero', function(){

  deepEqual(replaceZero([1,3,0,4,0,0,7,8]), [1,3,4,7,8], 'the new array has no zeroes');
});

test('function#fibonacci', function(){

  deepEqual(fibonacci(32), 4613732 , 'the sum of ithe even numbers from this fibonacci sequence is 4.613.732');
});

test('function#squirrelParty', function(){

  deepEqual(squirrelParty(50, 'mon'), true , 'The squirrel party should be a succes!');
  deepEqual(squirrelParty(10, 'sun'), true , 'this party is good');
  deepEqual(squirrelParty(9, 'sun'), false , 'this party is soooo disappointing!');
});

test('function#longestWord', function(){

  deepEqual(longestWord('kristin and giovanni are in love'), 'giovanni' , 'The longest word in the sentence is giovanni');
});
