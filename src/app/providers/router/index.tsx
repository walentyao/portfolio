import { AppLayout } from '@layouts/AppLayout';
import { AppRoutes } from '@shared/types';
import {
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <AppLayout />,
    children: [
      {
        path: ':username',
        children: [
          {
            index: true,
            lazy: async () => {
              const { Main } = await import(
                '@pages/Main/Main'
              );
              return { Component: Main };
            },
          },
          {
            path: AppRoutes.RESUME,
            lazy: async () => {
              const { Main } = await import(
                '@pages/Main/Main'
              );
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
            path: AppRoutes.LIBRARY,
            lazy: async () => {
              const { Library } = await import(
                '@pages/Library/Library'
              );
              return { Component: Library };
            },
          },
          {
            path: AppRoutes.LINKS,
            lazy: async () => {
              const { Links } = await import(
                '@pages/Links/Links'
              );
              return { Component: Links };
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
          {
            path: AppRoutes.IND_SECTION,
            lazy: async () => {
              const { Ind } = await import(
                '@pages/Ind/Ind'
              );
              return { Component: Ind };
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={'/ru'} />,
  },
]);
