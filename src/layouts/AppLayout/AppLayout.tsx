import { Outlet } from 'react-router-dom';
import cls from './AppLayout.module.scss';
import { Sidebar } from '@widgets/Sidebar';

interface AppLayoutProps {}
export const AppLayout = ({}: AppLayoutProps) => {
  return (
    <>
      <div className={cls.app}>
        <Sidebar className={cls.appHeader} />
        <div className={cls.appPage}>
          <Outlet />
        </div>
      </div>
      <div className={cls.videoBackground}>
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/back.mp4"
            type="video/mp4"
          />
          Ваш браузер не поддерживает видео фон.
        </video>
        <div className={cls.overlay}></div>
      </div>
      <footer className={cls.footer}>Design by Walentyao</footer>
    </>
  );
};
