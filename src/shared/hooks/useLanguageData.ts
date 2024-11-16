import {
  mainResponseEng,
  mainResponseRu,
} from '@shared/mock/Vala';
import { useParams } from 'react-router-dom';
import { newLang } from '@shared/enums';

export const useLanguageData = () => {
  const { lg } = useParams();
  const mainResponse =
    lg === newLang.RU ? mainResponseRu : mainResponseEng;
  return { mainResponse };
};
