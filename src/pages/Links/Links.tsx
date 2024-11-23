import { Card } from 'primereact/card';
import cls from './Links.module.scss';
import { LinkResponse } from '@shared/mock/Violetta';

const header = (
  <img
    alt="Card"
    src="https://primefaces.org/cdn/primereact/images/usercard.png"
  />
);

export const Links = () => {
  const data = LinkResponse;
  return (
    <section aria-label="Links">
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
            <a href={sait.link}>Ссылка</a>
            <p className={cls.link}>{sait.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
Links.displaName = 'Links';
