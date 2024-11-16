import { AppRoutes } from '@shared/types';
import { HeaderItem } from '../types/header.types';
import { lang } from '@shared/enums';

export const headerItems: HeaderItem[] = [
  {
    link: AppRoutes.RESUME,
    text: 'Резюме',
    languages: [lang.RU, lang.ENG],
  },
  {
    link: AppRoutes.BIOGRAFY,
    text: 'Биография',
    languages: [lang.RU],
  },
  {
    link: AppRoutes.REFERAT,
    text: 'Реферат',
    languages: [lang.RU, lang.ENG],
  },
  {
    link: AppRoutes.BIBLIOGRAPHY,
    text: 'Библиография',
    languages: [lang.RU],
  },
  { link: AppRoutes.LINKS, text: 'Cсылки', languages: [] },
  {
    link: AppRoutes.REPORT_SEARCH,
    text: 'Отчет о поиске',
    languages: [lang.RU],
  },
];
