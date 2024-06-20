import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserDetailsModal from './components/UserDetailsModal';
import './styles/main.scss';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000${searchTerm ? `?term=${searchTerm}` : ''}`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchTerm]);

  return (
    <div className="app">
      <SearchBar setSearchTerm={setSearchTerm} />
      <UserList users={users} onUserClick={setSelectedUser} />
      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default App;
