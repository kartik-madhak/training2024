class Pair<T, U> {
    constructor(private _left: T, private _right: U) {
    }

    get left(): T {
        return this._left;
    }

    get right(): U {
        return this._right;
    }

    set left(left: T) {
        this._left = left;
    }

    set right(right: U) {
        this._right = right;
    }

    toString(): string {
        return `(${this._left}, ${this._right})`;
    }
}

class Person {
    constructor(readonly name: string, readonly age: number) {
    }

    toString() {
        return `Person[name: ${this.name}, age: ${this.age}])`;
    }
}


const pair = new Pair<string, number>("string", 123);
console.log(pair.toString());
console.log("" + pair);


const pair2 = new Pair<string, Person>("E11", new Person("nirav", 24));
console.log(pair2.toString());

// Todo


export namespace GenericsTodo {
    interface LinearStorage<T> {
        add(item: T): void;

        remove(): T;

        print(): void;
    }

    export class Stack<T> implements LinearStorage<T> {
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

        print(): void {
            console.log("Stack:");
            this.items.forEach(item => console.log(item));
        }
    }
}

const stack = new GenericsTodo.Stack<number>();
stack.add(10);
stack.add(20);
stack.add(30);
stack.print();
let removed = stack.remove();
console.log("Removed:", removed);
stack.print();
stack.add(40);
stack.print();

