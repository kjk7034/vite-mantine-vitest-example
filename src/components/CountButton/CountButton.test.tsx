import { describe, it, expect } from "vitest";

import { render, screen, fireEvent } from "../../utils/test";
import CountButton from "./CountButton";

describe("Button component", () => {
  it("renders CountButton component", () => {
    render(<CountButton />);

    // Check if the initial count is 0
    const countElement = screen.getByText(/count is 0/i);
    expect(countElement).toBeDefined();
  });

  it("increments count on button click", () => {
    render(<CountButton />);

    // Find the button and click it
    const buttonElement = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(buttonElement);

    // Check if the count is updated to 1
    const updatedCountElement = screen.getByText(/count is 1/i);
    expect(updatedCountElement).toBeDefined();
  });

  it("increments count on multiple button clicks", () => {
    render(<CountButton />);

    // Find the button and click it twice
    const buttonElement = screen.getByRole("button", { name: /count is 0/i });
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    // Check if the count is updated to 2
    const updatedCountElement = screen.getByText(/count is 2/i);
    expect(updatedCountElement).toBeDefined();
  });
});
