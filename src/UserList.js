const UserList = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>Name</tr>
        <tr>Email</tr>
      </thead>
      <tbody>
        {users.map((u) => {
          return (
            <tr key={u.name}>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
