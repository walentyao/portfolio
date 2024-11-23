import { Outlet, useParams } from 'react-router-dom';
import cls from './AppLayout.module.scss';
import { Sidebar } from '@widgets/Sidebar';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ButtonLanguage } from '@features/ButtonLanguage/ButtonLanguage';
import { lang } from '@shared/enums';
import { ContextUsername } from '@shared/context/username.context';
import { UsernameType } from '@shared/types';

export const AppLayout = () => {
  const { lg, username } = useParams();

  if (
    !['matvey', 'valentin', 'violetta', 'marko'].includes(
      username as string,
    )
  )
    return null;
  return (
    <ContextUsername.Provider
      value={username as UsernameType}
    >
      <ScrollPanel
        style={{ width: '100%', height: '100vh' }}
      >
        <div className={cls.app}>
          <div className={cls.appHeader}>
            <ButtonLanguage />
            <Sidebar
              CurrentLang={(lg as lang) || lang.RU}
              username={username}
            />
          </div>
          <div className={cls.appPage}>
            <Outlet />
          </div>
        </div>
        <footer className={cls.footer}>
          Design by Walentyao
        </footer>
      </ScrollPanel>
    </ContextUsername.Provider>
  );
};
