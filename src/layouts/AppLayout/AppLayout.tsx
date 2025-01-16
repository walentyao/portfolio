import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Sidebar } from '@widgets/Sidebar';
import { ButtonLanguage } from '@features/ButtonLanguage/ButtonLanguage';
import { lang } from '@shared/enums';
import { ContextUsername } from '@shared/context/username.context';
import { UsernameType } from '@shared/types';
import { useTitle } from '@shared/hooks/useTitle';
import cls from './AppLayout.module.scss';

export const AppLayout = () => {
  const { lg, username } = useParams();
  useTitle(username as string);

  if (!['ru', 'eng'].includes(lg as string)) return <Navigate to={'/ru'} />;

  if (lg && !['vanya'].includes(username as string))
    return <Navigate to={`/${lg}/vanya`} />;

  return (
    <ContextUsername.Provider value={username as UsernameType}>
      <div className={cls.app}>
        <div className={cls.appHeader}>
          <ButtonLanguage />
          <Sidebar CurrentLang={(lg as lang) || lang.RU} />
        </div>
        <div className={cls.appPage}>
          <Outlet />
        </div>
      </div>
      <footer className={cls.footer}>Design by Walentyao</footer>
    </ContextUsername.Provider>
  );
};
