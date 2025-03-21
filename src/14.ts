class MyClass {
  constructor(public id: number) {}

  updateData() {
    console.log("Updating data");
  }
}

const myInstance = new MyClass(1);
myInstance.updateData();
