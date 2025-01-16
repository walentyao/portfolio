import cls from './Ind.module.scss';
import { Card } from 'primereact/card';

export const Ind = () => {
  return (
    <section aria-label="Ind" className={cls.ind}>
      <div className={cls.list}>
        <div className={cls.item}>
          <img src="/image3.png" alt="image" className={cls.image} />
          <Card title="Спорт: баскетбол, бокс, дзюдо">
            В настоящее время увлекаюсь конкретно баскетболом, но прежде в
            школьные годы занимался 5 лет борьбой (дзюдо) и 2 года боксом
          </Card>
        </div>
        <div className={cls.item}>
          <img src="/image4.png" alt="image" className={cls.image} />
          <Card title="Хобби: игра в шахматы, рисование">
            Люблю поиграть в шахматы: на 2-ом курсе бакалавриата в КубГУ на
            “неделе факультета” ФКТиПМ организовывал турнир по шахматам. Помимо
            этого, мне доставляет удовольствие изрисовывать картины по номерам,
            поскольку возникает иллюзия способности писать картины.
          </Card>
        </div>
        <div className={cls.item}>
          <img src="/image5.png" alt="image" className={cls.image} />
          <Card title="Неотъемлемая часть жизни: музыка">
            Музыка — это больше чем хобби. Она сопровождает меня во многих
            повседневных делах, так как наполняет жизненную рутину яркими
            красками. Предпочитаемые мной жанры: рок, металл, классика, фонк,
            фолк, стоит также отметить пристрастия к саундтрекам для фильмов,
            особенно написанных таким великим композитором, как Hans Zimmer.
          </Card>
        </div>
      </div>
    </section>
  );
};
Ind.displaName = 'Ind';
