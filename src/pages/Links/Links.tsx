import { Card } from 'primereact/card';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { user } from '@shared/mock';
import cls from './Links.module.scss';

const header = (
  <img
    alt="Card"
    src="https://primefaces.org/cdn/primereact/images/usercard.png"
  />
);

export const Links = () => {
  const username = useContext(ContextUsername);
  const { LinkResponse } = user[username];
  const data = LinkResponse;

  return (
    <section aria-label="Links" className={cls.links}>
      <p className={cls.title}>
        Техническая и справочная литература
        <div className={cls.cardList}>
          {data.literature.map(literatureItem => (
            <Card
              className={cls.cardItem}
              header={header}
              key={literatureItem.title}
            >
              <p className={cls.literatureTitle}>
                {literatureItem.title}
              </p>
              <p className={cls.literatureAuthor}>
                {literatureItem.authors}
              </p>
              <p>{literatureItem.description}</p>
            </Card>
          ))}
        </div>
      </p>
      <p className={cls.title}>
        Специализированные сайты и порталы
      </p>
      <div className={cls.cardList}>
        {data.saits.map(sait => (
          <Card
            className={cls.cardItem}
            header={header}
            key={sait.link}
          >
            <a href={sait.link} target="_blank">
              Ссылка
            </a>
            <p className={cls.link}>{sait.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
Links.displaName = 'Links';
