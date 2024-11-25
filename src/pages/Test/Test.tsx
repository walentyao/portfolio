import { useContext } from 'react';
import cls from './Test.module.scss';
import { ContextUsername } from '@shared/context/username.context';

export const Test = () => {
  const username = useContext(ContextUsername);

  if (username === 'matvey') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6744b1d173cee7181a7b3a31/?iframe=1"
          frameborder="0"
          name="ya-form-6744b1d173cee7181a7b3a31"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  if (username === 'valentin') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6744cba573cee71dfa7b3a12/?iframe=1"
          frameborder="0"
          name="ya-form-6744cba573cee71dfa7b3a12"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  if (username === 'marko') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6744d1945d2a0670c2b0c0b3/?iframe=1"
          frameborder="0"
          name="ya-form-6744d1945d2a0670c2b0c0b3"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  return <>Такого теста нет</>;
};

Test.displayName = 'Test';
