import React from 'react';

export const UserProfile: React.FC<{ user: string }> = ({ user }) => {
  return <p>Bonsoir {user}</p>;
};
