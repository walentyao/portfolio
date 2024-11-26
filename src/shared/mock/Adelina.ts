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
      title: 'Introduction',
      body: "In today's world, digitalization has become an integral part of the development of the economy and society. One of the key challenges is the analysis and optimization of the IT sector, which plays a significant role in the regional labor market. This paper is dedicated to the study of the ontological approach to building a digital shadow of the IT sector in the regional labor market, which allows for structured data and new opportunities for analysis and management of this segment.",
    },
    {
      title: 'Machine Vision: Basics and Advantages',
      body: 'Machine vision refers to the technology and methods used to enable computers to interpret and understand visual information from the world, similar to how humans use their eyes. Machine vision systems can be used for various tasks such as object detection, recognition, and classification. The advantages of machine vision include high accuracy, speed, and the ability to process large volumes of data automatically, making it ideal for applications in automated quality control, security, and medical diagnostics.',
    },
    {
      title:
        'Data Detection and Identification in Machine Vision',
      body: 'The data detection and identification system based on machine vision involves the process of analyzing and recognizing patterns, objects, or anomalies in images or videos. This system utilizes algorithms such as deep learning and computer vision techniques to identify objects, classify them, and extract useful data from visual sources. It is highly useful in areas such as surveillance, robotics, and autonomous vehicles, where precise recognition of data and objects is crucial for decision-making.',
    },
    {
      title:
        'Application of Machine Vision Methods in Data Identification',
      body: 'The application of machine vision methods for data identification includes the stages of image preprocessing, feature extraction, pattern recognition, and decision-making. This approach enables automation in fields like industrial automation, where it can detect defects in manufacturing processes or ensure product quality. Machine vision methods can also be applied in healthcare for diagnostic purposes, in security for surveillance systems, and in transportation for vehicle recognition in smart cities.',
    },
    {
      title: 'Conclusion',
      body: 'The use of machine vision methods in data detection and identification provides a powerful tool for automating and improving the accuracy of data analysis. These systems can significantly enhance decision-making processes, reduce errors, and increase efficiency across various sectors, from manufacturing to healthcare. As machine vision technology continues to evolve, it will play an even greater role in transforming industries and optimizing workflows.',
    },
  ],
};

