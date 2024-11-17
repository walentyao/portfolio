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

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'Современные веб-приложения играют важную роль в различных сферах деятельности, от бизнеса до повседневной жизни. Для обеспечения их надежности и эффективности необходимо своевременно выявлять ошибки, отслеживать их причины и анализировать метрики производительности. Актуальность темы заключается в возрастающей сложности веб-приложений и необходимости автоматизированных решений для их мониторинга и анализа. Данная работа посвящена разработке системы, способной собирать данные об ошибках и метриках производительности, визуализировать их и предоставлять рекомендации для оптимизации.',
  },
  {
    title: 'Обзор существующих решений и анализ проблемы',
    body: 'На сегодняшний день существует множество инструментов для мониторинга веб-приложений, таких как Sentry, New Relic и Prometheus. Однако большинство из них либо требуют значительных затрат на внедрение, либо сложны в настройке для небольших и средних проектов. Основная проблема заключается в интеграции разрозненных данных о производительности и ошибках в единую систему, доступную для анализа в реальном времени. В работе были выявлены ключевые ограничения существующих решений, что позволило обосновать необходимость разработки собственной системы, которая будет более гибкой и экономически эффективной.',
  },
  {
    title: 'Методология и подход к разработке',
    body: 'Разработка системы выполнялась в несколько этапов. Сначала был проведен сбор требований, который включал анализ потребностей целевой аудитории. Затем была выбрана архитектура на основе микросервисов для обеспечения масштабируемости. В качестве технологий для реализации использовались:Backend: Node.js с использованием Express.js.,Frontend: React для интерактивного пользовательского интерфейса,База данных: PostgreSQL для хранения аналитических данных,Системы мониторинга: Elasticsearch для логов, Grafana для визуализации метрик. Особое внимание уделялось реализации агентов для сбора данных из веб-приложений, которые интегрируются без значительных изменений в исходный код.',
  },
  {
    title: 'Результаты разработки и тестирования',
    body: 'Разработанная система включает модули для автоматического сбора ошибок, мониторинга производительности и построения аналитических отчетов. Тестирование системы проводилось на реальных веб-приложениях, что позволило оценить ее эффективность. Основные результаты:Уменьшение времени на диагностику ошибок на 40%,Повышение доступности данных о производительности в реальном времени,Интуитивно понятный интерфейс для анализа собранных данных.Система доказала свою пригодность для использования в коммерческих проектах и была успешно внедрена в тестовую среду.',
  },
  {
    title: 'Заключение и перспективы развития',
    body: 'В рамках магистерской работы была создана система, решающая ключевые проблемы мониторинга и анализа веб-приложений. Разработанное решение отличается гибкостью, простотой внедрения и экономической эффективностью. В будущем планируется добавить модули для прогнозирования сбоев на основе машинного обучения и расширить интеграции с популярными платформами разработки. Таким образом, система сможет адаптироваться к потребностям различных категорий пользователей, от разработчиков до бизнес-аналитиков.',
  },
];

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'Modern web applications play an important role in various fields of activity, from business to everyday life. To ensure their reliability and effectiveness, it is necessary to identify errors in a timely manner, track their causes and analyze performance metrics. The relevance of the topic lies in the increasing complexity of web applications and the need for automated solutions for their monitoring and analysis. This work is devoted to the development of a system capable of collecting error data and performance metrics, visualizing them and providing recommendations for optimization.',
  },
  {
    title:
      'Review of existing solutions and problem analysis',
    body: 'Today, there are many tools for monitoring web applications, such as Sentry, New Relic and Prometheus. However, most of them either require significant implementation costs or are difficult to set up for small and medium-sized projects. The main challenge is to integrate disparate performance and error data into a single system that is available for real-time analysis. The paper identified the key limitations of existing solutions, which allowed us to justify the need to develop our own system that will be more flexible and cost-effective.',
  },
  {
    title: 'Methodology and approach to development',
    body: 'The development of the system was carried out in several stages. First, a collection of requirements was carried out, which included an analysis of the needs of the target audience. Then, a microservices-based architecture was chosen to ensure scalability. The technologies used for implementation were:Backend: Node.js using Express.js .,Frontend: React for interactive user interface,Database: PostgreSQL for storing analytical data, Monitoring systems: Elasticsearch for logs, Grafana for visualization of metrics. Special attention was paid to the implementation of agents for collecting data from web applications that integrate without significant changes to the source code.',
  },
  {
    title: 'Development and testing results',
    body: 'The developed system includes modules for automatic error collection, performance monitoring and analytical reporting. The system was tested on real web applications, which allowed us to evaluate its effectiveness. Main results:Reducing error diagnosis time by 40%, Increasing the availability of real-time performance data, and an intuitive interface for analyzing the collected data.The system has proven its suitability for use in commercial projects and has been successfully implemented in a test environment.',
  },
  {
    title: 'Conclusion and development prospects',
    body: 'As part of the masters thesis, a system was created that solves key problems of monitoring and analyzing web applications. The developed solution is characterized by flexibility, ease of implementation and cost-effectiveness. In the future, it is planned to add modules for predicting failures based on machine learning and expand integration with popular development platforms. Thus, the system will be able to adapt to the needs of various categories of users, from developers to business analysts.',
  },
];

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'За долгие годы обучения в университете  удалось попробовать множество языков программирования, больше всех понравился js, в последствии чего и начал развиваться в эту сторону',
    },
    {
      title: 'Профессиональное становление',
      body: 'На 2 курсе начал изучать язык JavaScript. По окончанию обучения и пары неудачных попыток, наконец удалось устроиться на работу. После положительных отзовов начальников повысили до позиции middle и дали под крыло стажёра, которого нужно было привести в чувства. ',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'Хочется и дальше развиваться по карьерной лестнице в текущей компании, но также есть желание, открыть свою Web студию.',
    },
  ],
};
