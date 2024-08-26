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
  const { container } = render(<UserList users={users} />);
  //   container is a div that is covering all the html
  // created by our component and it's created by default
  // we can check that in logTestingPlaygroundURL();

  //   find all the rows in the table

  //   in previous solution we had to change our source-code
  // solely for the purpose of testing, if that is not what you want:
  const rows = container.querySelectorAll("tbody tr");
  //   tbody tr => is a regular css selector, you might want to search for that.

  // assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});
