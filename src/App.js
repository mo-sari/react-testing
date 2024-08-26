import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <>
      <UserForm addUser={addUser}></UserForm>
      <hr></hr>
      <UserList users={users}></UserList>
    </>
  );
}

export default App;
