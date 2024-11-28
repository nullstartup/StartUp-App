import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainRouter} from './Main.Router';
import {AuthRouter} from './Auth.Router';

const Router = () => {
  const [user] = useState(null);

  return (
    <NavigationContainer>
      {user ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};

export default Router;
