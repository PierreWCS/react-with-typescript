import React from 'react';
import { User } from './interfaces/user';

export const TextField: React.FC<{ user: User; setUser: React.Dispatch<React.SetStateAction<User>> }> = ({ user, setUser }) => {
  const handleChangeName = (userName: string) => {
    setUser({ ...user, name: userName });
  };

  return <input type="text" onChange={(event) => handleChangeName(event.target.value)} value={user.name} />;
};
