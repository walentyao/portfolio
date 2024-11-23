import classNames from 'classnames';
import cls from './Sidebar.module.scss';
import { headerItems } from '@widgets/Sidebar/model';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { lang } from '@shared/enums';

interface SidebarProps {
  className?: string;
  CurrentLang: lang;
  username?: string;
}

export const Sidebar = ({
  className,
  CurrentLang,
  username,
}: SidebarProps) => {
  return (
    <aside
      className={classNames(cls.aside, {}, [className])}
    >
      {headerItems.map(
        item =>
          item.languages.includes(CurrentLang) && (
            <SidebarItem
              key={item.link}
              path={`${username}/${item.link}`}
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
