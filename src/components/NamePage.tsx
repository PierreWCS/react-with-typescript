import { useState, useEffect } from 'react';
import { TextField } from './TextField';
import { UserProfile } from './UserProfile';
import { User } from './interfaces/user';

export const NamePage: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', age: null });

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <TextField user={user} setUser={setUser} />
      <UserProfile user={user.name} />
    </div>
  );
};
