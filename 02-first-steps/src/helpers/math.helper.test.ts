import { describe, expect, test } from "vitest";
import { add, multiply, substract } from "./math.helper";

describe("add", () => {
  test("Should add two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;
    // 2. Act
    const result = add(a, b);
    // 3. Assert
    expect(result).toBe(a + b);
  });
});

describe("substract", () => {
  test("Should substract two positive numbers", () => {
    // 1. Arrange
    const a = 3;
    const b = 2;
    // 2. Act
    const result = substract(a, b);
    // 3. Assert
    expect(result).toBe(a - b);
  });
});

describe("multiply", () => {
  test("Should multiply two positive numbers", () => {
    // 1. Arrange
    const a = 1;
    const b = 2;
    // 2. Act
    const result = multiply(a, b);
    // 3. Assert
    expect(result).toBe(a * b);
  });
});
