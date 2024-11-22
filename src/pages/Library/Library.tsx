import { LibraryResponse } from '@shared/mock/Vala';
import cls from './Library.module.scss';
import { Card } from 'primereact/card';

export const Library = () => {
  const data = LibraryResponse;
  return (
    <section aria-label="Library">
      <h3 className={cls.title}>
        Библиотека материалов по теме выпускной работы
      </h3>
      {data.map(link => (
        <Card className={cls.card}>
          <p className={cls.cardTitle}>{link.title}</p>
          <p className={cls.authors}>{link.authors}</p>
          <p>{link.description}</p>
          <p className={cls.authors}>{link.source}</p>
        </Card>
      ))}
    </section>
  );
};
Library.displaName = 'Library';
