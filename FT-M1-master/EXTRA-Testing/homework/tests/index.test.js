const {
  checkSeatStatus,
  getRowNumber,
  book,
  summaryLayout,
} = require("../homework");

describe("Checking checkSeatStatus", () => {
  it("Should return if checkSeatStatus is a function", () => {
    expect(typeof checkSeatStatus).toBe("function");
  });

  it("Should return throw TypeError if the  First parameter is not a string.", () => {
    expect(() => checkSeatStatus(1)).toThrow(
      new TypeError("First parameter must be a string.")
    );
  });

  it("Should return throw TypeError if the Second parameter is not a number.", () => {
    expect(() => checkSeatStatus("A", "1")).toThrow(
      new TypeError("Second parameter is not a number.")
    );
  });

  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 1)).toBe(true);
  });

  it("should return true if the given seat defined by row and column is booked", () => {
    expect(checkSeatStatus("A", 3)).toBe(false);
  });
});

describe("Testing function getRowNumber", () => {
  it("Should return 0 if the letter is A", () => {
    expect(getRowNumber("A")).toBe(0);
  });

  it("Should return 1 if the letter is B", () => {
    expect(getRowNumber("B")).toBe(1);
  });

  it("Should return 2 if the letter is C", () => {
    expect(getRowNumber("C")).toBe(2);
  });
});

describe("Testing function book", () => {
  it("Should return the message Seat in A1 is already booked", () => {
    expect(book("A", 1)).toBe("Seat in A1 is already booked");
  });

  it("Should return the Seat in A0 successfully booked", () => {
    expect(book("A", 0)).toBe("Seat in A0 successfully booked");
  });
});

describe("Testing function book", () => {
  let obj = {
    total_seat: 20,
    total_free: 11,
    total_booked: 9,
  };

  it("Should return total seats", () => {
    expect(summaryLayout().totalSeats).toEqual(obj.total_seat);
  });
});
