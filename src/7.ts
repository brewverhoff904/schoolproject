function getRandomTsCode(): string {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Return the code based on the random number
  if (randomNumber <= 25) {
    return `console.log("Hello, World!");`;
  } else if (randomNumber <= 50) {
    return `const x = 5;`;
  } else if (randomNumber <= 75) {
    return `function add(a: number, b: number): number { return a + b; }`;
  } else {
    return `interface Person { name: string; age: number; }`;
  }
}
