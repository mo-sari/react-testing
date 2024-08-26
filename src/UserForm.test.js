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
  // Not the best implementation
  // try to render the component
  const argList = [];
  const addArg = (...args) => {
    argList.push(args);
  };
  render(<UserForm addUser={addArg} />);
  // find the two elements
  const [nameInput, emailInput] = screen.getAllByRole("textbox");
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
  expect(argList).toHaveLength(1);
  console.log(argList);
  expect(argList[0][0]).toEqual({ name: "mohsen", email: "mohsen@gmail.com" });
});
