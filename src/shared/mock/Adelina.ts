import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  InboxIcon,
} from '@heroicons/react/16/solid';
import { Data } from '@shared/types';

export const mainResponseRu: Data = {
  info: {
    imageUrl: '/RdkAA3FEbSU.jpg',
    name: 'Савонина Аделина Арутюновна',
    profession: 'Системный аналитик',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Система детекции и идентификации данных методами машинного зрения',
    teacher: 'Харченко Анна Владимировна',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Савонина Аделина Арутюновна',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '09.11.2001',
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
          label: 'Среднее образовательное ',
          icon: AcademicCapIcon,
          text: 'МБОУ СОШ №65 / 2008-2019',
        },
      ],
    },
    {
      title: 'Опыт работы',
      items: [
        {
          label: 'ТНС энерго Кубань',
          icon: BriefcaseIcon,
          text: 'Ведущий инженер сектора по расчетам с крупными потребителями / 2023 - настоящее время',
        },
        {
          label: 'Практика Симбирсофт',
          icon: BriefcaseIcon,
          text: 'QA Стажёр / 2022 ',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Базы данных',
          text: 'SQL Oracle',
        },
        {
          label: 'Языки программирования',
          text: 'Python',
        },
      ],
    },
  ],
};
export const mainResponseEng: Data = {
  info: {
    imageUrl: '/RdkAA3FEbSU.jpg',
    name: 'Savonina Adelina Arutyunovna',
    profession: 'System Analyst',
    education:
      "Faculty of Computer Technologies and Applied Mathematics, Department of Information Technologies, Major in 'Applied Mathematics and Computer Science'",
    themeGraduationPaper:
      'Data Detection and Identification System using Machine Vision Methods',
    teacher: 'Kharchenko Anna Vladimirovna',
  },
  aboutMe: [
    {
      title: 'Personal Information',
      items: [
        {
          label: 'Full Name',
          icon: UserIcon,
          text: 'Savonina Adelina Arutyunovna',
        },
        {
          label: 'Date of Birth',
          icon: CalendarIcon,
          text: '09.11.2001',
        },
        {
          label: 'Place of Residence',
          icon: MapPinIcon,
          text: 'Krasnodar',
        },
        {
          label: 'Phone',
          icon: DevicePhoneMobileIcon,
          text: '8-999-999-99-99',
        },
        {
          label: 'Email',
          icon: InboxIcon,
          text: 'example.com',
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          label: "Master's Degree",
          icon: AcademicCapIcon,
          text: 'Kuban State University, Applied Mathematics and Computer Science / 2023-2025',
        },
        {
          label: "Bachelor's Degree",
          icon: AcademicCapIcon,
          text: 'Kuban State University, Applied Mathematics and Computer Science / 2019-2023',
        },
        {
          label: 'Secondary Education',
          icon: AcademicCapIcon,
          text: 'Secondary School No. 65 / 2008-2019',
        },
      ],
    },
    {
      title: 'Work Experience',
      items: [
        {
          label: 'TNS Energo Kuban',
          icon: BriefcaseIcon,
          text: 'Lead Engineer of the Department for Calculations with Large Consumers /2023 - present',
        },
        {
          label: 'Internship at Simbirsoft',
          icon: BriefcaseIcon,
          text: 'QA Intern / 2022',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Databases',
          text: 'SQL Oracle',
        },
        {
          label: 'Programming Languages',
          text: 'Python',
        },
      ],
    },
  ],
};

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'In the modern world, digitalization has become an integral part of economic and societal development. One of the key tasks is the analysis and optimization of the IT sector, which plays a significant role in the regional labor market. This essay is dedicated to exploring the ontological approach to building a digital shadow of the IT sector in the regional labor market, enabling structured data and new opportunities for analyzing and managing this segment.',
  },
  {
    title: 'Ontological Approach: Basics and Advantages',
    body: 'The ontological approach is a methodology based on creating formal models of a subject area. It enables the structuring of data, establishing relationships between objects, and conducting detailed analysis. The advantages of the ontological approach include model flexibility, the ability to integrate with other systems, and improved decision-making quality.',
  },
  {
    title: 'The Digital Shadow of the IT Sector',
    body: 'The digital shadow is a virtual representation of processes, objects, and participants in the IT sector. It includes data on companies, employees, projects, technologies, and trends. Creating a digital shadow allows for analyzing the sector’s state, identifying bottlenecks, and forecasting development, which is particularly important for managing the labor market at the regional level.',
  },
  {
    title:
      'Applying the Ontological Approach to Build a Digital Shadow',
    body: 'The use of ontologies in constructing the digital shadow of the IT sector includes several stages: defining key concepts, formalizing their relationships, integrating data sources, and visualizing information. This process automates data collection and improves analytical accuracy. For instance, it becomes possible to track skill demand, hiring dynamics, and salary levels.',
  },
  {
    title: 'Conclusion',
    body: 'The ontological approach to constructing the digital shadow of the IT sector provides a powerful tool for managing the regional labor market. It enhances the understanding of current processes, predicts trends, and supports informed decision-making. The implementation of such technologies contributes to IT sector development and regional economic growth.',
  },
];

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'В современном мире цифровизация стала неотъемлемой частью развития экономики и общества. Одной из ключевых задач является анализ и оптимизация ИТ-сектора, который играет значительную роль в региональном рынке труда. Данный реферат посвящен исследованию методов машинного зрения для детекции и идентификации данных, что позволяет повысить точность анализа и автоматизировать процессы распознавания объектов и информации.',
  },
  {
    title: 'Машинное зрение: основы и преимущества',
    body: 'Машинное зрение — это технология и методы, позволяющие компьютерам интерпретировать и понимать визуальную информацию, как это делает человек. Системы машинного зрения могут выполнять задачи, такие как детекция объектов, их распознавание и классификация. Преимущества машинного зрения включают высокую точность, скорость и возможность обработки больших объемов данных автоматически, что делает его идеальным для таких областей, как автоматизированный контроль качества, безопасность и медицинская диагностика.',
  },
  {
    title:
      'Детекция и идентификация данных методами машинного зрения',
    body: 'Система детекции и идентификации данных с использованием машинного зрения включает процессы анализа и распознавания паттернов, объектов или аномалий в изображениях или видео. Для этого используются алгоритмы, такие как глубокое обучение и методы компьютерного зрения, которые помогают выявлять объекты, классифицировать их и извлекать полезные данные из визуальных источников. Это особенно полезно в таких областях, как видеонаблюдение, робототехника и автономные транспортные средства, где точность распознавания данных и объектов играет ключевую роль.',
  },
  {
    title:
      'Применение методов машинного зрения для идентификации данных',
    body: 'Применение методов машинного зрения для идентификации данных включает этапы предварительной обработки изображений, извлечения признаков, распознавания паттернов и принятия решений. Такой подход позволяет автоматизировать процессы, например, в промышленности, где можно обнаруживать дефекты в производственных процессах или контролировать качество продукции. Методы машинного зрения также могут применяться в здравоохранении для диагностики, в безопасности для систем видеонаблюдения и в транспорте для распознавания транспортных средств в умных городах.',
  },
  {
    title: 'Заключение',
    body: 'Использование методов машинного зрения для детекции и идентификации данных предоставляет мощный инструмент для автоматизации и повышения точности анализа данных. Эти системы значительно улучшают процесс принятия решений, уменьшают количество ошибок и повышают эффективность во многих областях, от промышленности до здравоохранения. С развитием технологий машинного зрения они будут играть все более важную роль в трансформации отраслей и оптимизации рабочих процессов.',
  },
];

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'В процессе личностного становления я научилась понимать свои сильные и слабые стороны, что стало основой для дальнейшего развития. Опыт общения с различными людьми, включая друзей, коллег и наставников, помог мне развить навыки эмпатии и активного слушания. Я стремлюсь к самосовершенствованию через чтение, участие в тренингах и открытие для себя новых горизонтов.',
    },
    {
      title: 'Профессиональное становление',
      body: 'Мое профессиональное становление началось с получения степени бакалавра в области прикладной математики и информатики, что дало мне необходимые теоретические знания.',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'В ближайшие годы я планирую углубить свои знания в области аналитики данных и развить навыки работы с новыми инструментами и технологиями. Моя долгосрочная цель — занять руководящую позицию в области аналитики, где смогу не только применять свои знания, но и вдохновлять других. Я вижу свою карьеру как постоянное движение к новым горизонтам, где я смогу сочетать профессиональные достижения с личными интересами, помогая людям и организациям достигать их целей.',
    },
  ],
};

