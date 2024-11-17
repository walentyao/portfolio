import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/16/solid';
import { Data } from '@shared/types';

export const mainResponseRu: Data = {
  info: {
    imageUrl: '/photo_2024-02-02_23-00-31.jpg',
    name: 'Ковачевич Марко Горан',
    profession: 'Frontend разработчик',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Разработка системы распределения  товаров на складе, автоматически определяющимся по эффективности алгоритмом',
    teacher: 'Гаркуша Олег Васильевич',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Ковачевич Марко Горан',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '13.08.2001',
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
          text: 'МБОУ СОШ №70 / 2008-2019',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'Лига Цифровой Экономики',
          icon: BriefcaseIcon,
          text: 'Старший разработчик, Frontend / 09.2024 - настоящее время',
        },
        {
          label: 'МТС',
          icon: AcademicCapIcon,
          text: 'Ведущий разработчик, Frontend / 08.2023 - 09.2024',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: 'TS React React-Native Redux RTKQuery ReactRouter Zustand Reactflow',
        },
        {
          label: 'Сборщики',
          text: 'Vite Webpack',
        },
        {
          label: 'Базы данных',
          text: 'PostgreSQL Oracle',
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
    imageUrl: '/photo_2024-02-02_23-00-31.jpg',
    name: 'Kovachevich Marko Goran',
    profession: 'Frontend developer',
    education:
      'Faculty of Computer Technologies and Applied Mathematics Department of Information Technologies Specialty “Applied Mathematics and Computer Science”',
    themeGraduationPaper:
      'Development of a system for the distribution of goods in a warehouse, automatically determined by the efficiency of the algorithm',
    teacher: 'Garkusha Oleg Vasilievich',
  },
  aboutMe: [
    {
      title: 'Personal information',
      items: [
        {
          label: 'FIO',
          icon: UserIcon,
          text: 'Kovachevich Marko Goran',
        },
        {
          label: 'Date of birth',
          icon: CalendarIcon,
          text: '13.08.2001',
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
          text: 'MBOU Secondary School No. 70 / 2008-2019',
        },
      ],
    },
    {
      title: 'Experience',
      items: [
        {
          label: 'Digital Economy League',
          icon: BriefcaseIcon,
          text: 'Middle Developer, Frontend / 09.2024 - present',
        },
        {
          label: 'MTS',
          icon: AcademicCapIcon,
          text: 'Senior Developer, Frontend / 08.2023 - 09.2024',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Skills and Specialization',
          text: 'TS React React-Native Redux RTKQuery ReactRouter Zustand Reactflow',
        },
        {
          label: 'Pickers',
          text: 'Vite Webpack',
        },
        {
          label: 'Databases',
          text: 'PostgreSQL Oracle',
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
      body: 'Я родился в Москве, и первые годы жизни прошли в этом динамичном, полным возможностей городе. Однако в детстве наша семья переехала в Краснодар. С самого детства мои родители играли огромную роль в моём развитии, поддерживая меня в любых начинаниях и поощряя интерес к знаниям.Значим фактором в моём становлении стал Университет где я нашёл товарищей по уму.',
    },
    {
      title: 'Профессиональное становление',
      body: 'С самого детства меня привлекала точность и логика математики. Я был из тех, кому нравилось решать задачи, разбираться в алгоритмах и находить ответы на сложные вопросы. Именно благодаря этому интересу к точным наукам я рано начал увлекаться программированием. Возможность создавать что-то с нуля, придумывать алгоритмы и видеть результаты своей работы на экране — всё это невероятно вдохновляло меня. В последствии чего я и стал Программистом',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'Моя цель — не только продолжить развитие в IT-сфере, но и стать профессионалом, способным вносить реальный вклад в индустрию. Я хочу углубить свои знания в таких областях, как искусственный интеллект, обработка данных и автоматизация процессов, так как вижу за этими направлениями будущее и огромный потенциал для инноваций. ',
    },
  ],
};
