import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
  test("Should render with default values", () => {});

  test("Should render with custom quantity", () => {
    const name = "Test item";
    const quantity = 10;
    render(<ItemCounter name={name} quantity={quantity} />);
    expect(screen.getByText(quantity)).toBeDefined();
  });

  test("Should decrease count when -1 button is pressed", () => {
    const quantity = 5;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);
    const [buttonSubs] = screen.getAllByRole("button");
    fireEvent.click(buttonSubs);
    expect(screen.getByText("4")).toBeDefined();
  });

  test("Should not decrease count when -1 button is pressed and quantity is 1", () => {
    const quantity = 1;
    render(<ItemCounter name={"Test item"} quantity={quantity} />);
    const [buttonSubs] = screen.getAllByRole("button");
    fireEvent.click(buttonSubs);
    expect(screen.getByText("1")).toBeDefined();
  });

  test("Should increase count when +1 button is pressed", () => {
    render(<ItemCounter name={"Test item"} quantity={1} />);
    const [, buttonAdd] = screen.getAllByRole("button");
    fireEvent.click(buttonAdd);
    expect(screen.getByText("2")).toBeDefined();
  });
});
