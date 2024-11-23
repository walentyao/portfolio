import { useParams } from 'react-router-dom';
import { lang } from '@shared/enums';
import { user } from '@shared/mock';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';

export const useLanguageData = () => {
  const { lg } = useParams();
  const username = useContext(ContextUsername);
  const {
    mainResponseRu,
    mainResponseEng,
    referatResponseRu,
    referatResponseEng,
  } = user[username];

  const mainResponse =
    lg === lang.RU ? mainResponseRu : mainResponseEng;
  const referatResponse =
    lg === lang.RU ? referatResponseRu : referatResponseEng;
  return { mainResponse, referatResponse };
};
