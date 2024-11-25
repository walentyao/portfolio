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

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'Effective warehouse management is a critical element of modern logistics, which determines the speed of order fulfillment, cost optimization and the level of customer service. The development of a system capable of automatically distributing goods in a warehouse, taking into account the most efficient algorithm, becomes an innovative solution. Such an implementation makes it possible to reduce the influence of the human factor, increase the accuracy of placement and reduce costs, which is especially important in conditions of high demands on the efficiency and scalability of warehouse processes.',
  },
  {
    title: 'Principles of the goods distribution system',
    body: 'The distribution system is based on the collection and analysis of data on the characteristics of the warehouse, types of goods, the frequency of their movement and the needs of customers. The key component is an algorithm that adapts to current working conditions and chooses the most effective approach to product placement. The automation principle provides dynamic data updates and real-time placement optimization. The system analyzes the warehouse space, route diagrams, as well as parameters such as weight, volume and turnover rate of goods in order to minimize the cost of storage and movement.',
  },
  {
    title: 'Algorithms and technologies used in the system',
    body: 'Automatic determination of the distribution algorithm requires the use of modern data processing methods, including machine learning and analytical models. The main algorithms include clustering, heuristic methods, and predictive analytics. These technologies make it possible to identify patterns in the flow of goods and adapt their placement schemes depending on seasonal fluctuations in demand or changes in the structure of orders. Integration with Warehouse Management Systems (WMS) and the use of IoT sensors for real-time tracking enhance the functionality of the system.',
  },
  {
    title:
      'Advantages and challenges of the automated approach',
    body: 'The introduction of an automated product distribution system brings significant benefits, including reduced order processing time, improved storage space utilization and reduced placement errors. However, the development and implementation process is accompanied by a number of challenges, such as the complexity of integration with existing infrastructure, the need to process large amounts of data and ensure the reliability of the system under high loads. In addition, developers have to take into account the need to take into account the specifics of warehouses, including their size, configuration and types of stored goods.',
  },
  {
    title: 'Conclusion',
    body: 'The development of a product distribution system with automatic detection of algorithms opens up new horizons in the management of warehouse processes. Such systems provide a high level of flexibility and allow you to adapt to constantly changing market conditions and customer needs. In the future, we can expect further improvements in technology, including strengthening the role of artificial intelligence, the introduction of robotic solutions and the creation of fully autonomous warehouses. These innovations will not only improve the economic performance of enterprises, but also increase the sustainability of logistics processes on a global scale.',
  },
];

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'Эффективное управление складом является критически важным элементом современной логистики, от которого зависят скорость выполнения заказов, оптимизация затрат и уровень клиентского обслуживания. Разработка системы, способной автоматически распределять товары на складе с учетом наиболее эффективного алгоритма, становится инновационным решением. Такое внедрение позволяет снизить влияние человеческого фактора, повысить точность размещения и сократить издержки, что особенно важно в условиях высоких требований к оперативности и масштабируемости складских процессов.',
  },
  {
    title: 'Принципы работы системы распределения товаров',
    body: 'Система распределения основана на сборе и анализе данных о характеристиках склада, типах товаров, частоте их перемещения и потребностях клиентов. Ключевым компонентом является алгоритм, который адаптируется к текущим условиям работы и выбирает наиболее эффективный подход к размещению товаров. Принцип автоматизации обеспечивает динамическое обновление данных и оптимизацию размещения в реальном времени. Система анализирует пространство склада, маршрутные схемы, а также параметры, такие как вес, объем и скорость оборачиваемости товаров, чтобы минимизировать затраты на хранение и перемещение.',
  },
  {
    title: 'Алгоритмы и технологии, применяемые в системе',
    body: 'Автоматическое определение алгоритма распределения требует использования современных методов обработки данных, включая машинное обучение и аналитические модели. Основные алгоритмы включают кластеризацию, эвристические методы и предсказательную аналитику. Эти технологии позволяют выявлять закономерности в потоках товаров и адаптировать схемы их размещения в зависимости от сезонных колебаний спроса или изменений в структуре заказов. Интеграция с системами управления складом (WMS) и использование сенсоров IoT для отслеживания в реальном времени усиливают функциональность системы.',
  },
  {
    title:
      'Преимущества и вызовы автоматизированного подхода',
    body: 'Внедрение автоматизированной системы распределения товаров приносит значительные преимущества, включая сокращение времени на обработку заказов, улучшение использования складского пространства и снижение ошибок при размещении. Однако процесс разработки и реализации сопровождается рядом вызовов, таких как сложность интеграции с существующей инфраструктурой, необходимость обработки больших объемов данных и обеспечение надежности работы системы в условиях высоких нагрузок. Кроме того, разработчикам приходится учитывать необходимость учета специфики складов, включая их размеры, конфигурацию и типы хранимых товаров.',
  },
  {
    title: 'Заключение',
    body: 'Разработка системы распределения товаров с автоматическим определением алгоритмов открывает новые горизонты в управлении складскими процессами. Такие системы обеспечивают высокий уровень гибкости и позволяют адаптироваться к постоянно меняющимся условиям рынка и запросам клиентов. В будущем можно ожидать дальнейшего совершенствования технологий, включая усиление роли искусственного интеллекта, внедрение роботизированных решений и создание полностью автономных складов. Эти инновации позволят не только улучшить экономические показатели предприятий, но и повысить устойчивость логистических процессов в глобальном масштабе.',
  },
];

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

