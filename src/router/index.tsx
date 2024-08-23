import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { FirstScreen, HomeScreen, SecondScreen } from '../screens';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: 'first',
    element: <FirstScreen />,
  },
  {
    path: 'second',
    element: <SecondScreen />,
  },
]);

export default AppRouter;
