import classNames from 'classnames';
import cls from './Sidebar.module.scss';
import { headerItems } from '@widgets/Sidebar/model';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { lang } from '@shared/enums';

interface SidebarProps {
  className?: string;
  CurrentLang: lang;
}

export const Sidebar = ({ className, CurrentLang }: SidebarProps) => {
  return (
    <nav className={classNames(cls.aside, {}, [className])}>
      {headerItems.map(
        item =>
          item.languages.includes(CurrentLang) && (
            <SidebarItem
              key={item.link}
              path={`${item.link}`}
              label={CurrentLang === lang.RU ? item.text : item.textEng}
            />
          ),
      )}
    </nav>
  );
};

Sidebar.displayName = 'Sidebar';
