import React from 'react';
import UserCard from './UserCard';
import '../styles/main.scss';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
};

export default UserList;
