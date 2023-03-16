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
      {users.map((user: User) => (
        <div>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
          <p>password: {user.password}</p>
          <p>text: {user.text}</p>
        </div>
      ))}
    </>
  );
};

export default UsersList;
