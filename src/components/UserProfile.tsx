import React from 'react';

export const UserProfile: React.FC<{ userName: string }> = ({ userName }) => {
  return <p>Hello {userName} !</p>;
};
