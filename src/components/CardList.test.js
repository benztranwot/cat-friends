import renderer from "react-test-renderer";
import CardList from "./CardList";

test("expect to render Card component", () => {
  const mockCats = [
    {
      id: 1,
      name: "John Snow",
      email: "winter@is.coming",
      username: "JohnNorth",
    },
  ];
  const tree = renderer.create(<CardList cats={mockCats} />).toJSON();
  expect(tree).toMatchSnapshot();
});
