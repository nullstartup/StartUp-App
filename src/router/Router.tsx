import React, { useState } from 'react';
import { MainRouter } from './Main.Router';
import { AuthRouter } from './Auth.Router';
import { NavigationContainer } from '@react-navigation/native';

const Router = () => {
  const [user] = useState(null);

  return (
    <NavigationContainer>
      {user ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
