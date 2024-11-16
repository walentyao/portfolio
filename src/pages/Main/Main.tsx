import classNames from 'classnames';
import cls from './Main.module.scss';
import { useLanguageData } from '@shared/hooks/useLanguageData';

export const Main = () => {
  const { mainResponse } = useLanguageData();
  return (
    <main className={cls.main}>
      <section className={cls.profile}>
        <img
          src={mainResponse.info.imageUrl}
          alt="avatar"
          className={cls.avatar}
        />
        <div className={cls.info}>
          <h3
            className={classNames(
              cls.infoName,
              cls.infoTextName,
            )}
          >
            {mainResponse.info.name}
          </h3>
          <p
            className={classNames(
              cls.infoText,
              cls.infoTextProfession,
            )}
          >
            {mainResponse.info.profession}
          </p>
          <p className={cls.infoText}>
            {mainResponse.info.education}
          </p>
          <p className={cls.infoText}>
            {mainResponse.info.themeGraduationPaper}
          </p>
          <p className={cls.infoText}>
            {mainResponse.info.teacher}
          </p>
        </div>
      </section>
      <section className={cls.additional}>
        {mainResponse.aboutMe.map(item => (
          <article
            key={item.title}
            className={cls.additionalItem}
          >
            <h3 className={cls.additionalItemTitle}>
              {item.title}
            </h3>
            <ul className={cls.list}>
              {item.items.map(
                ({ icon: Icon, text, label }) => (
                  <li className={cls.listItem} key={label}>
                    <div className={cls.listItemTitle}>
                      {Icon && (
                        <Icon className={cls.listIcon} />
                      )}
                      <span>{label} /</span>
                    </div>
                    <span>{text}</span>
                  </li>
                ),
              )}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};

Main.displayName = 'Main';
