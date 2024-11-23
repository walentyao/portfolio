import { PersonalLink } from '@shared/mock/Violetta';
import cls from './Ind.module.scss';

export const Ind = () => {
  const data = PersonalLink;
  return (
    <section aria-label="Ind" className={cls.ind}>
      <h3 className={cls.indTitle}>{data.title}</h3>
      <video
        className={cls.indVideo}
        controls
        poster={data.preview}
      >
        <source src={data.video} type="video/mp4" />
      </video>
    </section>
  );
};
Ind.displaName = 'Ind';
