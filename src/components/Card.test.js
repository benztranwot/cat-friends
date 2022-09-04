import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("has correct information display", () => {
  render(<Card id="1" name="John Snow" username="JohnNorth" email="winter@is.coming" />);
  expect(screen.getByRole("heading").textContent).toEqual("John Snow");
});
