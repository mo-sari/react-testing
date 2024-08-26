import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

test("render one row per user", () => {
  // render the component
  const users = [
    {
      name: "ali",
      email: "ali@gmail.com",
    },
    {
      name: "hasan",
      email: "hasan@gmail.com",
    },
  ];
  render(<UserList users={users} />);
  //   find all the rows in the table
  //   screen.logTestingPlaygroundURL();
  // we use the previous line to get our html in browser
  // and it makes querying elements easier
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});
