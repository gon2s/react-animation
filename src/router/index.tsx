import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { FirstScreen, HomeScreen, SecondScreen, ThirdScreen } from '../screens';

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
  {
    path: 'third',
    element: <ThirdScreen />,
  },
]);

export default AppRouter;
