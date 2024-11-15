import { Outlet } from 'react-router-dom';
import cls from './AppLayout.module.scss';
import { Sidebar } from '@widgets/Sidebar';
import { ScrollPanel } from 'primereact/scrollpanel';

interface AppLayoutProps {}
export const AppLayout = ({}: AppLayoutProps) => {
  return (
    <ScrollPanel
      style={{ width: '100%', height: '100vh' }}
      className="custombar1"
    >
      <p>
        <div className={cls.app}>
          <Sidebar className={cls.appHeader} />
          <div className={cls.appPage}>
            <Outlet />
          </div>
        </div>
        <footer className={cls.footer}>
          Design by Walentyao
        </footer>
      </p>
    </ScrollPanel>
  );
};
