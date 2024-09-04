import { within, screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });
  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("mohsen");
  user.click(emailInput);
  user.keyboard("mohsen@gmail.com");

  user.click(button);

  const entry = await screen.findByRole("row", {
    name: /mohsen mohsen@gmail\.com/i,
  });

  expect(entry).toBeInTheDocument();
});