export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase:
      'Система детекции и индефикации данных методами машинного зрения',
    search: 'Google',
    countDocuments: '573 тыс.',
    link: 'https://www.google.ru/search?q=Система+детекции+и+индефикации+данных+методами+машинного+зрения&newwindow=1&sca_esv=c017efeea7a130ca&hl=ru&tbas=0&source=lnt&sa=X&ved=2ahUKEwitsdTCvvKIAxVAJhAIHW-sBLUQpwV6BAgEEAY&biw=1495&bih=712&dpr=1.25',
  },
  {
    id: 2,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '15 тыс.',
    link: 'https://yandex.ru/search/?text=Система+детекции+и+индефикации+данных+методами+машинного+зрения&lr=35&clid=2413833-193&win=618',
  },
  {
    id: 3,
    search: 'Bing',
    language: 'ru',
    countDocuments: '3 тыс.',
    link: 'https://www.bing.com/search?q=Система+детекции+и+индефикации+данных+методами+машинного+зрения&form=QBLH&sp=-1&lq=0&pq=система+детекции+и+индефикации+данных+методами+машинного+зрения&sc=0-63&qs=n&sk=&cvid=59A5B71F51E54FC6B73F1560866517E1&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Харченко Анна Владимировна КУБГУ',
    search: 'Google',
    countDocuments: '1.6 тыс.',
    link: 'https://www.google.ru/search?q=Харченко+Анна+Владимировна+КУБГУ&newwindow=1&sca_esv=c017efeea7a130ca&hl=ru&biw=783&bih=702&ei=HrP-ZuiLNJjawPAPp-vJ8AE&ved=0ahUKEwjokqbFvvKIAxUYLRAIHad1Eh4Q4dUDCA8&uact=5&oq=Харченко+Анна+Владимировна+КУБГУ&gs_lp=Egxnd3Mtd2l6LXNlcnAiPdCl0LDRgNGH0LXQvdC60L4g0JDQvdC90LAg0JLQu9Cw0LTQuNC80LjRgNC-0LLQvdCwINCa0KPQkdCT0KMyBRAhGKABSO0IUABYAHAAeAGQAQCYAXagAXaqAQMwLjG4AQPIAQD4AQL4AQGYAgGgAoYBmAMAkgcDMC4xoAfCAg&sclient=gws-wiz-serp',
  },
  {
    id: 5,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '10 тыс.',
    link: 'https://yandex.ru/search/?text=Харченко+Анна+Владимировна+КУБГУ&lr=35&clid=2413833-193&win=618',
  },
  {
    id: 6,
    search: 'Bing',
    language: 'ru',
    countDocuments: '39.6 тыс.',
    link: 'https://www.bing.com/search?q=Харченко+Анна+Владимировна+КУБГУ&qs=n&form=QBRE&sp=-1&lq=0&pq=харченко+анна+владимировна+кубгу&sc=10-32&sk=&cvid=F746667A65EF4A179DB9F1A35A675236&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'Детекция и индефикация данных',
    search: 'Google',
    countDocuments: '32.8 млн.',
    link: 'https://www.google.ru/search?q=Детекция+и+индефикация+данных&newwindow=1&sca_esv=c017efeea7a130ca&hl=ru&biw=783&bih=702&ei=iLP-ZvKvD-38wPAP_p2IoAE&ved=0ahUKEwjyk8f3vvKIAxVtPhAIHf4OAhQQ4dUDCA8&uact=5&oq=Детекция+и+индефикация+данных&gs_lp=Egxnd3Mtd2l6LXNlcnAiN9CU0LXRgtC10LrRhtC40Y8g0Lgg0LjQvdC00LXRhNC40LrQsNGG0LjRjyDQtNCw0L3QvdGL0YUyBxAhGKABGAoyBxAhGKABGApI2g1Q8wdY8wdwAXgAkAEAmAGNAaABjQGqAQMwLjG4AQPIAQD4AQH4AQKYAgKgAr0BqAIKwgIWEAAYAxi0AhjlAhjqAhiMAxiPAdgBAcICFhAuGAMYtAIY5QIY6gIYjAMYjwHYAQGYAyS6BgQIARgKkgcDMS4xoAegBQ&sclient=gws-wiz-serp',
  },
  {
    id: 8,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '14 тыс.',
    link: 'https://yandex.ru/search/?text=Детекция+и+индефикация+данных&lr=35&clid=2413833-193&win=618',
  },
  {
    id: 9,
    search: 'Bing',
    language: 'ru',
    countDocuments: '114 тыс.',
    link: 'https://www.bing.com/search?q=Детекция+и+индефикация+данных&qs=n&form=QBRE&sp=-1&lq=0&pq=детекция+и+индефикация+данных&sc=9-29&sk=&cvid=2D8F1F8B51564131B60AECD0B67C13EF&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'ru',
    phrase: 'Машинное зрение',
    search: 'Google',
    countDocuments: '344 тыс.',
    link: 'https://www.google.ru/search?q=Машинное+зрение&newwindow=1&sca_esv=c017efeea7a130ca&hl=ru&biw=783&bih=702&ei=KbT-ZsPNMK3BwPAPu52jmAc&ved=0ahUKEwiDhsvEv_KIAxWtIBAIHbvOCHMQ4dUDCA8&uact=5&oq=Машинное+зрение&gs_lp=Egxnd3Mtd2l6LXNlcnAiHdCc0LDRiNC40L3QvdC-0LUg0LfRgNC10L3QuNC1MgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjnDVC6Bli6BnABeAGQAQCYAWugAWuqAQMwLjG4AQPIAQD4AQH4AQKYAgKgArABqAIUwgIdEAAYgAQYtAIY1AMY5QIYtwMYigUY6gIYigPYAQHCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AECwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBApgDNuIDBRIBMSBAugYECAEYB7oGBggCEAEYCpIHAzEuMaAH5gY&sclient=gws-wiz-serp',
  },
  {
    id: 11,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '158 тыс.',
    link: 'https://yandex.ru/search/?text=Машинное+зрение&lr=35&clid=2413833-193&win=618',
  },
  {
    id: 12,
    search: 'Bing',
    language: 'ru',
    countDocuments: '587 тыс.',
    link: 'https://www.bing.com/search?q=Машинное+зрение&qs=n&form=QBRE&sp=-1&lq=0&pq=машинное+зрение&sc=1-34&sk=&cvid=60D3BB8986F544D89DBAC71A35C97151&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'ru',
    phrase:
      'Методы машинного зрения для детекции объектов на изображении в Python',
    search: 'Google',
    countDocuments: '4.9 млн.',
    link: 'https://www.google.ru/search?q=Методы+машинного+зрения+для+детекции+объектов+на+изображении+в+Python&newwindow=1&sca_esv=c017efeea7a130ca&hl=ru&biw=783&bih=702&ei=R9C-ZuH9M4udwQPL1KbgBQ&ved=0ahUKEwj9gI6wvfKIExWg28YBHTpiAN0Q4dUDCA8&uact=5&oq=Методы+машинного+зрения+для+детекции+объектов+на+изображении+в+Python&gs_lp=Egxnd3Mtd2l6LXNlcnAiJ9G02q-2a6-K7gSt8JnWlrGjpTArIUz3c9wqINj3ACvU6OHK2yFLVOJBYlA6wCzQDAA&biw=783&bih=702',
  },
  {
    id: 14,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '11 тыс.',
    link: 'https://yandex.ru/search/?text=Методы+машинного+зрения+для+детекции+объектов+на+изображении+в+Python&lr=35&clid=2413833-193&win=618',
  },
  {
    id: 15,
    search: 'Bing',
    language: 'ru',
    countDocuments: '287 тыс.',
    link: 'https://www.bing.com/search?q=Методы+машинного+зрения+для+детекции+объектов+на+изображении+в+Python&qs=n&form=QBRE&sp=-1&lq=0&pq=методы+машинного+зрения+для+детекции+объектов+на+изображении+в+python&sc=1-35&sk=&cvid=6B6974C91DAE44F9A9ABEA0515BE55F3&ghsh=0&ghacc=0&ghpl=',
  },
];

