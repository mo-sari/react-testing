import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserList from "./UserList";

const renderComponent = () => {
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
  return users;
};

test("render one row per user", () => {
  const users = renderComponent();
  const { container } = render(<UserList users={users} />);
  const rows = container.querySelectorAll("tbody tr");
  expect(rows).toHaveLength(2);
});

test("render the name and email of each user", () => {
  const users = renderComponent();
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
