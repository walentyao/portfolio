import classNames from 'classnames';
import cls from './Sidebar.module.scss';
import { headerItems } from '@widgets/Sidebar/model';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { lang } from '@shared/enums';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { AppRoutes } from '@shared/types';

interface SidebarProps {
  className?: string;
  CurrentLang: lang;
}

export const Sidebar = ({
  className,
  CurrentLang,
}: SidebarProps) => {
  const username = useContext(ContextUsername);
  return (
    <aside
      className={classNames(cls.aside, {}, [className])}
    >
      {headerItems.map(
        item =>
          item.languages.includes(CurrentLang) &&
          (username === 'violetta'
            ? item.link !== AppRoutes.UEMK
            : true) && (
            <SidebarItem
              key={item.link}
              path={`${item.link}`}
              label={
                CurrentLang === lang.RU
                  ? item.text
                  : item.textEng
              }
            />
          ),
      )}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
