import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithRedux from "./renderWithRedux";

describe("<App />", () => {
  it("should render header images", () => {
    renderWithRedux();
    const image = screen.getByRole("img", { name: /react logo/i });
    expect(image).toBeInTheDocument();
  });

  it("should render the title", () => {
    renderWithRedux();
    const title = screen.getByText(/Redux Toolkit/i);
    expect(title).toBeInTheDocument();
  });

  it("should render a disabled input", () => {
    renderWithRedux();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });

  it("should render two buttons to change the input value", () => {
    renderWithRedux();
    const btn1 = screen.getByRole("button", { name: /\+1/i });
    const btn2 = screen.getByRole("button", { name: /-1/i });
    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
  });

  it("should change the input value on click", () => {
    renderWithRedux();
    const input = screen.getByRole("textbox");
    const btn1 = screen.getByRole("button", { name: /\+1/i });
    const btn2 = screen.getByRole("button", { name: /-1/i });
    expect((input as HTMLInputElement).placeholder).toBe("0");
    userEvent.click(btn1);
    expect((input as HTMLInputElement).placeholder).toBe("1");
    userEvent.click(btn2);
    expect((input as HTMLInputElement).placeholder).toBe("0");
  });
});
