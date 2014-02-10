/* exported Person */

var Person = (function(){
  'use strict';

  function Person(name, gender, age, weight){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.foods = [];
  }

  Object.defineProperty(Person.prototype, 'crazyString',{
    get: function(){
      debugger;
      var foods = _.uniq(this.foods).reverse();
      var newArray = _.map(foods, function(x){
        return x.name.length %2 === 0 ? x.name.toLowerCase() : x.name.toUpperCase();
      });
      return newArray.join('--');
    }
  });

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    var calories = food.caloriesPerServing * servings;
    var pounds = calories / 3500;
    this.weight += Math.round(pounds);
  };

  Person.prototype.exercise = function(x,y){
    var burnRate;
    switch(x){
      case 'Swim':
        burnRate = this.gender === 'Male' ? 900 : 700;
        break;
      case 'Run':
        burnRate = this.gender === 'Male' ? 700 : 500;
    }

    var calories = burnRate * (y/60);
    var pounds = calories/3500;
    this.weight -= Math.round(pounds);
  };


  return Person;
})();

