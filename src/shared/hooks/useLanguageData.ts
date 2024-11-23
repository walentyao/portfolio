import {
  mainResponseEng,
  mainResponseRu,
  referatResponseRu,
  referatResponseEng,
} from '@shared/mock/Violetta';
import { useParams } from 'react-router-dom';
import { lang } from '@shared/enums';

export const useLanguageData = () => {
  const { lg } = useParams();
  const mainResponse =
    lg === lang.RU ? mainResponseRu : mainResponseEng;
  const referatResponse =
    lg === lang.RU ? referatResponseRu : referatResponseEng;
  return { mainResponse, referatResponse };
};
