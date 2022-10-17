"use strict";
exports.__esModule = true;
exports.AddDictionary = void 0;
var data = [];
var readlineSync = require('readline-sync');
var AddDictionary = /** @class */ (function () {
    function AddDictionary() {
    }
    AddDictionary.prototype.addWord = function () {
        var word = readlineSync.question('What words would you like to add? ', {});
        var phonetic = readlineSync.question('What words would you like to add? ', {});
        var obj = { word: word, phonetic: phonetic };
        data.push(obj);
    };
    AddDictionary.prototype.addOrigin = function () {
        var origin = readlineSync.question('What words would you like to add? ', {});
        data.push(origin);
    };
    AddDictionary.prototype.show = function () {
        return data;
    };
    return AddDictionary;
}());
exports.AddDictionary = AddDictionary;
