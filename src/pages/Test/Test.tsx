import { useContext } from 'react';
import cls from './Test.module.scss';
import { ContextUsername } from '@shared/context/username.context';

export const Test = () => {
  const username = useContext(ContextUsername);

  //   if (username === 'matvey') {
  //     return (

  //     );
  //   }
  //   if (username === 'valentin') {
  //     return <section className={cls.profile}></section>;
  //   }
  //   if (username === 'marko') {
  //     return <section className={cls.profile}></section>;
  //   }
  return (
    <>
      <script src="https://forms.yandex.ru/_static/embed.js"></script>
      <iframe
        className={cls.profile}
        src="https://forms.yandex.ru/u/6744b1d173cee7181a7b3a31/?iframe=1"
        frameborder="0"
        name="ya-form-6744b1d173cee7181a7b3a31"
        width="650"
      ></iframe>
    </>
  );
};

Test.displayName = 'Test';
