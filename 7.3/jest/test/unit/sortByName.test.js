const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});
describe("Empty array test suit", () => {
  it("Empty array should be empty", () => {
    expect(
      sorting.sortByName([])
    ).toEqual([]);
  });
});

describe("Equal books names test suit", () => {
  it("Equal books names should be sorted in the same order", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Властелин Колец",
      ])
    ).toEqual([
      "Властелин Колец",
      "Властелин Колец",
    ]);
  });
});