import { fireEvent, render, screen } from "@testing-library/react";
import BookFrontPage from "./components/BookFrontPage";
import BookingForm from "./components/BookingForm";

test("Renders the BookFrontPage", () => {
  render(<BookFrontPage />);
  const submitBtn = screen.getByText("Make Reservation");
  expect(submitBtn).toBeInTheDocument();
});

test("Updates the time correctly", () => {
  render(<BookFrontPage />);
  const dateSelector = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelector, { target: { value: "2023-02-05" } });
  const timeDropDown = screen.getByLabelText(/Choose date/);
  fireEvent.change(timeDropDown, { target: { value: "17:00" } });
  expect(timeDropDown.value).toEqual("17:00");
});