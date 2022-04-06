import React from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import fetch from 'cross-fetch';

const useFetchUsers = () => {
  return useQuery('getUsers', async () => {
    const data = await fetch('http://localhost:3000/api/users');
    if (data.ok) {
      return data.json();
    }
    throw new Error('Request failed');
  });
};

const Users = () => {
  const { data } = useFetchUsers();
  return (
    <div>
      <Helmet>
        <title>Users page</title>
      </Helmet>
      Users page
      {data?.users.map((user, index) => {
        return <p key={index}>{user.name}</p>;
      })}
    </div>
  );
};

export default Users;
