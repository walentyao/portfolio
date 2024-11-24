import { user } from '@shared/mock';
import cls from './Uemk.module.scss';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { Card } from 'primereact/card';
import { DocumentTextIcon } from '@heroicons/react/16/solid';

export const Uemk = () => {
  const username = useContext(ContextUsername);
  const { UemkResponse } = user[username];
  return (
    <section aria-label="uemk" className={cls.biography}>
      <h1 className={cls.uemkTitle}>
        Электронный учебно-методический комплекс
      </h1>
      <h2 className={cls.uemkTitleKurs}>
        {UemkResponse.titleKurs}
      </h2>
      <Card>
        <h3>Описание курса</h3>
        <p className={cls.uemkDesciption}>
          {UemkResponse.descriptionKurs}
        </p>
      </Card>
      <h2 className={cls.uemkTitleBlockKurs}>
        Лекции и материалы
        {UemkResponse.lectures.map((lecture, index) => (
          <Card className={cls.uemkLectureWrapper}>
            <div className={cls.uemkLecture}>
              <h4 className={cls.uemkLectureTitle}>
                Лекция {index + 1} {lecture.title}
              </h4>
              <div>
                <DocumentTextIcon
                  className={cls.uemkLectureIcon}
                />
                <a
                  href={lecture.pathDocument}
                  download={`Лекция${index + 1}.docx`}
                >
                  Скачать лекцию (Word)
                </a>
              </div>
            </div>
          </Card>
        ))}
      </h2>
      <h2 className={cls.uemkTitleBlockKurs}>
        Практические задания
      </h2>
      <h2 className={cls.uemkTitleBlockKurs}>
        Тестирование
      </h2>
      <h2 className={cls.uemkTitleBlockKurs}>
        Дополнительные материалы
      </h2>
    </section>
  );
};
Uemk.displaName = 'Uemk';
