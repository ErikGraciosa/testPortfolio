import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';
import Pinball from './Pinball';
import Projects from './Projects';
import OpenSource from './OpenSource';
import Header from './blogDemoFiles/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/helloworld",
    element: <div>Hello World</div>,
  },
  {
    path: "/pinball",
    element: <Pinball/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/opensource",
    element: <OpenSource/>,
  },
]);

const sections = [
  { title: 'Projects', url: '/projects' },
  { title: 'Pinball', url: '/pinball' },
  { title: 'Open Source Contributions', url: '/opensource' },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Erik Graciosa" sections={sections} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);