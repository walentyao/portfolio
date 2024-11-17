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
