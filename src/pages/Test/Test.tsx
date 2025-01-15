import { useContext } from 'react';
import cls from './Test.module.scss';
import { ContextUsername } from '@shared/context/username.context';

export const Test = () => {
  const username = useContext(ContextUsername);

  if (username === 'vanya') {
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
