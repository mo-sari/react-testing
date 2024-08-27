import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // Assertion - make sure the compnent is doning
  // what we excpet it to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("tries to mimic intering name and email and submitting the form", () => {
  const mock = jest.fn();
  // try to render the component
  render(<UserForm addUser={mock} />);
  // find the two elements
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  // simulate typing in a name
  user.click(nameInput);
  user.keyboard("mohsen");
  // simulate typing in an email
  user.click(emailInput);
  user.keyboard("mohsen@gmail.com");
  // find the button
  const button = screen.getByRole("button");
  // simulate clicking the button
  user.click(button);
  // assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "mohsen",
    email: "mohsen@gmail.com",
  });
});

test("empties the two inputs when form is submitted", () => {
  render(<UserForm addUser={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("jane");
  user.click(emailInput);
  user.keyboard("jane@jane.com");

  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
