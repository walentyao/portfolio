import { Card } from 'primereact/card';
import cls from './Biography.module.scss';
import { biographyResponse } from '@shared/mock/Violetta';

export const Biography = () => {
  const data = biographyResponse;
  return (
    <section
      aria-label="biography"
      className={cls.biography}
    >
      {data.articles.map((article, index) => (
        <Card
          key={index}
          title={article.title}
          className={cls.article}
        >
          <p className={cls.articleBody}>{article.body}</p>
        </Card>
      ))}
    </section>
  );
};
Biography.displaName = 'Biography';