export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase:
      'Разработка системы распределения  товаров на складе, автоматически определяющимся по эффективности алгоритмом',
    search: 'Google',
    countDocuments: '115000',
    link: 'https://www.google.com/search?as_q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%2C+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F+%D0%BF%D0%BE+%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%BC&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_ru&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 2,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '30000',
    link: 'https://ya.ru/search/?text=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%2C+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F+%D0%BF%D0%BE+%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%BC&lr=35&within=0&lang=ru',
  },
  {
    id: 3,
    search: 'Bing',
    language: 'ru',
    countDocuments: '9210',
    link: 'https://www.bing.com/search?q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B%20%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20%D0%BD%D0%B0%20%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%2C%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F%20%D0%BF%D0%BE%20%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%BC',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Гаркуша Олег Васильевич',
    search: 'Google',
    countDocuments: '31400',
    link: 'https://www.google.com/search?q=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&lr=lang_ru&sca_esv=4838b74728bc0d5d&sca_upv=1&as_qdr=all&tbs=lr%3Alang_1ru&sxsrf=ADLYWIIxhoeZuTCZlWzynz2DGLVdxQpq_A%3A1727029819663&ei=O2LwZoOWKJrXhbIPidKawQU&ved=0ahUKEwjDn6u3l9eIAxWaa0EAHQmpJlgQ4dUDCA8&uact=5&oq=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&gs_lp=Egxnd3Mtd2l6LXNlcnAiLNCT0LDRgNC60YPRiNCwINCe0LvQtdCzINCS0LDRgdC40LvRjNC10LLQuNGHMgUQIRigAUj5B1DMBFjMBHABeAGQAQCYAbEBoAGxAaoBAzAuMbgBA8gBAPgBAfgBApgCAqAC1AGoAhHCAgcQIxgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICHBAuGIAEGNEDGEMYtAIYxwEYyAMYigUY6gLYAQGYAxS6BgYIARABGAGSBwMxLjGgB5cC&sclient=gws-wiz-serp',
  },
  {
    id: 5,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '4100',
    link: 'https://ya.ru/search/?text=%D0%B3%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%BE%D0%BB%D0%B5%D0%B3+%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&lr=35&within=0&lang=ru',
  },
  {
    id: 6,
    search: 'Bing',
    language: 'ru',
    countDocuments: '113000',
    link: 'https://www.bing.com/search?q=%D0%93%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%9E%D0%BB%D0%B5%D0%B3+%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%B3%D0%B0%D1%80%D0%BA%D1%83%D1%88%D0%B0+%D0%BE%D0%BB%D0%B5%D0%B3+%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87&sc=0-23&sk=&cvid=CCD6BF62E1AD410FA18BB90546DB5DD0&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'Распределения  товаров на складе',
    search: 'Google',
    countDocuments: '542000',
    link: 'https://www.google.com/search?hl=ru&as_q=%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_ru&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 8,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '11000',
    link: 'https://ya.ru/search/?text=%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&lr=35&within=0&lang=ru',
  },
  {
    id: 9,
    search: 'Bing',
    language: 'ru',
    countDocuments: '1430000',
    link: 'https://www.bing.com/search?q=%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&form=QBLH&sp=-1&lq=0&pq=%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&sc=10-32&qs=n&sk=&cvid=9F24E9F9C1FE49CA83739F6294D0109F&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'ru',
    phrase: 'Алгоритм распределения товаров на складе',
    search: 'Google',
    countDocuments: '13700000',
    link: 'https://www.google.com/search?hl=ru&as_q=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_ru&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 11,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '54000',
    link: 'https://ya.ru/search/?text=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&lr=35&within=0&lang=ru',
  },
  {
    id: 12,
    search: 'Bing',
    language: 'ru',
    countDocuments: '553000',
    link: 'https://www.bing.com/search?q=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5&sc=10-40&sk=&cvid=7881B168F763461CBB6EB5F7A2DD560E&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'ru',
    phrase: 'Выбор наилучшего алгоритма',
    search: 'Google',
    countDocuments: '68400',
    link: 'https://www.google.com/search?hl=ru&as_q=%D0%92%D1%8B%D0%B1%D0%BE%D1%80+%D0%BD%D0%B0%D0%B8%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%B3%D0%BE+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B0&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_ru&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 14,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '10000',
    link: 'https://ya.ru/search/?text=%D0%92%D1%8B%D0%B1%D0%BE%D1%80+%D0%BD%D0%B0%D0%B8%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%B3%D0%BE+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B0&lr=35&within=0&lang=ru',
  },
  {
    id: 15,
    search: 'Bing',
    language: 'ru',
    countDocuments: '113000',
    link: 'https://www.bing.com/search?q=%D0%92%D1%8B%D0%B1%D0%BE%D1%80+%D0%BD%D0%B0%D0%B8%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%B3%D0%BE+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B0&qs=n&form=QBRE&sp=-1&lq=0&pq=%D0%B2%D1%8B%D0%B1%D0%BE%D1%80+%D0%BD%D0%B0%D0%B8%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%B3%D0%BE+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%B0&sc=0-26&sk=&cvid=70A8871FA85444C387C393C72623B562&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 16,
    numberPhrase: 1,
    language: 'eng',
    phrase:
      'Development of a system for distributing goods in a warehouse, automatically determined by efficiency by an algorithm',
    search: 'Google',
    countDocuments: '903000000',
    link: 'https://www.google.com/search?hl=ru&as_q=+Development+of+a+system+for+distributing+goods+in+a+warehouse%2C+automatically+determined+by+efficiency+by+an+algorithm&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 17,
    language: 'eng',
    search: 'Яндекс',
    countDocuments: '8000000',
    link: 'https://ya.ru/search/?text=Development+of+a+system+for+distributing+goods+in+a+warehouse%2C+automatically+determined+by+efficiency+by+an+algorithm&lr=35&within=0&lang=en',
  },
  {
    id: 18,
    language: 'eng',
    search: 'Bing',
    link: 'https://www.bing.com/search?q=+Development+of+a+system+for+distributing+goods+in+a+warehouse%2C+automatically+determined+by+efficiency+by+an+algorithm&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=81C5D415B90B493780D1499B72672FCD&ghsh=0&ghacc=0&ghpl=',
    countDocuments: '1850000',
  },
  {
    id: 19,
    numberPhrase: 2,
    language: 'eng',
    phrase: 'Garkusha Oleg Vasilievich',
    search: 'Google',
    countDocuments: '252',
    link: 'https://www.google.com/search?hl=ru&as_q=Garkusha+Oleg+Vasilievich&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 20,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '100',
    link: 'https://ya.ru/search/?text=Garkusha+Oleg+Vasilievich&lr=35&within=0&lang=en',
  },
  {
    id: 21,
    search: 'Bing',
    language: 'eng',
    countDocuments: '-',
    link: 'https://www.bing.com/search?q=Garkusha+Oleg+Vasilievich&qs=n&form=QBRE&sp=-1&lq=0&pq=garkusha+oleg+vasilievich&sc=10-25&sk=&cvid=07D42394A8BB44CD942CA50AD219BBFC&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 22,
    numberPhrase: 3,
    language: 'eng',
    phrase: 'distribution of goods in the warehouse',
    search: 'Google',
    countDocuments: '9650000000',
    link: 'https://www.google.com/search?hl=ru&as_q=distribution+of+goods+in+the+warehouse&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_en&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 23,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '7800000',
    link: 'https://ya.ru/search/?text=distribution+of+goods+in+the+warehouse&lr=35&within=0&lang=en',
  },
  {
    id: 24,
    search: 'Bing',
    language: 'eng',
    countDocuments: '1730000',
    link: 'https://www.bing.com/search?q=distribution+of+goods+in+the+warehouse&qs=n&form=QBRE&sp=-1&lq=0&pq=distribution+of+goods+in+the+warehouse&sc=17-38&sk=&cvid=071A96D633CD4B1880477AB9BC8F6A46&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 25,
    numberPhrase: 4,
    language: 'eng',
    phrase:
      'algorithm for distribution of goods in the warehouse',
    search: 'Google',
    countDocuments: '1220000',
    link: 'https://www.google.com/search?q=algorithm+for+distribution+of+goods+in+the+warehouse&lr=lang_en&sca_esv=ce82798a7417db5b&sca_upv=1&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ADLYWIINZU5z_RFFGy7KzDKW6l7SNvxLcQ%3A1727546639340&ei=D0X4ZoSLELuwwPAP_6GNoQI&ved=0ahUKEwjEzpDenOaIAxU7GBAIHf9QIyQQ4dUDCA8&oq=algorithm+for+distribution+of+goods+in+the+warehouse&gs_lp=Egxnd3Mtd2l6LXNlcnAiNGFsZ29yaXRobSBmb3IgZGlzdHJpYnV0aW9uIG9mIGdvb2RzIGluIHRoZSB3YXJlaG91c2UyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEiVMlD8Blj6G3ACeAGQAQCYAawBoAGVHqoBBDUuMzC4AQzIAQD4AQH4AQKYAgWgAusDqAIRwgIKEAAYsAMY1gQYR8ICBBAjGCfCAggQABiiBBiJBcICChAjGIAEGCcYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgIKEAAYgAQYQxiKBcICDhAuGIAEGLEDGIMBGIoFwgIFEAAYgATCAggQLhiABBixA8ICBxAjGCcY6gLCAhQQABiABBjjBBi0AhjpBBjqAtgBAcICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBmAMdiAYBkAYIugYGCAEQARgBkgcDMi4zoAeLsAI&sclient=gws-wiz-serp',
  },
  {
    id: 26,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '123000',
    link: 'https://ya.ru/search/?text=algorithm+for+distribution+of+goods+in+the+warehouse&lr=35&within=0&lang=en',
  },
  {
    id: 27,
    search: 'Bing',
    language: 'eng',
    countDocuments: '62000',
    link: 'https://www.bing.com/search?q=algorithm+for+distribution+of+goods+in+the+warehouse&qs=n&form=QBRE&sp=-1&lq=0&pq=algorithm+for+distribution+of+goods+in+the+warehouse&sc=8-52&sk=&cvid=AFB94E33A78346BBB878329A6ED09E4F&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 28,
    numberPhrase: 5,
    language: 'eng',
    phrase: 'Choosing the best algorithm',
    search: 'Google',
    countDocuments: '331000000',
    link: 'https://www.google.com/search?q=Choosing+the+best+algorithm&lr=lang_en&sca_esv=ce82798a7417db5b&sca_upv=1&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ADLYWIKpqSuB7zhZPuIJTUkTnUd8AeN-lw%3A1727546679239&ei=N0X4ZuitDpuzwPAPrPq38QE&ved=0ahUKEwiopZjxnOaIAxWbGRAIHSz9LR4Q4dUDCA8&uact=5&oq=Choosing+the+best+algorithm&gs_lp=Egxnd3Mtd2l6LXNlcnAiG0Nob29zaW5nIHRoZSBiZXN0IGFsZ29yaXRobTIFECEYoAFI9gpQnQlYnQlwAngAkAEAmAGLAaABiwGqAQMwLjG4AQPIAQD4AQH4AQKYAgOgAsQBqAIUwgIHECMYJxjqAsICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBmAMSugYGCAEQARgLkgcDMi4xoAeuAQ&sclient=gws-wiz-serp',
  },
  {
    id: 29,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '5000000',
    link: 'https://ya.ru/search/?text=Choosing+the+best+algorithm&lr=35&within=0&lang=en',
  },
  {
    id: 30,
    search: 'Bing',
    language: 'eng',
    countDocuments: '14000000',
    link: 'https://www.bing.com/search?q=Choosing+the+best+algorithm&qs=n&form=QBRE&sp=-1&lq=0&pq=choosing+the+best+algorithm&sc=10-27&sk=&cvid=A8FA078A7F794C7B81A4734490D99A57&ghsh=0&ghacc=0&ghpl=',
  },
];
export const LibraryResponse = [
  {
    title:
      'Организация складской логистики: основные принципы и эффективные стратегии',
    authors: 'Редакция Logists.by',
    description:
      'В статье рассматриваются ключевые принципы управления складом, включая оптимизацию расстановки товаров, использование WMS (систем управления складом), инвентаризацию и минимизацию издержек. Приводятся примеры внедрения автоматизации и прогнозирования для повышения эффективности логистических операций.',
    source: 'Logists.by, 2024',
  },
  {
    title:
      'Складская логистика: эффективность и оптимизация',
    authors: 'Редакция Logistics.by',
    description:
      'Исследование посвящено методам улучшения складской логистики: от планирования маршрутов движения товаров до автоматизации операций при помощи специализированных программ. Рассматриваются преимущества внедрения новых технологий для повышения скорости обработки заказов и управления запасами.',
    source: 'Logistics.by, 2024',
  },
];

