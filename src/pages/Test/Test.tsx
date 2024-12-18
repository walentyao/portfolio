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
          frameBorder="0"
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
          frameBorder="0"
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
          frameBorder="0"
          name="ya-form-6744d1945d2a0670c2b0c0b3"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  if (username === 'adelina') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6745ba012530c2231ee266a8/?iframe=1"
          frameBorder="0"
          name="ya-form-6745ba012530c2231ee266a8"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  if (username === 'violetta') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/674764025056901760a87809/?iframe=1"
          frameBorder="0"
          name="ya-form-674764025056901760a87809"
          width="650"
          height="5500px"
        ></iframe>
      </div>
    );
  }
  if (username === 'dmitry') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/u/6750c00150569073f7a87815/?iframe=1"
          frameBorder="0"
          name="ya-form-6750c00150569073f7a87815"
          width="650"
        ></iframe>
      </div>
    );
  }
  return <>Такого теста нет</>;
};

Test.displayName = 'Test';
