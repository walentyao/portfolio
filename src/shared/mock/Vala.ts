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
    imageUrl: '/photo_2023-12-27_15-15-42.jpg',
    name: 'Матюха Валентин Владимирович',
    profession: 'Frontend разработчик',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Разработка системы для отслеживания и анализа ошибок и метрик производительности веб-приложений.',
    teacher: 'Гаркуша Олег Васильевич',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Матюха Валентин Владимирович',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '25.02.2001',
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
          text: 'МБОУ СОШ №48 / 2008-2019',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'МТС',
          icon: BriefcaseIcon,
          text: 'Ведущий разработчик, Frontend / 03.2024 - настоящее время',
        },
        {
          label: 'Россети Кубань',
          icon: AcademicCapIcon,
          text: 'Ведущий инженер-программист / 09.2023 - 03.2024',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: 'TS React Redux RTKQuery ReactRouter Zustand Reactflow NodeJS NestJS',
        },
        {
          label: 'Сборщики',
          text: 'Vite Webpack',
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
    imageUrl: '/photo_2023-12-27_15-15-42.jpg',
    name: 'Matyukha Valentin Vladimirovich',
    profession: 'Frontend developer',
    education:
      'Faculty of Computer Technologies and Applied Mathematics Department of Information Technologies Specialty “Applied Mathematics and Computer Science”',
    themeGraduationPaper:
      'Development of a system for tracking and analyzing errors and performance metrics of web applications.',
    teacher: 'Garkusha Oleg Vasilievich',
  },
  aboutMe: [
    {
      title: 'Personal information',
      items: [
        {
          label: 'FIO',
          icon: UserIcon,
          text: 'Matyukha Valentin Vladimirovich',
        },
        {
          label: 'Date of birth',
          icon: CalendarIcon,
          text: '25.02.2001',
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
          text: 'MBOU Secondary School No. 48 / 2008-2019',
        },
      ],
    },
    {
      title: 'Experience',
      items: [
        {
          label: 'MTS',
          icon: BriefcaseIcon,
          text: 'Lead Developer, Frontend / 03.2024 - present',
        },
        {
          label: 'Rosseti Kuban',
          icon: AcademicCapIcon,
          text: 'Leading Software Engineer / 09.2023 - 03.2024',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Technology stack',
          text: 'TS React Redux RTKQuery ReactRouter Zustand Reactflow NodeJS NestJS',
        },
        {
          label: 'Pickers',
          text: 'Vite Webpack',
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

export const biographyResponseRu = {
  articles: [
    {
      title: 'Личностное становление',
      body: '',
    },
    {
      title: 'Профессиональное становление',
      body: '',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: '',
    },
  ],
};

export const biographyResponseEng = {
  articles: [
    {
      title: 'Personal development',
      body: '',
    },
    {
      title: 'Professional development',
      body: '',
    },
    {
      title: 'Goals, plans and vision for the future',
      body: '',
    },
  ],
};
