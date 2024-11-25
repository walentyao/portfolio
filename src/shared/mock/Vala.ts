import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  InboxIcon,
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
        {
          label: 'Телефон',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'Почта',
          icon: InboxIcon,
          text: 'example.com',
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
        {
          label: 'telephone',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'email',
          icon: InboxIcon,
          text: 'example.com',
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
export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase:
      'Разработка системы для отслеживания и анализа ошибок и метрик производительности веб-приложений',
    search: 'Google',
    countDocuments: '74300',
    link: 'https://www.google.ru/search?ie=UTF-8&q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%20%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA%20%D0%B8%20%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9',
  },
  {
    id: 2,
    search: 'Яндекс',
    countDocuments: '220000',
    link: 'https://yandex.ru/search/?text=%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D0%B4%D0%BB%D1%8F+%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B8+%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0+%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA+%D0%B8+%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA+%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9&lr=35&clid=2261451&win=565&src=suggest_Pers',
  },
  {
    id: 3,
    search: 'Bing',
    countDocuments: '34300',
    link: 'https://www.bing.com/search?q=Разработка%20системы%20для%20отслеживания%20и%20анализа%20ошибок%20и%20метрик%20производительности%20веб-приложений',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Гаркуша Олег Васильевич',
    search: 'Google',
    countDocuments: '25300',
    link: 'https://www.google.com/search?q=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&lr=lang_ru&sca_esv=4838b74728bc0d5d&sca_upv=1&as_qdr=all&tbs=lr%3Alang_1ru&sxsrf=ADLYWIIxhoeZuTCZlWzynz2DGLVdxQpq_A%3A1727029819663&ei=O2LwZoOWKJrXhbIPidKawQU&ved=0ahUKEwjDn6u3l9eIAxWaa0EAHQmpJlgQ4dUDCA8&uact=5&oq=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&gs_lp=Egxnd3Mtd2l6LXNlcnAiLNCT0LDRgNC60YPRiNCwINCe0LvQtdCzINCS0LDRgdC40LvRjNC10LLQuNGHMgUQIRigAUj5B1DMBFjMBHABeAGQAQCYAbEBoAGxAaoBAzAuMbgBA8gBAPgBAfgBApgCAqAC1AGoAhHCAgcQIxgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICHBAuGIAEGNEDGEMYtAIYxwEYyAMYigUY6gLYAQGYAxS6BgYIARABGAGSBwMxLjGgB5cC&sclient=gws-wiz-serp',
  },
  {
    id: 5,
    search: 'Яндекс',
    link: 'https://ya.ru/search/?text=%D0%B3%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%BE%D0%BB%D0%B5%D0%B3+%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&lr=35&within=0&lang=ru',
    countDocuments: '4010',
  },
  {
    id: 6,
    search: 'Bing',
    link: 'https://www.bing.com/search?q=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%B3%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%BE%D0%BB%D0%B5%D0%B3+%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&sc=0-23&sk=&cvid=CCD6BF62E1AD410FA18BB90546DB5DD0&ghsh=0&ghacc=0&ghpl=',
    countDocuments: '108000',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'Методы отслеживания ошибок веб-приложений',
    search: 'Google',
    countDocuments: '68100000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B%20%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9',
  },
  {
    id: 8,
    search: 'Яндекс',
    countDocuments: '1430000',
    link: 'https://ya.ru/search/?text=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%BE%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=131601',
  },
  {
    id: 9,
    search: 'Bing',
    countDocuments: '171000',
    link: 'https://www.bing.com/search?q=Методы%20отслеживания%20ошибок%20веб-приложений',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'ru',
    phrase: ' Отслеживание метрик веб-приложений',
    search: 'Google',
    countDocuments: '20900000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=%D0%9E%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9',
  },
  {
    id: 11,
    search: 'Яндекс',
    countDocuments: '54000',
    link: 'https://yandex.ru/search/?text=%D0%9E%D1%82%D1%81%D0%BB%D0%B5%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D0%BA+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=35',
  },
  {
    id: 12,
    search: 'Bing',
    countDocuments: '75100',
    link: 'https://www.bing.com/search?q=Отслеживание%20метрик%20веб-приложений',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'ru',
    phrase: 'Анализ ошибок веб-приложения ',
    search: 'Google',
    countDocuments: '77400000',
    link: 'https://www.google.ru/search?q=%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7+%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&newwindow=1&sca_esv=3f48a25a88a0a09a&sxsrf=ADLYWIKsCvxE68SDBztGU6mi9WCbqNV79g%3A1730158980044&ei=hCEgZ-yzAq2_i-gP1PGggQw&ved=0ahUKEwjshaS7oLKJAxWt3wIHHdQ4KMAQ4dUDCBA&uact=5&oq=%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7+%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&gs_lp=Egxnd3Mtd2l6LXNlcnAiNdCQ0L3QsNC70LjQtyDQvtGI0LjQsdC-0Log0LLQtdCxLdC_0YDQuNC70L7QttC10L3QuNGPMgUQIRigAUjuA1AAWABwAHgBkAEAmAGyAaABsgGqAQMwLjG4AQPIAQD4AQL4AQGYAgGgArUBmAMAkgcDMC4xoAeSAg&sclient=gws-wiz-serp',
  },
  {
    id: 14,
    search: 'Яндекс',
    countDocuments: '1320000',
    link: 'https://yandex.ru/search/?text=%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7+%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA+%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=35',
  },
  {
    id: 15,
    search: 'Bing',
    countDocuments: '142000',
    link: 'https://www.bing.com/search?q=Анализ+ошибок+веб-приложения&qs=n&form=QBRE&sp=-1&lq=0&pq=анализ+ошибок+веб-приложения&sc=0-28&sk=&cvid=FC2E9B2E35A4473F8A929A99058CE144&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 16,
    numberPhrase: 1,
    language: 'eng',
    phrase:
      'Development of a system for tracking and analyzing errors and performance metrics of web applications',
    search: 'Google',
    countDocuments: '294000000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=%D0%90%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%20%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA%20%D0%B2%D0%B5%D0%B1-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F',
  },
  {
    id: 17,
    search: 'Яндекс',
    countDocuments: '8000000',
    link: 'https://yandex.ru/search/?text=Development+of+a+system+for+tracking+and+analyzing+errors+and+performance+metrics+of+web+applications&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=35',
  },
  {
    id: 18,
    search: 'Bing',
    countDocuments: '62800',
    link: 'https://search.yahoo.com/search;_ylt=AwrLAvwdHCBnKQIAyjLLxgt.;_ylc=X1MDMjExNDcwMTAwMwRfcgMyBGZyA3NmcARmcjIDc2ItdG9wBGdwcmlkA0c1S2RoWUlaVEYyaUVxTFB3QnhHeUEEbl9yc2x0AzAEbl9zdWdnAzAEb3JpZ2luA3J1LnNlYXJjaC55YWhvby5jb20EcG9zAzAEcHFzdHIDBHBxc3RybAMwBHFzdHJsAzEwMQRxdWVyeQNEZXZlbG9wbWVudCUyMG9mJTIwYSUyMHN5c3RlbSUyMGZvciUyMHRyYWNraW5nJTIwYW5kJTIwYW5hbHl6aW5nJTIwZXJyb3JzJTIwYW5kJTIwcGVyZm9ybWFuY2UlMjBtZXRyaWNzJTIwb2YlMjB3ZWIlMjBhcHBsaWNhdGlvbnMEdF9zdG1wAzE3MzAxNTgwMzQ-?p=Development+of+a+system+for+tracking+and+analyzing+errors+and+performance+metrics+of+web+applications&fr=sfp&fr2=sb-top',
  },
  {
    id: 19,
    numberPhrase: 2,
    language: 'eng',
    phrase: 'Garkusha Oleg Vasilievich',
    search: 'Google',
    countDocuments: '2180',
    link: 'https://www.google.com/search?hl=ru&as_q=Garkusha+Oleg+Vasilievich&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 20,
    search: 'Яндекс',
    countDocuments: '100',
    link: 'https://ya.ru/search/?text=Garkusha+Oleg+Vasilievich&lr=35&within=0&lang=en',
  },
  {
    id: 21,
    search: 'Bing',
    countDocuments: '61000',
    link: 'https://www.bing.com/search?q=Garkusha+Oleg+Vasilievich&qs=n&form=QBRE&sp=-1&lq=0&pq=garkusha+oleg+vasilievich&sc=10-25&sk=&cvid=07D42394A8BB44CD942CA50AD219BBFC&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 22,
    numberPhrase: 3,
    language: 'eng',
    phrase: 'Methods for tracking Web application errors',
    search: 'Google',
    countDocuments: '1520000000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=Methods%20for%20tracking%20Web%20application%20errors',
  },
  {
    id: 23,
    search: 'Яндекс',
    countDocuments: '7800000',
    link: 'https://yandex.ru/search/?text=Methods+for+tracking+Web+application+errors&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=35',
  },
  {
    id: 24,
    search: 'Bing',
    countDocuments: '1730000',
    link: 'https://www.bing.com/search?q=Methods%20for%20tracking%20Web%20application%20errors',
  },
  {
    id: 25,
    numberPhrase: 4,
    language: 'eng',
    phrase: 'Tracking Web application metrics',
    search: 'Google',
    countDocuments: '2360000000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=Tracking%20Web%20application%20metrics',
  },
  {
    id: 26,
    search: 'Яндекс',
    countDocuments: '1123000',
    link: 'https://yandex.ru/search/?text=Tracking+Web+application+metrics&clid=2261451&banerid=0699000038%3ASW-d938d73bd9d6&win=565&lr=35',
  },
  {
    id: 27,
    search: 'Bing',
    countDocuments: '1960000',
    link: 'https://www.bing.com/search?q=Tracking%20Web%20application%20metrics',
  },
  {
    id: 28,
    numberPhrase: 5,
    language: 'eng',
    phrase: 'Web Application Error Analysis',
    search: 'Google',
    countDocuments: '1090000000',
    link: 'https://www.google.ru/search?ie=UTF-8&q=Web%20Application%20Error%20Analysis',
  },
  {
    id: 29,
    search: 'Яндекс',
    countDocuments: '5000000',
    link: 'https://yandex.ru/search/?text=Web+Application+Error+Analysis&lr=35&clid=2261451&win=565',
  },
  {
    id: 30,
    search: 'Bing',
    countDocuments: '3330000',
    link: 'https://www.bing.com/search?q=Choosing+the+best+algorithm&qs=n&form=QBRE&sp=-1&lq=0&pq=choosing+the+best+algorithm&sc=10-27&sk=&cvid=A8FA078A7F794C7B81A4734490D99A57&ghsh=0&ghacc=0&ghpl=',
  },
];

