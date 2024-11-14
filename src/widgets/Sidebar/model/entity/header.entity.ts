import { AppRoutes } from '@shared/types';
import { HeaderItem } from '../types/header.types';

export const headerItems: HeaderItem[] = [
  { link: AppRoutes.MAIN, text: 'Резюме' },
  { link: AppRoutes.BIOGRAFY, text: 'Биография' },
  { link: AppRoutes.REFERAT, text: 'Реферат' },
  { link: AppRoutes.BIBLIOGRAPHY, text: 'Библиография' },
  { link: AppRoutes.LINKS, text: 'Cсылки' },
];
