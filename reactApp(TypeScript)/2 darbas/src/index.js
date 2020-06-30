var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName);
console.log("----------------");
var printMyName = function (name, age) {
    console.log(name, age);
};
printMyName("Max", 28);
var multiply = function (number) { return number * 2; };
console.log(multiply(2));
console.log("----------------");
var Human = /** @class */ (function () {
    function Human() {
        this.gender = "male";
    }
    Human.prototype.printGender = function () {
        console.log(this.gender);
    };
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        var _this = _super.call(this) || this;
        _this.name = "Max";
        _this.gender = "female";
        return _this;
    }
    Person.prototype.printMyName = function () {
        console.log(this.name);
    };
    return Person;
}(Human));
var person = new Person();
person.printMyName(); // Max
person.printGender(); // Female
console.log("----------------");
var Zmogus = /** @class */ (function () {
    function Zmogus() {
        var _this = this;
        this.gender = "vaikinas";
        this.printGender = function () {
            console.log(_this.gender);
        };
    }
    return Zmogus;
}());
var Asmenybe = /** @class */ (function (_super) {
    __extends(Asmenybe, _super);
    function Asmenybe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Maksas";
        _this.gender = "mergina";
        _this.printMyName = function () {
            console.log(_this.name);
        };
        return _this;
    }
    return Asmenybe;
}(Zmogus));
var asmenybe = new Asmenybe();
asmenybe.printMyName(); // Maksas
asmenybe.printGender(); // mergina
console.log("----------------");
var numbers = [1, 2, 3];
var newNumbers = __spreadArrays(numbers, [4]);
console.log(newNumbers);
var personn = {
    name: "Max"
};
var newPersonn = __assign(__assign({}, personn), { age: 28 });
console.log(newPersonn);
var filter = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (el) { return el === 1; });
};
console.log(filter(1, 2, 3));
console.log("----------------");
var numberss = [1, 2, 3];
var num1 = numberss[0], num3 = numberss[2];
console.log(num1, num3);
console.log("----------------");
var personnn = {
    name: "Max"
};
var secondPerson = __assign({}, personnn);
person.name = "Manu";
console.log(secondPerson);
console.log("----------------");
var numbersss = [1, 2, 3];
var doubleNumArray = numbersss.map(function (num) {
    return num * 2;
});
console.log(numbersss);
console.log(doubleNumArray);