export const LibraryResponse = [
  {
    title:
      'Система мониторинга ошибок и метрик производительности веб-приложений',
    authors: 'Иван Иванов, Ольга Смирнова',
    description:
      'Данная работа описывает разработку системы, предназначенной для автоматического сбора, анализа и визуализации данных о производительности и ошибках веб-приложений. Основное внимание уделяется использованию инструментов логирования, аналитики и уведомлений для быстрого реагирования на инциденты.',
    source:
      "Журнал 'Информационные технологии и аналитика', выпуск №5, 2023",
  },
  {
    title:
      'Интегрированный подход к анализу ошибок и производительности веб-приложений',
    authors: 'Анна Кузнецова, Дмитрий Петров',
    description:
      'В статье представлен подход к созданию системы, которая позволяет разработчикам и администраторам отслеживать ключевые метрики производительности веб-приложений и оперативно выявлять критические ошибки. Рассматриваются методы интеграции с популярными платформами аналитики и облачными сервисами.',
    source:
      "Конференция 'Современные веб-технологии', 2024",
  },
];
export const LinkResponse = {
  literature: [
    {
      title:
        'Monitoring and Observability for Modern Web Applications',
      authors: 'Cindy Sridharan',
      description:
        'Книга подробно описывает подходы к мониторингу и наблюдаемости в веб-приложениях, включая использование метрик, журналов и трассировок для анализа производительности и ошибок.',
    },
    {
      title:
        'Site Reliability Engineering: How Google Runs Production Systems',
      authors:
        'Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff',
      description:
        'Эта книга рассказывает о принципах и практиках, используемых Google для построения надежных и производительных систем, включая инструменты для отслеживания ошибок и управления метриками.',
    },
    {
      title:
        'Practical Monitoring: Effective Strategies for the Real World',
      authors: 'Mike Julian',
      description:
        'Книга дает практическое руководство по настройке систем мониторинга и анализа производительности, описывает инструменты и процессы для быстрого обнаружения проблем и их устранения.',
    },
  ],
  saits: [
    {
      link: 'https://sentry.io',
      description:
        'Sentry — популярная платформа для мониторинга ошибок и производительности приложений. Предоставляет инструменты для обнаружения, анализа и устранения проблем в реальном времени.',
    },
    {
      link: 'https://grafana.com',
      description:
        'Grafana — платформа для визуализации и анализа метрик. Используется для построения дашбордов, отслеживания производительности и интеграции с системами мониторинга, такими как Prometheus и Loki.',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю Фонк и Дрифт',
  video: '/Реклама Apple Macintosh 1984.mp4',
  preview: '/images.jpg',
};

export default {
  mainResponseRu: mainResponseRu,
  mainResponseEng: mainResponseEng,
  referatResponseRu: referatResponseRu,
  referatResponseEng: referatResponseEng,
  biographyResponse: biographyResponse,
  reportSearchResponse: reportSearchResponse,
  LibraryResponse: LibraryResponse,
  LinkResponse: LinkResponse,
  PersonalLink: PersonalLink,
};
