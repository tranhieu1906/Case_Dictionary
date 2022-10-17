"use strict";
exports.__esModule = true;
var add_dictionary_1 = require("./add_dictionary");
var addDictionary = new add_dictionary_1.AddDictionary();
addDictionary.addWord();
addDictionary.addOrigin();
console.log(addDictionary.show());
