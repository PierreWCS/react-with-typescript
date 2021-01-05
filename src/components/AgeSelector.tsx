import React from 'react';
import { User } from './interfaces/user';

export const AgeSelector: React.FC<{ user: User; setUser: React.Dispatch<React.SetStateAction<User>> }> = ({ user, setUser }) => {
  const handleChangeAge = (userAge: number) => {
    setUser({ ...user, age: userAge });
  };
  return (
    <div>
      <input type="number" onChange={(event) => handleChangeAge(Number(event.target.value))} />
      {user.age && <p>You are {user.age} years old</p>}
    </div>
  );
};