export const LinkResponse = {
  literature: [
    {
      title: 'Warehouse & Distribution Science',
      authors: 'John Bartholdi, Steven Hackman',
      description:
        'Книга посвящена оптимизации складских операций, включая алгоритмы распределения товаров, маршрутизацию и управление запасами. Рассматриваются методы повышения эффективности с использованием автоматизации.',
    },
    {
      title:
        'Design and Analysis of Algorithms for Warehouse Management',
      authors: 'Peter Sanders, Kurt Mehlhorn',
      description:
        'Издание сосредоточено на алгоритмах, применимых для управления складскими системами, включая методы планирования размещения товаров, обработки заказов и выбора маршрутов для минимизации затрат.',
    },
    {
      title: 'The Warehouse Management Handbook',
      authors: 'James A. Tompkins, Jerry D. Smith',
      description:
        'Практическое руководство по управлению складом с акцентом на автоматизацию процессов, выбор подходящих алгоритмов и разработку систем управления складом для повышения производительности.',
    },
  ],
  saits: [
    {
      link: 'https://www.supplychaindive.com/',
      description:
        'Портал о логистике и цепочках поставок, включающий статьи, исследования и аналитические обзоры по управлению складскими процессами и автоматизации распределения.',
    },
    {
      link: 'https://www.logisticsmgmt.com/',
      description:
        'Ресурс, посвященный управлению логистикой и складскими процессами. Содержит новости, тренды и примеры внедрения автоматизированных систем управления складом.',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю работать под классическую музыку',
  video: '/classic.mp4',
  preview: '/classical-music.jpg',
};
export const UemkResponse = {
  titleKurs: 'Разработка на TypeScript',
  descriptionKurs:
    'Данный учебный курс посвящен основам и продвинутым методам программирования на языке TypeScript. Курс ориентирован на изучение возможностей TypeScript, который сочетает в себе динамическую гибкость JavaScript с типизацией и современными инструментами разработки. В ходе занятий студенты познакомятся с основами синтаксиса и особенностями TypeScript, включая систему типов, интерфейсы, классы и функции. Особое внимание уделяется работе с типами данных, generics и интеграции TypeScript с существующими JavaScript проектами. Также рассматриваются ключевые инструменты и фреймворки, такие как типизация для популярных библиотек, использование модуляции и настройки компилятора. Студенты научатся создавать безопасные и масштабируемые приложения, которые используют статическую типизацию для повышения надежности и уменьшения ошибок на этапе компиляции. Практические задания на протяжении курса помогут освоить работу с современными подходами к проектированию и разработке программного обеспечения, включая взаимодействие с API, создание серверных и клиентских приложений с использованием TypeScript.',
  lectures: [
    {
      title:
        'Введение в TypeScript: Основы синтаксиса и настройка среды разработки',
      pathDocument: '/uemkMarko/1.docx',
    },
    {
      title: 'Система типов в TypeScript',
      pathDocument: '/uemkMarko/2.docx',
    },
    {
      title: 'Интерфейсы и типы объектов',
      pathDocument: '/uemkMarko/3.docx',
    },
    {
      title:
        'Классы и объектно-ориентированное программирование в TypeScript',
      pathDocument: '/uemkMarko/4.docx',
    },
    {
      title: 'Generics и типизация коллекций',
      pathDocument: '/uemkMarko/5.docx',
    },
    {
      title:
        'Продвинутые возможности TypeScript: Декораторы и модули',
      pathDocument: '/uemkMarko/6.docx',
    },
    {
      title:
        'Интеграция TypeScript с JavaScript и реальное применение',
      pathDocument: '/uemkMarko/7.docx',
    },
  ],
  tasks: [
    {
      title: 'Реализация интерфейсов и классов',
      pathDocument: '/uemkMarko/tasks/1.docx',
    },
    {
      title: 'Работа с Generics и типизацией коллекций',
      pathDocument: '/uemkMarko/tasks/2.docx',
    },
    {
      title: 'Создание и использование декораторов',
      pathDocument: '/uemkMarko/tasks/3.docx',
    },
  ],
  dopMatireals: [
    {
      title: 'Официальная документация TypeScript',
      description:
        'Подробное руководство по TypeScript, включая объяснение синтаксиса, использование типизации, интерфейсов, классов и других возможностей.',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      title: 'TypeScript Handbook (Руководство)',
      description:
        'Бесплатное руководство от разработчиков TypeScript с подробными примерами и объяснением ключевых особенностей языка.',
      link: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    },
    {
      title: 'Курс на YouTube: TypeScript для начинающих',
      description:
        'Видеокурс с пошаговым введением в TypeScript, охватывающий темы от основ синтаксиса до работы с декораторами и модулями.',
      link: 'https://www.youtube.com/results?search_query=TypeScript+для+начинающих',
    },
  ],
  authour: 'Ковачевич Марко',
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
  UemkResponse: UemkResponse,
};
