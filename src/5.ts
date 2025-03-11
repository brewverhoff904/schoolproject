function randomTsCode(): string {
  const code = `
    console.log("Hello, world!");

    function add(a: number, b: number): number {
      return a + b;
    }

    let result = add(42, 13);
    console.log(result);
  `;

  return code;
}
