import { AppLayout } from '@layouts/AppLayout';
import { Biography } from '@pages/Biography/Biography';
import { Ind } from '@pages/Ind/Ind';
import { Library } from '@pages/Library/Library';
import { Links } from '@pages/Links/Links';
import { Main } from '@pages/Main/Main';
import { Referat } from '@pages/Referat/Referat';
import { ReportSearch } from '@pages/ReportSearch/ReportSearch';
import { Test } from '@pages/Test/Test';
import { Uemk } from '@pages/Uemk/Uemk';
import { AppRoutes } from '@shared/types';
import { createHashRouter, Navigate } from 'react-router-dom';

export const router = createHashRouter(
  [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Navigate to={'ru/patokov'} />,
        },
        {
          path: AppRoutes.MAIN,
          children: [
            {
              index: true,
              element: <Navigate to={'patokov'} />,
            },
            {
              path: ':username',
              element: <AppLayout />,
              children: [
                {
                  index: true,
                  element: <Main />,
                },
                {
                  path: AppRoutes.RESUME,
                  element: <Main />,
                },
                {
                  path: AppRoutes.BIOGRAFY,
                  element: <Biography />,
                },
                {
                  path: AppRoutes.REFERAT,
                  element: <Referat />,
                },
                {
                  path: AppRoutes.LIBRARY,
                  element: <Library />,
                },
                {
                  path: AppRoutes.LINKS,
                  element: <Links />,
                },
                {
                  path: AppRoutes.REPORT_SEARCH,
                  element: <ReportSearch />,
                },
                {
                  path: AppRoutes.IND_SECTION,
                  element: <Ind />,
                },
                {
                  path: AppRoutes.UEMK,
                  element: <Uemk />,
                },
                {
                  path: AppRoutes.TEST,
                  element: <Test />,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  { basename: '/portfolio' },
);
