"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbesCollection_1 = require("./NumbesCollection");
var numbersCollection = new NumbesCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
