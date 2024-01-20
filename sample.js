"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericsTodo = void 0;
class Pair {
    constructor(_left, _right) {
        this._left = _left;
        this._right = _right;
    }
    get left() {
        return this._left;
    }
    get right() {
        return this._right;
    }
    set left(left) {
        this._left = left;
    }
    set right(right) {
        this._right = right;
    }
    toString() {
        return `(${this._left}, ${this._right})`;
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Person[name: ${this.name}, age: ${this.age}])`;
    }
}
const pair = new Pair("string", 123);
console.log(pair.toString());
console.log("" + pair);
const pair2 = new Pair("E11", new Person("nirav", 24));
console.log(pair2.toString());
// Todo
var GenericsTodo;
(function (GenericsTodo) {
    class Stack {
        constructor() {
            this.items = [];
        }
        add(item) {
            this.items.push(item);
        }
        remove() {
            const lastIndex = this.items.length - 1;
            const removedElement = this.items[lastIndex];
            this.items.pop();
            return removedElement;
        }
        print() {
            console.log("Stack:");
            this.items.forEach(item => console.log(item));
        }
    }
    GenericsTodo.Stack = Stack;
})(GenericsTodo || (exports.GenericsTodo = GenericsTodo = {}));
const stack = new GenericsTodo.Stack();
stack.add(10);
stack.add(20);
stack.add(30);
stack.print();
let removed = stack.remove();
console.log("Removed:", removed);
stack.print();
stack.add(40);
stack.print();
