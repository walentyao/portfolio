import { AppLayout } from '@layouts/AppLayout';
import { AppRoutes } from '@shared/types';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <AppLayout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
      {
        path: AppRoutes.BIOGRAFY,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
      {
        path: AppRoutes.REFERAT,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
      {
        path: AppRoutes.BIBLIOGRAPHY,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
      {
        path: AppRoutes.LINKS,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
    ],
  },
]);
