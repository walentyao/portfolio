import classNames from 'classnames';
import cls from './Sidebar.module.scss';
import { headerItems } from '@widgets/Sidebar/model';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={classNames(cls.aside, {}, [className])}>
      {headerItems.map((item) => (
        <SidebarItem
          key={item.link}
          path={item.link}
          label={item.text}
        />
      ))}
    </aside>
  );
};

Sidebar.displayName = 'Sidebar';
