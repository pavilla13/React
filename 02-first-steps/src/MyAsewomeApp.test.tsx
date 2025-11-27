import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAsewomeApp";

describe("MyAsewomeApp", () => {
  test("Should render firstName and lastName", () => {
    const { container } = render(<MyAwesomeApp />);
    render(<MyAwesomeApp />);
    screen.debug();
    const h1 = container.querySelector("h1");
    expect(h1?.innerHTML).toBe("Pablo");
  });

  test("Should render firstName and lastName - screen", () => {
    render(<MyAwesomeApp />);
    screen.debug();
    const h1 = screen.getAllByRole("heading");
    //console.log(h1);
  });

  test("Should match snapshot", () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });
});
