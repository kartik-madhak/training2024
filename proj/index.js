"use strict";
var LinearStorage;
(function (LinearStorage) {
    class Stack2 {
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
        getItemsInOrder() {
            return [...this.items.reverse()];
        }
    }
    LinearStorage.Stack2 = Stack2;
})(LinearStorage || (LinearStorage = {}));
const stack = new LinearStorage.Stack2();
stack.add(10);
stack.add(20);
stack.add(30);
stack.add(40);
const stackDiv = document.getElementById("stack");
if (stackDiv) {
    stackDiv.innerHTML = stack.getItemsInOrder().reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue + ", ", "");
}
