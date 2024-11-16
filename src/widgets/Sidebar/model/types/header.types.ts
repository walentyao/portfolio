import { lang } from '@shared/enums';
import { AppRoutes } from '@shared/types';

export interface HeaderItem {
  link: AppRoutes;
  text: string;
  languages: lang[];
}
