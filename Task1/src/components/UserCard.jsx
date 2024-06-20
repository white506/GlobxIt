import React from 'react';
import '../styles/main.scss';

const UserCard = ({ user, onClick }) => {
  return (
    <div className="user-card" onClick={onClick}>
      <h2>{user.name}</h2>
      <p><i className="icon phone-icon"></i> {user.phone}</p>
      <p><i className="icon email-icon"></i> {user.email}</p>
    </div>
  );
};

export default UserCard;