export const LibraryResponse = [
  {
    title:
      'Система детекции и идентификации данных методами машинного зрения',
    authors: 'А.Д. Иванов, Б.В. Смирнов',
    description:
      'Книга посвящена теоретическим и практическим аспектам использования методов машинного зрения для детекции и идентификации данных. Рассматриваются алгоритмы и подходы, применяемые для анализа изображений и видео в различных отраслях, включая промышленность, медицину и транспорт.',
    source: 'Издательство "Технологии и инновации", 2023',
  },
  {
    title:
      'Основы машинного зрения и искусственного интеллекта',
    authors: 'И.П. Александров, С.А. Кузнецов',
    description:
      'В книге изложены основы машинного зрения, методы распознавания объектов и алгоритмы обработки изображений. Особое внимание уделено интеграции машинного зрения с искусственным интеллектом для создания систем детекции и идентификации данных.',
    source: 'Издательство "Интеллект и технологии", 2022',
  },
  {
    title:
      'Машинное зрение в промышленности: от теории к практике',
    authors: 'Н.К. Соловьев, В.Г. Лебедев',
    description:
      'Издание охватывает применение технологий машинного зрения для решения практических задач в промышленности, таких как автоматизация процессов контроля качества и мониторинга. Рассматриваются примеры использования систем идентификации данных в реальных условиях.',
    source: 'Издательство "Технические решения", 2021',
  },
  {
    title: 'Алгоритмы и методы машинного зрения',
    authors: 'М.С. Федоров, А.О. Бородин',
    description:
      'Книга посвящена алгоритмам и методам машинного зрения, которые используются для анализа и идентификации данных в изображениях. Рассматриваются основные подходы к построению и обучению моделей машинного зрения.',
    source: 'Издательство "Наука и техника", 2020',
  },
  {
    title:
      'Применение машинного зрения в безопасности и транспорте',
    authors: 'Л.П. Ковалев, И.В. Чернышев',
    description:
      'В книге исследуется использование методов машинного зрения в системах безопасности и транспорте. Рассматриваются примеры применения для распознавания объектов, анализа видео и идентификации данных в реальном времени.',
    source: 'Издательство "Транспорт и безопасность", 2021',
  },
];

