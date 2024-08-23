import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  FifthScreen,
  FirstScreen,
  FourthScreen,
  HomeScreen,
  SecondScreen,
  SixthScreen,
  ThirdScreen,
} from '../screens';

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
  {
    path: 'fourth',
    element: <FourthScreen />,
  },
  {
    path: 'fifth',
    element: <FifthScreen />,
  },
  {
    path: 'sixth',
    element: <SixthScreen />,
  },
]);

export default AppRouter;
