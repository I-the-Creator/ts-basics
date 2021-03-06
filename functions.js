"use strict";
exports.__esModule = true;
exports.getNameTwo = exports.getName = exports.introduce = exports.fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a + b;
}
exports["default"] = addNumbers;
var addStrings = function (str1, str2) {
    if (str2 === void 0) { str2 = ""; }
    return "".concat(str1, " ").concat(str2);
}; // function with default value
exports.addStrings = addStrings;
var format = function (title, param) { return "".concat(title, " ").concat(param); }; //  UNITY type of variable
exports.format = format;
var printFormat = function (title, param) {
    console.log((0, exports.format)(title, param));
};
exports.printFormat = printFormat;
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); }; // type of Promise
exports.fetchData = fetchData;
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(' '));
}
exports.introduce = introduce;
function getName(user) {
    return "".concat(user.firstName, " ").concat(user.lastName);
}
exports.getName = getName;
function getNameTwo(user) {
    var _a, _b;
    return "".concat((_a = user === null || user === void 0 ? void 0 : user.firstName) !== null && _a !== void 0 ? _a : 'first', " ").concat((_b = user === null || user === void 0 ? void 0 : user.lastName) !== null && _b !== void 0 ? _b : 'last'); //    'null coalescing operator'  helps to avoid undefined values after compilation
}
exports.getNameTwo = getNameTwo;
