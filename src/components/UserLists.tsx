import { useQuery } from '@apollo/client';
import { USERS_QUERY, UsersData } from '../apollo/query';
import { NextPage } from 'next';
import { User } from '../types';

interface UsersListProps {}

const UsersList: NextPage<UsersListProps> = () => {
  const { loading, error, data } = useQuery<UsersData>(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const users = data?.allUser || [];

  return (
    <>
        <div className="flex flex-wrap justify-center items-start">
        {users.map((user: User) => (
          <div key={user.uid} className="bg-slate-200 rounded-md border-2 border-gray-300 m-4 p-4">
              <p><span className='font-bold'>Username:</span> {user.username}</p>
              <p><span className='font-bold'>Email:</span> {user.email}</p>
              <p><span className='font-bold'>Password:</span> {user.password}</p>
              <p><span className='font-bold'>Text:</span> {user.text}</p>
              <p><span className='font-bold'>Avatar URL:</span> {user.avater}</p>
              <p><span className='font-bold'>Header URL:</span> {user.header}</p>
              <p><span className='font-bold'>Created At:</span> {user.createdAt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;

