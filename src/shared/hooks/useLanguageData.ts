import {
  mainResponseEng,
  mainResponseRu,
} from '@shared/mock/Vala';
import { useParams } from 'react-router-dom';
import { lang } from '@shared/enums';

export const useLanguageData = () => {
  const { lg } = useParams();
  const mainResponse =
    lg === lang.RU ? mainResponseRu : mainResponseEng;
  return { mainResponse };
};
