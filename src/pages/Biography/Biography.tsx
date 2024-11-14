import classNames from 'classnames';
import cls from './Biography.module.scss';
import { biographyResponse } from '@shared/mock/main.data';

interface BiographyProps {}
export const Biography = () => {
  const data = biographyResponse;
  return (
    <section
      aria-label="biography"
      className={cls.biography}
    >
      {data.articles.map(article => (
        <article>{article}</article>
      ))}
    </section>
  );
};
