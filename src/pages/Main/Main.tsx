import classNames from 'classnames';
import cls from './Main.module.scss';
import { mainResponse } from '@shared/mock/main.data';

interface MainProps {}
export const Main = ({}: MainProps) => {
  const data = mainResponse;
  return (
    <main className={cls.main}>
      <section className={cls.profile}>
        <img
          src={data.info.imageUrl}
          alt="avatar"
          className={cls.avatar}
        />
        <div className={cls.info}>
          <h3 className={classNames(cls.infoName, cls.infoTextName)}>
            {data.info.name}
          </h3>
          <p className={classNames(cls.infoText, cls.infoTextProfession)}>
            {data.info.profession}
          </p>
          <p className={cls.infoText}>{data.info.education}</p>
          <p className={cls.infoText}>{data.info.themeGraduationPaper}</p>
          <p className={cls.infoText}>{data.info.teacher}</p>
        </div>
      </section>
      <section className={cls.additional}>
        {data.aboutMe.map((item) => (
          <article
            key={item.title}
            className={cls.additionalItem}
          >
            <h3 className={cls.additionalItemTitle}>{item.title}</h3>
            <ul className={cls.list}>
              {item.items.map(({ icon: Icon, text, label }) => (
                <li
                  className={cls.listItem}
                  key={label}
                >
                  <div className={cls.listItemTitle}>
                    {Icon && <Icon className={cls.listIcon} />}
                    <span>{label} /</span>
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
};
