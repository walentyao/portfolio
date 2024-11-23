import { Outlet, useParams } from 'react-router-dom';
import cls from './AppLayout.module.scss';
import { Sidebar } from '@widgets/Sidebar';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ButtonLanguage } from '@features/ButtonLanguage/ButtonLanguage';
import { lang } from '@shared/enums';

export const AppLayout = () => {
  const { lg } = useParams();
  return (
    <ScrollPanel style={{ width: '100%', height: '100vh' }}>
      <div className={cls.app}>
        <div className={cls.appHeader}>
          <ButtonLanguage />
          <Sidebar CurrentLang={(lg as lang) || lang.RU} />
        </div>
        <div className={cls.appPage}>
          <Outlet />
        </div>
      </div>
      <footer className={cls.footer}>
        Design by Walentyao
      </footer>
    </ScrollPanel>
  );
};
