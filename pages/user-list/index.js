

import BackButton from '@/components/backbutton';
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data.data.data);
      console.log(data.data.data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
    setUsers(users.filter(user => user.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <BackButton/>
    
    <div>
      <h1 className='text-4xl text-white font-bold text-center' >Users (GET, DELETE, POST)</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="flex items-center my-4">
            <img src={user.picture} alt="user" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className='text-2xl text-white font-bold mr-8'>Name: {user.title} {user.firstName} {user.lastName}</p>
            </div>
            <button className="text-red-500 bg-danger btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Users;
