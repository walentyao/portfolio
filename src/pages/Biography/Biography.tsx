import { Card } from 'primereact/card';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { user } from '@shared/mock';
import cls from './Biography.module.scss';

export const Biography = () => {
  const username = useContext(ContextUsername);
  const { biographyResponse } = user[username];
  const data = biographyResponse;
  return (
    <section aria-label="biography" className={cls.biography}>
      {data.articles.map((article, index) => (
        <div className={cls.articleWrapper}>
          <img src={article.src} alt="image" className={cls.image} />
          <Card key={index} title={article.title} className={cls.article}>
            <p className={cls.articleBody}>{article.body}</p>
          </Card>
        </div>
      ))}
    </section>
  );
};
Biography.displaName = 'Biography';
