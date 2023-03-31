import { fireEvent, render, screen } from "@testing-library/react";

import BookingForm from "../BookingForm";
test("Renders the BookFrontPage", () => {
    render(<BookFrontPage />);
    const submitBtn = screen.getByText("Make Reservation");
    expect(submitBtn).toBeInTheDocument();
  });
