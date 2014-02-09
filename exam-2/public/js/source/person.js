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

  Person.prototype.eat = function(food, servings){
    this.foods.push(food);
    var calories = food.caloriesPerServing * servings;
    var pounds = calories / 3500;
    this.weight += Math.round(pounds);
  };




  return Person;
})();
