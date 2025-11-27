import { describe, test, expect } from "vitest";
import { FirstStepsApp } from "./FirstStepsApp";
import { render } from "@testing-library/react";

describe("FirstStepsApp", () => {
  test("Should match snapshot", () => {
    const { container } = render(<FirstStepsApp />);
    expect(container).toMatchSnapshot();
  });
});
