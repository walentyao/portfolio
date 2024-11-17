import { Data } from '@shared/types';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

export const mainResponseRu: Data = {
  info: {
    imageUrl: '/PXL_20240614_191937666.NIGHT.jpg',
    name: 'Акулов Матвей Сергеевич',
    profession: 'Team Lead',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Безопасность веб приложений и борьба с уязвимостями',
    teacher: 'Подколзин Вадим Владиславович',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Акулов Матвей Сергеевич',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '26.02.2001',
        },
        {
          label: 'Место проживания',
          icon: MapPinIcon,
          text: 'г. Краснодар',
        },
      ],
    },
    {
      title: 'Образование',
      items: [
        {
          label: 'Магистратура',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2023-2025',
        },
        {
          label: 'Бакалавриат',
          icon: AcademicCapIcon,
          text: 'КубГУ, Прикладная математика и информатика / 2019-2023',
        },
        {
          label: 'Среднее общее',
          icon: AcademicCapIcon,
          text: 'МБОУ СОШ №13 станица Медведовская/ 2008-2019',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'Т1',
          icon: BriefcaseIcon,
          text: 'Lead Java Backend 04.2024 - настоящее время',
        },
        {
          label: 'РОВИ Тех',
          icon: AcademicCapIcon,
          text: 'Middle Java разработчик / 09.2023 - 04.2024',
        },
        {
          label: 'Keepcode',
          icon: AcademicCapIcon,
          text: 'Middle Java разработчик / 08.2022 - 08.2023',
        },
        {
          label: 'Нейродев',
          icon: AcademicCapIcon,
          text: 'Middle Java разработчик / 08.2020 - 08.2023',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: ' Java SOLID JDBC MVC Java SE Java EE Spring Framework Kubernetes Docker Redis Apache Tomcat RabbitMQ',
        },

        {
          label: 'Базы данных',
          text: 'PostgreSQL Oracle MongoDB',
        },
        {
          label: 'Контроль версий',
          text: 'Git GitLab GitHub',
        },
      ],
    },
  ],
};
export const mainResponseEng: Data = {
  info: {
    imageUrl: '/PXL_20240614_191937666.NIGHT.jpg',
    name: 'Akulov Matvey Sergeevich',
    profession: 'Team Lead',
    education:
      'Faculty of Computer Technologies and Applied Mathematics Department of Information Technologies Specialty “Applied Mathematics and Computer Science”',
    themeGraduationPaper:
      'Web application security and vulnerability management',
    teacher: 'Podkolzin Vadim Vladislavovich',
  },
  aboutMe: [
    {
      title: 'Personal information',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Akulov Matvey Sergeevich',
        },
        {
          label: 'Date of birth',
          icon: CalendarIcon,
          text: '26.02.2001',
        },
        {
          label: 'Place of residence',
          icon: MapPinIcon,
          text: 'town Krasnodar',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          label: 'Education',
          icon: AcademicCapIcon,
          text: 'KubSU, Applied mathematics and computer science / 2023-2025',
        },
        {
          label: 'Bachelor degree',
          icon: AcademicCapIcon,
          text: 'KubSU, Applied mathematics and computer science / 2019-2023',
        },
        {
          label: 'Average total',
          icon: AcademicCapIcon,
          text: 'MBOU Secondary school No.13 Medvedovskaya village/ 2008-2019',
        },
      ],
    },
    {
      title: 'Experience',
      items: [
        {
          label: 'Т1',
          icon: BriefcaseIcon,
          text: 'Lead Java Backend 04.2024 - present',
        },
        {
          label: 'Rovi Tech',
          icon: AcademicCapIcon,
          text: 'Middle Java developer / 09.2023 - 04.2024',
        },
        {
          label: 'Keepcode',
          icon: AcademicCapIcon,
          text: 'Middle Java developer / 08.2022 - 08.2023',
        },
        {
          label: 'Neyrodev',
          icon: AcademicCapIcon,
          text: 'Middle Java developer / 08.2020 - 08.2023',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Technology stack',
          text: ' Java SOLID JDBC MVC Java SE Java EE Spring Framework Kubernetes Docker Redis Apache Tomcat RabbitMQ',
        },
        {
          label: 'Databases',
          text: 'PostgreSQL Oracle MongoDB',
        },
        {
          label: 'Version control',
          text: 'Git GitLab GitHub',
        },
      ],
    },
  ],
};

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'В процессе работы я постепенно понял, что главное в роли лидера — не быть начальником, а становиться опорой для каждого члена команды.Когда я начинал свой путь в профессии, мысль о том, что однажды стану лидером команды, казалась мне далёкой и почти недостижимой, но всё получилось.',
    },
    {
      title: 'Профессиональное становление',
      body: 'На 2 курсе начал изучать язык джава. Спустя год обучения и пары неудачных попыток, наконец удалось устроиться на работу. К этому времени у меня уже сформировалось техническое обслуживание мышление и повышенная концентрация',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'Сейчас я работаю тимлидом в компании Т1. В ближайшем будущем планирую стать техлидом. А спустя 2 года открыть свой бизнес',
    },
  ],
};
