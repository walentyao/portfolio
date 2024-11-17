import { NavLink } from 'react-router-dom';
import { classNames } from 'primereact/utils';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  label?: string;
  path: string;
}
export const SidebarItem = ({
  path,
  label,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? classNames(cls.link, cls.isActive)
          : cls.link
      }
    >
      {label ?? '-'}
    </NavLink>
  );
};
