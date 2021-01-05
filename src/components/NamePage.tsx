import { useState, useEffect } from 'react';
import { TextField } from './TextField';
import { UserProfile } from './UserProfile';
import { User } from './interfaces/user';
import { AgeSelector } from './AgeSelector';

export const NamePage: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', age: null });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <h3>What's your name ?</h3>
      <TextField user={user} setUser={setUser} />
      {user.name.length > 0 && <UserProfile userName={user.name} />}
      <h3>How old are you ?</h3>
      <AgeSelector user={user} setUser={setUser} />
    </div>
  );
};
