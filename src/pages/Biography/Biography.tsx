import cls from './Biography.module.scss';
import { biographyResponse } from '@shared/mock/Violetta';

export const Biography = () => {
  const data = biographyResponse;
  return (
    <section
      aria-label="biography"
      className={cls.biography}
    >
      {data.articles.map(article => (
        <article className={cls.article}>
          <h3>{article.title}</h3>
          <p className={cls.articleBody}>{article.body}</p>
        </article>
      ))}
    </section>
  );
};
Biography.displaName = 'Biography';
