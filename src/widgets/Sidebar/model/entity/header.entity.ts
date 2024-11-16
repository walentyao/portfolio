import { AppRoutes } from '@shared/types';
import { HeaderItem } from '../types/header.types';

export const headerItems: HeaderItem[] = [
  { link: AppRoutes.RESUME, text: 'Резюме' },
  { link: AppRoutes.BIOGRAFY, text: 'Биография' },
  { link: AppRoutes.REFERAT, text: 'Реферат' },
  { link: AppRoutes.BIBLIOGRAPHY, text: 'Библиография' },
  { link: AppRoutes.LINKS, text: 'Cсылки' },
  { link: AppRoutes.REPORT_SEARCH, text: 'Отчет о поиске' },
];
