import Ru from '/ru.png';
import Eng from '/eng.png';
import cls from './ButtonLanguage.module.scss';

import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { lang } from '@shared/enums';
import { AppRoutes } from '@shared/types';

export const ButtonLanguage = () => {
  const { lg, username } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const changeLanguage = (newLang: lang) => {
    const newPath = location.pathname.replace(
      /^\/[^/]+/,
      `/${newLang}`,
    );
    if (
      newPath.includes(AppRoutes.REFERAT) ||
      newPath.includes(AppRoutes.RESUME) ||
      newPath.includes(AppRoutes.REPORT_SEARCH)
    ) {
      navigate(newPath);
    } else {
      navigate(
        `/${newLang}/${username}/${AppRoutes.REFERAT}`,
      );
    }
  };
  return (
    <button
      className={cls.button}
      onClick={() => {
        changeLanguage(lg === lang.RU ? lang.ENG : lang.RU);
      }}
    >
      {lg === lang.RU ? (
        <img src={Ru} alt="ru" className={cls.img} />
      ) : (
        <img src={Eng} alt="eng" className={cls.img} />
      )}
    </button>
  );
};
