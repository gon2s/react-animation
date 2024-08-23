import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { FirstScreen, HomeScreen } from '../screens';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: 'first',
    element: <FirstScreen />,
  },
]);

export default AppRouter;
