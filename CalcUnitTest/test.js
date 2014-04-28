//Unit testing 16 passing 4 for each +_*/
var expect = require("chai").expect;

var assert = require('chai').assert;

var should = require('chai').should();

var tags = require("../app.js");

describe("adding", function(){

   	it("adds positive plus positive", function(){
   	   var one = 1;
   	   var two = 2;

       expect(one+two).to.equal(3);
   });

it("adds negative plus positive", function(){
   	   var negone = -1;
   	   var two = 2;

       expect(negone+two).to.equal(1);
   });
   
   it("adds positive and negative", function(){
   	   var one = 1;
   	   var negtwo = -2;

       expect(one+negtwo).to.equal(-1);
   });
   
   it("negative plus negative", function(){
   	   var negone = -1;
   	   var negthree = -3;

       expect(negone+negthree).to.equal(-4);
   });
   
   
});


describe("subtracting", function(){
   	it("substract positive minus positive", function(){
   	   var two = 2;
   	   var one = 1;

       expect(two-one).to.equal(1);
   });

it("substract negative minus negative", function(){
   	   var negthree = -3;
   	   var negtwo = -2;

       expect(negthree-negtwo).to.equal(-1);
   });
   
   it("substract negative minus positive", function(){
   	   var negthree = -3;
   	   var one = 1;

       expect(negthree-one).to.equal(-4);
   });
   
   it("substract positive minus negative", function(){
   	   var three = 3;
   	   var negtwo = -2;

       expect(three-negtwo).to.equal(5);
   });
   
   
});

describe("multiplication", function(){
   	it("multiply positive times positive", function(){
   	   var two = 2;
   	   var three = 3;

       expect(two * three).to.equal(6);
   });

it("multiply negative times negative", function(){
   	   var negone = -1;
   	   var negtwo = -2;

       expect(negone * negtwo).to.equal(2);
   });
   
   it("multiply positive times negative", function(){
   	   var two = 2;
   	   var negthree = -3;

       expect(two * negthree).to.equal(-6);
   });
   
 it("multiply negative times positive", function(){
   	   var negtwo = -2;
   	   var three = 3;

       expect(negtwo * three).to.equal(-6);
   });
   
   
});

describe("divide", function(){
   	it("positive divided by positive", function(){
   	   var ten = 10;
   	   var two = 2;

       expect(ten/two).to.equal(5);
   });

   it("negative divided by negative", function(){
   	   var negsix = -6;
   	   var negtwo = -2;

       expect(negsix / negtwo).to.equal(3);
   });

it("positive divided by negative", function(){
   	   var four = 4;
   	   var negtwo = -2;

       expect(four/negtwo).to.equal(-2);
   });
   

   it("negative divided by positive", function(){
   	   var negfour = -4;
   	   var two = 2;

       expect(negfour/ two).to.equal(-2);
   });
   
   
});

