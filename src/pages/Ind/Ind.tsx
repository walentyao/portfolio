import { user } from '@shared/mock';
import { ContextUsername } from '@shared/context/username.context';
import { useContext } from 'react';
import cls from './Ind.module.scss';

export const Ind = () => {
  const username = useContext(ContextUsername);
  const { PersonalLink } = user[username];
  const data = PersonalLink;
  return (
    <section aria-label="Ind" className={cls.ind}>
      <h3 className={cls.indTitle}>{data.title}</h3>
      {!(username === 'valentin') && (
        <video
          className={cls.indVideo}
          controls
          poster={data.preview}
        >
          <source src={data.video} type="video/mp4" />
        </video>
      )}
      {username === 'valentin' && (
        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=-150878424&id=456239173&hd=2&autoplay=1"
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
};
Ind.displaName = 'Ind';
