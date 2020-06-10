import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  return <View />;
};

export default Profile;
