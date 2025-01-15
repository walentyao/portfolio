import { user } from '@shared/mock';
import cls from './Uemk.module.scss';
import { useContext } from 'react';
import { ContextUsername } from '@shared/context/username.context';
import { Card } from 'primereact/card';
import { DocumentTextIcon } from '@heroicons/react/16/solid';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export const Uemk = () => {
  const username = useContext(ContextUsername);
  const { UemkResponse } = user[username];
  const navigate = useNavigate();
  return (
    <section aria-label="uemk" className={cls.biography}>
      <h1 className={cls.uemkTitle}>
        Электронный учебно-методический комплекс
      </h1>
      <h2 className={cls.uemkTitleKurs}>{UemkResponse.titleKurs}</h2>
      <Card className={cls.uemkDesciptionWrapper}>
        <h3>Описание курса</h3>
        <p className={cls.uemkDesciption}>{UemkResponse.descriptionKurs}</p>
      </Card>
      <h2 className={cls.uemkTitleBlockKurs}> </h2>
      Лекции и материалы
      {UemkResponse.lectures.map((lecture, index) => (
        <Card key={index} className={cls.uemkLectureWrapper}>
          <div className={cls.uemkLecture}>
            <h4 className={cls.uemkLectureTitle}>
              Лекция {index + 1} {lecture.title}
            </h4>
            <div>
              <DocumentTextIcon className={cls.uemkLectureIcon} />
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
      <h2 className={cls.uemkTitleBlockKurs}>Практические задания</h2>
      {UemkResponse.tasks.map((task, index) => (
        <Card key={index} className={cls.uemkLectureWrapper}>
          <div className={cls.uemkLecture}>
            <h4 className={cls.uemkLectureTitle}>
              Практическое задание {index + 1}
            </h4>
            <h5 className={cls.uemkLectureSubTitle}>{task.title}</h5>
            <div>
              <DocumentTextIcon className={cls.uemkLectureIcon} />
              <a href={task.pathDocument} download={`Задание${index + 1}.docx`}>
                Скачать задание Word
              </a>
            </div>
            <>
              <script src="https://forms.yandex.ru/_static/embed.js"></script>
              <iframe
                id="ifr"
                className={cls.sendDok}
                src="https://forms.yandex.ru/u/6742ffd85d2a06172cb0c0a2/?iframe=1"
                name="ya-form-6742ffd85d2a06172cb0c0a2"
                frameBorder="0"
              ></iframe>
            </>
          </div>
        </Card>
      ))}
      <Card className={cls.uemkLectureWrapper}>
        <div className={cls.uemkLecture}>
          <h4 className={cls.uemkLectureTitle}>Критерии оценки</h4>
          <h5 className={cls.uemkLectureSubTitle}>
            Критерии оценки практических занятий.
          </h5>
          <div>
            <DocumentTextIcon className={cls.uemkLectureIcon} />
            <a href={UemkResponse.kriteri} download={`Критерии оценки.docx`}>
              Скачать критерии Word
            </a>
          </div>
        </div>
      </Card>
      <h2 className={cls.uemkTitleBlockKurs}>Тестирование</h2>
      <Card className={cls.uemkLectureWrapper}>
        <div className={cls.uemkLecture}>
          <h4 className={cls.uemkLectureTitle}>Тестирование</h4>
          <Button
            size="small"
            severity="success"
            onClick={() => navigate(`/ru/${username}/test`)}
          >
            Начать тестирование
          </Button>
        </div>
      </Card>
      <h2 className={cls.uemkTitleBlockKurs}>Дополнительные материалы</h2>
      {UemkResponse.dopMatireals.map((material, index) => (
        <Card key={index} className={cls.uemkLectureWrapper}>
          <div className={cls.uemkLecture}>
            <h4 className={cls.uemkLectureTitle}>{material.title}</h4>
            <p> {material.description}</p>
            <a href={material.link} target="_blank">
              Ссылка на материалы
            </a>
          </div>
        </Card>
      ))}
      <p className={cls.authour}>Автор: {UemkResponse.authour}</p>
      <div className={cls.block}></div>
    </section>
  );
};
Uemk.displaName = 'Uemk';