export const LinkResponse = {
  literature: [
    {
      title:
        'Machine Vision for Data Detection and Identification',
      authors: 'John Smith, Mary Johnson, et al.',
      description:
        'This book provides an in-depth exploration of machine vision techniques for data detection and identification. It covers the application of image processing algorithms and deep learning models for analyzing visual data and recognizing patterns in various fields, such as industrial automation, healthcare, and transportation.',
    },
  ],
  saits: [
    {
      link: 'https://www.oracle.com/cis/artificial-intelligence/machine-learning/what-is-machine-learning/',
      description:
        'Статья oracle, что такое машинное обучение',
      source: 'vc.ru',
    },
    {
      link: 'https://ru.wikipedia.org/wiki/Машинное_зрение',
      description:
        'Википедия предоставляет основную информацию о машинном зрении, его методах и применении, включая обработку изображений, бинаризацию и распознавание объектов.',
      source: 'Wikipedia',
    },
    {
      link: 'https://arxiv.org/abs/2001.06268',
      description:
        'Научная работа на arXiv, посвященная современным методам и алгоритмам машинного зрения, включая архитектуры глубоких нейронных сетей.',
      source: 'arXiv',
    },
    {
      link: 'https://opencv.org/',
      description:
        'Официальный сайт OpenCV, одной из самых популярных библиотек для компьютерного зрения, предоставляет документацию, примеры и ресурсы.',
      source: 'OpenCV',
    },
    {
      link: 'https://trends.rbc.ru/trends/industry/60c85c599a7947f5776ad409',
      description:
        'РБК о том то придумал machine learning, что оно подразумевает и как устроены алгоритмы обучения?',
      source: 'PБК',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю пить кофе',
  video: '/coffee.mp4',
  preview: '/coffee.png',
};
export const UemkResponse = {
  titleKurs:
    'МЕТОДЫ МАШИННОГО ОБУЧЕНИЯ В ЗАДАЧАХ АНАЛИЗА ДАННЫХ.',
  descriptionKurs:
    'Курс «Методы машинного обучения в задачах анализа данных» предназначен для студентов, специалистов и исследователей, желающих освоить современные техники и алгоритмы машинного обучения для эффективного анализа данных. В рамках курса участники познакомятся с теоретическими основами машинного обучения, а также применением различных методов для решения практических задач. Участники получат навыки работы с наборами данных, выполнение предобработки, применение моделей машинного обучения и интерпретацию результатов. По завершении курса слушатели смогут самостоятельно разрабатывать и внедрять модели для анализа данных, что откроет перед ними новые карьерные горизонты в быстро развивающейся области аналитики данных.',
  lectures: [
    {
      title: 'Основные определение и типы анализа данных',
      pathDocument: '/uemkAdelina/1.docx',
    },
    {
      title: 'Процесс анализа данных',
      pathDocument: '/uemkAdelina/2.docx',
    },
    {
      title: 'Data mining',
      pathDocument: '/uemkAdelina/3.docx',
    },
    {
      title: 'Основы анализа данных',
      pathDocument: '/uemkAdelina/4.docx',
    },
    {
      title: 'Машинное обучение',
      pathDocument: '/uemkAdelina/5.docx',
    },
    {
      title: 'Алгоритмы моделей ML',
      pathDocument: '/uemkAdelina/6.docx',
    },
    {
      title:
        'Пакеты языка программирования python для работы с данными',
      pathDocument: '/uemkAdelina/7.docx',
    },
  ],
  tasks: [
    {
      title: 'Исследование открытого набора данных',
      pathDocument: '/uemkAdelina/tasks/1.docx',
    },
    {
      title:
        'Построение и оценка модели машинного обучения',
      pathDocument: '/uemkAdelina/tasks/2.docx',
    },
    {
      title: 'Визуализация и интерпретация данных',
      pathDocument: '/uemkAdelina/tasks/3.docx',
    },
  ],
  dopMatireals: [
    {
      title: 'Введение в анализ данных',
      description:
        'Основные определения анализа данных, включая виды и методы, которые используются для обработки и интерпретации данных.',
      link: 'https://www.datacamp.com/courses/intro-to-python-for-data-science',
    },
    {
      title: 'Процесс анализа данных',
      description:
        'Этапы анализа данных, включая сбор, подготовку, анализ и интерпретацию. Практические примеры и инструменты для каждого этапа.',
      link: 'https://www.edx.org/course/data-analysis',
    },
    {
      title: 'Data Mining: основы',
      description:
        'Введение в методы Data Mining, такие как кластеризация, ассоциативные правила, регрессия и классификация.',
      link: 'https://www.coursera.org/learn/machine-learning',
    },
  ],
  authour: 'Савонина Аделина',
  kriteri: '/uemkAdelina/kriteri.docx',
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
