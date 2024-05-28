import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation";

test("renders the main view", () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