export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'ru',
    phrase:
      'Онтологический подход к построению цифровой тени ИТ-сектора регионального рынка труда',
    search: 'Google',
    countDocuments: '17 тыс.',
    link: 'https://www.google.com/search?q=Онтологический+подход+к+построению+цифровой+тени+ИТ-сектора+регионального+рынка+труда',
  },
  {
    id: 2,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '14 тыс.',
    link: 'https://yandex.ru/search/?text=Онтологический+подход+к+построению+цифровой+тени+ИТ-сектора+регионального+рынка+труда',
  },
  {
    id: 3,
    search: 'Bing',
    language: 'ru',
    countDocuments: '9 тыс.',
    link: 'https://www.bing.com/search?q=Онтологический+подход+к+построению+цифровой+тени+ИТ-сектора+регионального+рынка+труда',
  },
  {
    id: 4,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '4 тыс.',
    link: 'https://search.yahoo.com/search?p=Онтологический+подход+к+построению+цифровой+тени+ИТ-сектора+регионального+рынка+труда',
  },
  {
    id: 5,
    numberPhrase: 2,
    language: 'ru',
    phrase: 'Полетайкин Алексей Николаевич. Кубгу',
    search: 'Google',
    countDocuments: '12 тыс.',
    link: 'https://www.google.com/search?q=Полетайкин+Алексей+Николаевич+Кубгу',
  },
  {
    id: 6,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '9 тыс.',
    link: 'https://yandex.ru/search/?text=Полетайкин+Алексей+Николаевич+Кубгу',
  },
  {
    id: 7,
    search: 'Bing',
    language: 'ru',
    countDocuments: '4 тыс.',
    link: 'https://www.bing.com/search?q=Полетайкин+Алексей+Николаевич+Кубгу',
  },
  {
    id: 8,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '3 тыс.',
    link: 'https://search.yahoo.com/search?p=Полетайкин+Алексей+Николаевич+Кубгу',
  },
  {
    id: 9,
    numberPhrase: 3,
    language: 'ru',
    phrase: 'Онтологический подход',
    search: 'Google',
    countDocuments: '132 тыс.',
    link: 'https://www.google.com/search?q=Онтологический+подход',
  },
  {
    id: 10,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '100 тыс.',
    link: 'https://yandex.ru/search/?text=Онтологический+подход',
  },
  {
    id: 11,
    search: 'Bing',
    language: 'ru',
    countDocuments: '80 тыс.',
    link: 'https://www.bing.com/search?q=Онтологический+подход',
  },
  {
    id: 12,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '68 тыс.',
    link: 'https://search.yahoo.com/search?p=Онтологический+подход',
  },
  {
    id: 13,
    numberPhrase: 4,
    language: 'ru',
    phrase: 'Построению цифровой тени ИТ-сектора',
    search: 'Google',
    countDocuments: '183 тыс.',
    link: 'https://www.google.com/search?q=Построению+цифровой+тени+ИТ-сектора',
  },
  {
    id: 14,
    search: 'Яндекс',
    language: 'ru',
    countDocuments: '163 тыс.',
    link: 'https://yandex.ru/search/?text=Построению+цифровой+тени+ИТ-сектора',
  },
  {
    id: 15,
    search: 'Bing',
    language: 'ru',
    countDocuments: '100 тыс.',
    link: 'https://www.bing.com/search?q=Построению+цифровой+тени+ИТ-сектора',
  },
  {
    id: 16,
    search: 'Yahoo',
    language: 'ru',
    countDocuments: '84 тыс.',
    link: 'https://search.yahoo.com/search?p=Построению+цифровой+тени+ИТ-сектора',
  },
  {
    id: 17,
    numberPhrase: 1,
    language: 'eng',
    phrase:
      'An ontological approach to building the digital shadow of the IT sector of the regional labor market',
    search: 'Google',
    countDocuments: '594 тыс.',
    link: 'https://www.google.com/search?q=An+ontological+approach+to+building+the+digital+shadow+of+the+IT+sector+of+the+regional+labor+market',
  },
  {
    id: 18,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '473 тыс.',
    link: 'https://yandex.ru/search/?text=An+ontological+approach+to+building+the+digital+shadow+of+the+IT+sector+of+the+regional+labor+market',
  },
  {
    id: 19,
    search: 'Bing',
    language: 'eng',
    countDocuments: '211.6 тыс.',
    link: 'https://www.bing.com/search?q=An+ontological+approach+to+building+the+digital+shadow+of+the+IT+sector+of+the+regional+labor+market',
  },
  {
    id: 20,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '78.4 тыс.',
    link: 'https://search.yahoo.com/search?p=An+ontological+approach+to+building+the+digital+shadow+of+the+IT+sector+of+the+regional+labor+market',
  },
  {
    id: 21,
    numberPhrase: 2,
    language: 'eng',
    phrase: 'Poletaykin Alexey Nikolaevich. KubGU',
    search: 'Google',
    countDocuments: '6.3 тыс.',
    link: 'https://www.google.com/search?q=Poletaykin+Alexey+Nikolaevich+KubGU',
  },
  {
    id: 22,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '5.6 тыс.',
    link: 'https://yandex.ru/search/?text=Poletaykin+Alexey+Nikolaevich+KubGU',
  },
  {
    id: 23,
    search: 'Bing',
    language: 'eng',
    countDocuments: '3.1 тыс.',
    link: 'https://www.bing.com/search?q=Poletaykin+Alexey+Nikolaevich+KubGU',
  },
  {
    id: 24,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '2.9 тыс.',
    link: 'https://search.yahoo.com/search?p=Poletaykin+Alexey+Nikolaevich+KubGU',
  },
  {
    id: 25,
    numberPhrase: 3,
    language: 'eng',
    phrase: 'The ontological approach',
    search: 'Google',
    countDocuments: '14.8 млн.',
    link: 'https://www.google.com/search?q=The+ontological+approach',
  },
  {
    id: 26,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '12.7 млн.',
    link: 'https://yandex.ru/search/?text=The+ontological+approach',
  },
  {
    id: 27,
    search: 'Bing',
    language: 'eng',
    countDocuments: '9.7 млн.',
    link: 'https://www.bing.com/search?q=The+ontological+approach',
  },
  {
    id: 28,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '7.8 млн.',
    link: 'https://search.yahoo.com/search?p=The+ontological+approach',
  },
  {
    id: 29,
    numberPhrase: 4,
    language: 'eng',
    phrase: 'Building the digital shadow of the IT sector',
    search: 'Google',
    countDocuments: '218 млн.',
    link: 'https://www.google.com/search?q=Building+the+digital+shadow+of+the+IT+sector',
  },
  {
    id: 30,
    search: 'Яндекс',
    language: 'eng',
    countDocuments: '189 млн.',
    link: 'https://yandex.ru/search/?text=Building+the+digital+shadow+of+the+IT+sector',
  },
  {
    id: 31,
    search: 'Bing',
    language: 'eng',
    countDocuments: '78.1 млн.',
    link: 'https://www.bing.com/search?q=Building+the+digital+shadow+of+the+IT+sector',
  },
  {
    id: 32,
    search: 'Yahoo',
    language: 'eng',
    countDocuments: '73.9 млн.',
    link: 'https://search.yahoo.com/search?p=Building+the+digital+shadow+of+the+IT+sector',
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
    {
      title: 'Computer Vision for Automated Data Analysis',
      authors: 'David Brown, Lisa Miller',
      description:
        'The authors discuss how computer vision and machine learning can be used for automated data analysis. The book focuses on techniques for object detection, recognition, and classification, providing insights into how these methods are applied in industries such as manufacturing, security, and medical imaging.',
    },
    {
      title:
        'Introduction to Machine Vision and Its Applications',
      authors: 'Robert Davis, Emily White',
      description:
        'This introductory book explores the fundamentals of machine vision and its practical applications. It highlights how machine vision can be used for data identification, anomaly detection, and real-time image processing across various sectors like robotics, automotive, and surveillance.',
    },
    {
      title:
        'Machine Vision Systems for Industrial Automation',
      authors: 'James Taylor, Richard Clark',
      description:
        'The book examines the implementation of machine vision systems in industrial automation. It covers topics such as defect detection, quality control, and system integration for efficient manufacturing processes using machine vision and data identification techniques.',
    },
  ],
  saits: [
    {
      link: 'https://www.machinevisiononline.org/',
      description:
        'A comprehensive resource dedicated to the study of machine vision technologies, offering articles, case studies, and information on the latest advancements in data identification and detection systems. The site covers various industries, including manufacturing, healthcare, and security.',
    },
    {
      link: 'https://www.computervision.com/',
      description:
        'A platform that covers the latest trends and breakthroughs in computer vision and machine learning. It includes resources for those interested in the applications of machine vision in data detection, analysis, and identification, with a focus on automation and artificial intelligence.',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю пить кофе',
  video:
    '/UX и UI инструменты для  веб-дизайна и мобильного дизайна.mp4',
  preview: '/ui.png',
};
export const UemkResponse = {
  titleKurs: '',
  descriptionKurs: '',
  lectures: [
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
  ],
  tasks: [
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
    {
      title: '',
      pathDocument: '',
    },
  ],
  dopMatireals: [
    {
      title: '',
      description: '',
      link: '',
    },
    {
      title: '',
      description: '',
      link: '',
    },
    {
      title: '',
      description: '',
      link: '',
    },
  ],
  authour: 'Савонина Аделина',
  kriteri: '',
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
