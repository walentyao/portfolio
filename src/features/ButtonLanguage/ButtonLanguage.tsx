import Ru from '/ru.png';
import Eng from '/eng.png';
import cls from './ButtonLanguage.module.scss';

import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { newLang } from '@shared/enums';

export const ButtonLanguage = () => {
  const { lg } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const changeLanguage = (newLang: newLang) => {
    const newPath = location.pathname.replace(
      /^\/[^/]+/,
      `/${newLang}`,
    );
    navigate(newPath);
  };
  return (
    <button
      className={cls.button}
      onClick={() => {
        changeLanguage(
          lg === newLang.RU ? newLang.ENG : newLang.RU,
        );
      }}
    >
      {lg === newLang.RU ? (
        <img src={Ru} alt="ru" className={cls.img} />
      ) : (
        <img src={Eng} alt="eng" className={cls.img} />
      )}
    </button>
  );
};
