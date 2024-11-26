export class Person {
  constructor(age, height) {
    this.age = age;
    this.height = height;
  }

  grow() {
    this.age += 1;
    this.height += 1;
  }
}
