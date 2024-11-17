import { render, screen } from "@testing-library/react";
import { Reservations } from './components/pages/Reservations/Reservations'

test("Renders the BookingForm heading", () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});
