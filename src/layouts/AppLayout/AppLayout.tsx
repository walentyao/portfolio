import { Outlet } from 'react-router-dom';
import cls from './AppLayout.module.scss';
import { Sidebar } from '@widgets/Sidebar';
import { ScrollPanel } from 'primereact/scrollpanel';
import { ButtonLanguage } from '@features/ButtonLanguage/ButtonLanguage';

export const AppLayout = () => {
  return (
    <ScrollPanel
      style={{ width: '100%', height: '100vh' }}
      className="custombar1"
    >
      <div className={cls.app}>
        <div className={cls.appHeader}>
          <ButtonLanguage />
          <Sidebar />
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
