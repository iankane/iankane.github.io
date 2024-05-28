import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders the main view", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
