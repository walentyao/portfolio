import { AppRoutes } from '@shared/types';
import { HeaderItem } from '../types/header.types';
import { lang } from '@shared/enums';

export const headerItems: HeaderItem[] = [
  {
    link: AppRoutes.RESUME,
    text: 'Резюме',
    textEng: 'Resume',
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
    textEng: 'Abstract',
    languages: [lang.RU, lang.ENG],
  },
  {
    link: AppRoutes.LIBRARY,
    text: 'Библиотека',
    languages: [lang.RU],
  },
  {
    link: AppRoutes.LINKS,
    text: 'Cсылки',
    languages: [lang.RU],
  },
  {
    link: AppRoutes.REPORT_SEARCH,
    text: 'Отчет о поиске',
    textEng: 'Search report',
    languages: [lang.RU, lang.ENG],
  },
  {
    link: AppRoutes.IND_SECTION,
    text: 'Индивидуальный раздел',
    languages: [lang.RU],
  },
  {
    link: AppRoutes.UEMK,
    text: 'ЭУМК',
    languages: [lang.RU],
  },
];
