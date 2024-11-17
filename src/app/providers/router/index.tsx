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
        path: AppRoutes.RESUME,
        lazy: async () => {
          const { Main } = await import('@pages/Main/Main');
          return { Component: Main };
        },
      },
      {
        path: AppRoutes.BIOGRAFY,
        lazy: async () => {
          const { Biography } = await import(
            '@pages/Biography/Biography'
          );
          return { Component: Biography };
        },
      },
      {
        path: AppRoutes.REFERAT,
        lazy: async () => {
          const { Referat } = await import(
            '@pages/Referat/Referat'
          );
          return { Component: Referat };
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
      {
        path: AppRoutes.REPORT_SEARCH,
        lazy: async () => {
          const { ReportSearch } = await import(
            '@pages/ReportSearch/ReportSearch'
          );
          return { Component: ReportSearch };
        },
      },
    ],
  },
]);
