namespace LinearStorage {

    export class Stack2<T> {
        private items: T[] = [];

        constructor() {
        }

        add(item: T): void {
            this.items.push(item);
        }

        remove(): T {
            const lastIndex = this.items.length - 1;
            const removedElement: T = this.items[lastIndex];
            this.items.pop();
            return removedElement;
        }

        getItemsInOrder(): T[] {
            return [...this.items.reverse()];
        }
    }
}

const stack = new LinearStorage.Stack2<number>();
stack.add(10);
stack.add(20);
stack.add(30);
stack.add(40);

const stackDiv = document.getElementById("stack");
if (stackDiv) {
    stackDiv.innerHTML = stack.getItemsInOrder().reduce((previousValue, currentValue, currentIndex, array) => previousValue + currentValue + ", ", "");
}