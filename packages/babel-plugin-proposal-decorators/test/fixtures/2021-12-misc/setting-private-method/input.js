class Foo {
  @dec #x() {}

  bar() {
    this.#x = 123;
  }
}
