import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";

const cats = [
  {
    id: 1,
    name: "John Snow",
    email: "winter@is.coming",
    username: "JohnNorth",
  },
  {
    id: 2,
    name: "Clay Wall",
    email: "clay@wall",
    username: "Clay",
  },
  {
    id: 3,
    name: "Laura Wall",
    email: "laura@wall",
    username: "Laura",
  },
];

const mockData = {
  cats,
  onRequestCats: () => cats,

  isPending: false,
  searchField: "",
};

test("show loading when pending", () => {
  render(<MainPage {...mockData} isPending={true} />);
  expect(screen.getByRole("heading").textContent).toEqual("Loading");
});

test("show cats filtered", () => {
  render(<MainPage {...mockData} searchField="Wall" />);
  expect(screen.getAllByTestId("card").length).toEqual(2);
});
