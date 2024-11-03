import React from 'react';
import { Link } from 'react-router-dom';

function UserList({ users }) {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.username}
            <Link to={`/edituser/${user.id}`} className="btn btn-link">
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
