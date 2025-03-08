function greet(name: string): void {
    console.log("Hello " + name);
}

let myNumber = 123456789;

// A function that takes two numbers and returns their sum
const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(1, 2)); // Outputs 3

// An interface for a person with a name and age
interface Person {
    name: string;
    age: number;
}

let user: Person = {
    name: "John Doe",
    age: 30
};
