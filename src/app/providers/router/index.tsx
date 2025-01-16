import { AppLayout } from '@layouts/AppLayout';
import { AppRoutes } from '@shared/types';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to={'ru/vanya'} />,
      },
      {
        path: AppRoutes.MAIN,
        children: [
          {
            index: true,
            element: <Navigate to={'vanya'} />,
          },
          {
            path: ':username',
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
                  const { Referat } = await import('@pages/Referat/Referat');
                  return { Component: Referat };
                },
              },
              {
                path: AppRoutes.LIBRARY,
                lazy: async () => {
                  const { Library } = await import('@pages/Library/Library');
                  return { Component: Library };
                },
              },
              {
                path: AppRoutes.LINKS,
                lazy: async () => {
                  const { Links } = await import('@pages/Links/Links');
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
                  const { Ind } = await import('@pages/Ind/Ind');
                  return { Component: Ind };
                },
              },
              {
                path: AppRoutes.UEMK,
                lazy: async () => {
                  const { Uemk } = await import('@pages/Uemk/Uemk');
                  return { Component: Uemk };
                },
              },
              {
                path: AppRoutes.TEST,
                lazy: async () => {
                  const { Test } = await import('@pages/Test/Test');
                  return { Component: Test };
                },
              },
            ],
          },
        ],
      },
    ],
  },
]);
