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
    imageUrl: '/dima.jpg',
    name: 'Савинов Дмитрий Евгеньевич',
    profession: 'COO (Операционный директор)',
    education:
      'Факультет компьютерных технологий и прикладной математики Кафедра информационных технологий Специальность «Прикладная математика и информатика»',
    themeGraduationPaper:
      'Магистерская работа: Универсальная цифровая образовательная платформа',
    teacher: 'Научный руководитель: Лукащик Елена Павловна',
  },
  aboutMe: [
    {
      title: 'Личная информация',
      items: [
        {
          label: 'ФИО',
          icon: UserIcon,
          text: 'Савинов Дмитрий Евгеньевич',
        },
        {
          label: 'Дата рождения',
          icon: CalendarIcon,
          text: '01.02.2001',
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
          text: 'МБОУ СОШ №5 / 2008-2019',
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
          label: 'Incetro LLC',
          icon: BriefcaseIcon,
          text: 'Операционный директор',
        },
      ],
    },
    {
      title: 'Навыки и специализация',
      items: [
        {
          label: 'Технологический стек',
          text: 'Swift,SwiftUI, UIKit, TCA, Combine',
        },
      ],
    },
  ],
};
export const mainResponseEng: Data = {
  info: {
    imageUrl: '/dima.jpg',
    name: 'Savinov Dmitry Evgenievich',
    profession: 'COO (Chief Operating Officer)',
    education:
      'Faculty of Computer Technologies and Applied Mathematics Department of Information Technologies Specialty “Applied Mathematics and Computer Science”',
    themeGraduationPaper:
      "Master's thesis: Universal digital educational platform",
    teacher: 'Supervisor: Elena Pavlovna Lukashchik',
  },
  aboutMe: [
    {
      title: 'Personal information',
      items: [
        {
          label: 'FIO',
          icon: UserIcon,
          text: 'Savinov Dmitry Evgenievich',
        },
        {
          label: 'Date of birth',
          icon: CalendarIcon,
          text: '01.02.2001',
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
          text: 'MBOU Secondary School No. 5 / 2008-2019',
        },
      ],
    },
    {
      title: 'Experience',
      items: [
        {
          label: 'Incetro LLC',
          icon: BriefcaseIcon,
          text: 'COO (Chief Operating Officer)',
        },
      ],
    },
    {
      title: 'Skills and Specialization',
      items: [
        {
          label: 'Technology stack',
          text: 'Swift,SwiftUI, UIKit, TCA, Combine',
        },
      ],
    },
  ],
};

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'В эпоху цифровизации образование становится все более интегрированным с технологиями. Универсальные цифровые образовательные платформы (УЦОП) играют ключевую роль в обеспечении доступности и персонализации обучения. Они объединяют различные образовательные ресурсы, инструменты и технологии, предоставляя пользователям удобный доступ к знаниям. Настоящий реферат посвящен анализу существующих решений, проблем, возникающих при создании таких платформ, и подходам к их разработке.',
  },
  {
    title: 'Обзор существующих решений и анализ проблемы',
    body: 'Современные образовательные платформы, такие как Moodle, Coursera, Blackboard и Google Classroom, предлагают разнообразные функции, включая управление учебным процессом, доступ к онлайн-курсам, автоматизацию тестирования и организацию коммуникации между участниками. Однако, несмотря на широкий функционал, многие из этих решений имеют серьезные ограничения. \n Во-первых, большинство платформ обладают фрагментарным подходом и не предоставляют универсального решения, охватывающего все аспекты образовательного процесса. Во-вторых, адаптивность таких систем ограничена, что снижает их эффективность для индивидуального обучения. Кроме того, многие платформы отличаются высокой стоимостью внедрения и поддержки, что делает их недоступными для образовательных учреждений с ограниченными финансовыми ресурсами. Наконец, существуют серьезные проблемы с интеграцией различных инструментов и сервисов в единую экосистему, что часто сопровождается техническими сложностями.\n Эти проблемы подчеркивают необходимость создания универсальной платформы, которая сочетала бы широкую функциональность, гибкость, адаптивность и доступность.',
  },
  {
    title: 'Методология и подход к разработке',
    body: 'Разработка универсальной цифровой образовательной платформы основывалась на нескольких ключевых принципах. Центральным элементом архитектуры системы стал модульный подход, позволяющий обеспечивать гибкость и масштабируемость. Для персонализации обучения применялись алгоритмы искусственного интеллекта и машинного обучения, которые позволяют адаптировать курсы под индивидуальные потребности студентов. Интеграция с внешними сервисами стала важным аспектом, что позволило системе взаимодействовать с другими образовательными инструментами и базами данных. Большое внимание было уделено удобству интерфейса и соблюдению принципов инклюзивного дизайна, что обеспечило доступность платформы для пользователей с ограниченными возможностями. Важной характеристикой платформы стала кроссплатформенность, благодаря которой она могла работать на различных устройствах и операционных системах. Этапы разработки включали анализ требований, проектирование архитектуры системы, создание прототипа, проведение тестирования и последующее внедрение.',
  },
  {
    title: 'Результаты разработки и тестирования',
    body: 'В ходе реализации проекта была создана прототипная версия платформы, которая включала систему управления курсами, позволяющую создавать, редактировать и структурировать учебные материалы. Персонализированные рекомендации на основе алгоритмов искусственного интеллекта помогали студентам получать доступ к наиболее релевантным материалам, соответствующим их уровню подготовки и интересам. Платформа также обеспечивала интегрированную коммуникацию между участниками образовательного процесса через чат, видеоконференции и форумы. Кроме того, была разработана автоматизированная система оценки знаний, которая предоставляла пользователям мгновенную обратную связь. Пилотное тестирование в группах преподавателей и студентов выявило недостатки, которые впоследствии были устранены.',
  },
  {
    title: 'Заключение и перспективы развития',
    body: 'Универсальная цифровая образовательная платформа представляет собой важный шаг на пути к модернизации образовательных процессов. Она упрощает доступ к знаниям, способствует индивидуализации обучения и повышает его доступность. В перспективе планируется дальнейшее развитие платформы. Основными направлениями станут интеграция технологий виртуальной и дополненной реальности, внедрение блокчейна для защиты данных и сертификации, а также расширение взаимодействия с партнерами и образовательными учреждениями. Создание универсальных платформ такого рода не только повышает качество образования, но и способствует развитию цифровой грамотности общества в целом.',
  },
];

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'In the era of digitalization, education is becoming increasingly integrated with technology. Universal digital educational platforms (UDEPs) play a key role in ensuring the availability and personalization of learning. They combine various educational resources, tools and technologies, providing users with convenient access to knowledge. This paper analyzes existing solutions, problems that arise when creating such platforms, and approaches to their development.',
  },
  {
    title: 'Review of existing solutions and problem analysis',
    body: 'Modern educational platforms such as Moodle, Coursera, Blackboard, and Google Classroom offer a variety of features, including course management, access to online courses, automated testing, and communication between participants. However, despite their broad functionality, many of these solutions have serious limitations. \nFirst, most platforms have a fragmented approach and do not provide a universal solution that covers all aspects of the educational process. Second, the adaptability of such systems is limited, which reduces their effectiveness for individual learning. In addition, many platforms are characterized by high implementation and support costs, making them inaccessible to educational institutions with limited financial resources. Finally, there are serious problems with integrating various tools and services into a single ecosystem, which is often accompanied by technical difficulties. \nThese problems highlight the need to create a universal platform that would combine broad functionality, flexibility, adaptability, and accessibility.',
  },
  {
    title: 'Methodology and approach to development',
    body: 'The development of the universal digital educational platform was based on several key principles. The central element of the system architecture was a modular approach, which ensured flexibility and scalability. To personalize learning, artificial intelligence and machine learning algorithms were used, which allow courses to be adapted to the individual needs of students. Integration with external services became an important aspect, which allowed the system to interact with other educational tools and databases. Much attention was paid to the convenience of the interface and compliance with the principles of inclusive design, which ensured the accessibility of the platform for users with disabilities. An important characteristic of the platform was its cross-platform nature, thanks to which it could work on various devices and operating systems. The development stages included requirements analysis, system architecture design, prototyping, testing and subsequent implementation.',
  },
  {
    title: 'Development and testing results',
    body: 'During the project, a prototype version of the platform was created, which included a course management system that allowed students to create, edit and structure educational materials. Personalized recommendations based on artificial intelligence algorithms helped students access the most relevant materials that matched their level of training and interests. The platform also provided integrated communication between participants in the educational process through chat, video conferences and forums. In addition, an automated knowledge assessment system was developed that provided users with instant feedback. Pilot testing in groups of teachers and students revealed shortcomings that were subsequently eliminated.',
  },
  {
    title: 'Conclusion and development prospects',
    body: 'The universal digital educational platform is an important step towards modernizing educational processes. It simplifies access to knowledge, promotes individualization of learning and increases its availability. Further development of the platform is planned in the future. The main areas will be the integration of virtual and augmented reality technologies, the introduction of blockchain for data protection and certification, as well as the expansion of interaction with partners and educational institutions. The creation of such universal platforms not only improves the quality of education, but also contributes to the development of digital literacy in society as a whole.',
  },
];

export const biographyResponse = {
  articles: [
    {
      title: 'Личностное становление',
      body: 'Школа, университет и все как у всех, кроме одного но… Действительно личностью меня сделал автоспорт. От первой тренировки на калине, до чемпионства в сезоне по time attack в юфо и проходило мое становление',
    },
    {
      title: 'Профессиональное становление',
      body: 'Начинал с разработки iOS приложений на swift под руководством ментора. Постепенно рос в должностях от начинающего до старшего разработчика, пока не стал лидом направления через 3-4 года. После года работы в роли лида стал партнером студии и вошел в роль операционного директора ',
    },
    {
      title: 'Цели, планы и видение будущего',
      body: 'Цель: выстроить студийный бизнес до точки выхода из него за следующие 2 года. Планы: открыть офис, построить вторую машину, жениться. Видение будущего: светлое',
    },
  ],
};
export const reportSearchResponse = [
  {
    id: 1,
    language: 'ru',
    numberPhrase: 1,
    phrase: 'Универсальная цифровая образовательная платформа',
    search: 'Google',
    countDocuments: 80700000,
    link: 'https://www.google.com/search?q=%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&oq=%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORifBTIGCAEQRRg8MgYIAhBFGDzSAQgxMTAwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8',
  },
  {
    id: 2,
    language: 'ru',
    numberPhrase: 1,
    phrase: 'Универсальная цифровая образовательная платформа',
    search: 'Яндекс',
    countDocuments: 1220000,
    link: 'https://ya.ru/search/?text=%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&lr=35',
  },
  {
    id: 3,
    language: 'ru',
    numberPhrase: 1,
    phrase: 'Универсальная цифровая образовательная платформа',
    search: 'Bing',
    countDocuments: 83800,
    link: 'https://www.bing.com/search?q=%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&qs=n&form=QBRE&sp=-1&lq=0&pq=%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&sc=10-48&sk=&cvid=47E5CC3F121948ECAD3B0708F7725288&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 4,
    language: 'ru',
    numberPhrase: 2,
    phrase: 'Лукащик Елена Павловна',
    search: 'Google',
    countDocuments: 468,
    link: 'https://www.bing.com/search?q=%D0%A3%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&qs=n&form=QBRE&sp=-1&lq=0&pq=%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B0%D1%8F+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0&sc=10-48&sk=&cvid=47E5CC3F121948ECAD3B0708F7725288&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 5,
    language: 'ru',
    numberPhrase: 2,
    phrase: 'Лукащик Елена Павловна',
    search: 'Яндекс',
    countDocuments: 4010,
    link: 'https://ya.ru/search/?text=%D0%9B%D1%83%D0%BA%D0%B0%D1%89%D0%B8%D0%BA+%D0%95%D0%BB%D0%B5%D0%BD%D0%B0+%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0&lr=35',
  },
  {
    id: 6,
    language: 'ru',
    numberPhrase: 2,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: 'https://www.bing.com/search?q=%D0%9B%D1%83%D0%BA%D0%B0%D1%89%D0%B8%D0%BA+%D0%95%D0%BB%D0%B5%D0%BD%D0%B0+%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=%D0%BB%D1%83%D0%BA%D0%B0%D1%89%D0%B8%D0%BA+%D0%B5%D0%BB%D0%B5%D0%BD%D0%B0+%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0&sc=2-22&sk=&cvid=0012CC226E2C404CA0FA3C6FDB76B44C&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 7,
    language: 'ru',
    numberPhrase: 3,
    phrase:
      'Технические требования для создания универсальной образовательной платформы',
    search: 'Google',
    countDocuments: 586000,
    link: 'https://www.google.com/search?q=%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5+%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B4%D0%BB%D1%8F+%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B&sca_esv=28155c0739ebc10e&sxsrf=ADLYWILqbKV2wh7Hnqy4dtnpnhfsKF17Yg%3A1733319584550&ei=oFtQZ7iSIc6Ixc8PlIGJoAw&ved=0ahUKEwi44vnQno6KAxVORPEDHZRAAsQQ4dUDCA8&uact=5&oq=%D0%A2%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5+%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B4%D0%BB%D1%8F+%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F+%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9+%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B&gs_lp=Egxnd3Mtd2l6LXNlcnAikAHQotC10YXQvdC40YfQtdGB0LrQuNC1INGC0YDQtdCx0L7QstCw0L3QuNGPINC00LvRjyDRgdC-0LfQtNCw0L3QuNGPINGD0L3QuNCy0LXRgNGB0LDQu9GM0L3QvtC5INC-0LHRgNCw0LfQvtCy0LDRgtC10LvRjNC90L7QuSDQv9C70LDRgtGE0L7RgNC80YsyBxAjGCcY6gIyBxAjGCcY6gIyDRAuGNEDGMcBGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gIyBxAjGCcY6gJInApQgANYgANwAXgAkAEAmAEAoAEAqgEAuAEDyAEA-AEB-AECmAIBoAIGqAIKmAMGkgcBMaAHAA&sclient=gws-wiz-serp',
  },
  {
    id: 8,
    language: 'ru',
    numberPhrase: 3,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 9,
    language: 'ru',
    numberPhrase: 3,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 10,
    language: 'ru',
    numberPhrase: 4,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 11,
    language: 'ru',
    numberPhrase: 4,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 12,
    language: 'ru',
    numberPhrase: 4,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 13,
    language: 'ru',
    numberPhrase: 5,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 14,
    language: 'ru',
    numberPhrase: 5,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 15,
    language: 'ru',
    numberPhrase: 5,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 16,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 17,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 16,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 16,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 18,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 19,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 20,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 21,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 22,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 16,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 23,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 24,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 25,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 26,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 27,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 28,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 29,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
  {
    id: 30,
    language: 'eng',
    numberPhrase: 1,
    phrase: 'Лукащик Елена Павловна',
    search: 'Bing',
    countDocuments: 90700,
    link: '',
  },
];

export const LibraryResponse = [
  {
    title:
      'Персонализированное обучение: обзор теоретических подходов и практических стратегий',
    authors: 'Джонсон, А., Смит, Б., и Тейлор, К.',
    description:
      'Рассматривает теоретические подходы и технологии, такие как ИИ и аналитика данных, для персонализации образовательного процесса',
    source: 'Журнал: Educational Technology & Society, 2020',
  },
  {
    title: 'Проблемы и возможности внедрения цифровых образовательных платформ',
    authors: 'Патель, Р., и Кумар, Н.',
    description:
      'Обсуждает проблемы внедрения цифровых платформ в школах и университетах, включая барьеры для преподавателей и студентов, 2021',
    source: 'Журнал: Computers & Education',
  },
  {
    title:
      'Технология блокчейн в образовании: преимущества и будущие направления',
    authors: 'Шарма, П., и Сингх, В.',
    description:
      'Исследует применение блокчейна для управления образовательными данными и сертификации',
    source:
      'Журнал: International Journal of Educational Technology in Higher Education, 2022',
  },
];
export const LinkResponse = {
  literature: [
    {
      title: 'Электронное обучение и наука обучения',
      authors: 'Рут С. Кларк, Ричард Э. Мейер',
      description:
        'Книга представляет собой руководство по эффективному созданию и внедрению электронных образовательных систем с научным обоснованием.',
      source: 'Книга, четвертое издание 2016г',
    },
    {
      title: 'Книга идей для онлайн-обучения',
      authors: 'Патти Шэнк',
      description:
        'Практическое руководство с идеями и стратегиями для разработки онлайн-курсов.',
      source: 'Книга, второе издание 2011г',
    },
    {
      title: 'Разработка эффективной инструкции',
      authors: 'Гэри Р. Моррисон, Стивен М. Росс, Джерролд Э. Кемп',
      description:
        'Фундаментальное пособие по проектированию образовательных систем с учетом педагогических принципов',
      source: 'Книга, седьмое издание 2012г',
    },
  ],
  saits: [
    {
      link: 'https://www.unesco.org/en',
      description:
        'Образовательные ресурсы и отчеты о внедрении цифровых платформ в странах с различными уровнями доступа к технологиям',
    },
    {
      link: 'https://www.educause.edu/',
      description:
        'Публикует исследования о применении технологий в высшем образовании, включая статьи по LMS, аналитике и ИИ',
    },
    {
      link: 'https://digitalpromise.org/',
      description:
        'НКО, исследующая и продвигающая инновации в образовании. Полезные исследования по внедрению цифровых технологий в школах',
    },
  ],
};

export const PersonalLink = {
  title: 'Люблю автоспорт',
  video: '/Реклама Apple Macintosh 1984.mp4',
  preview: '/images.jpg',
};

export const UemkResponse = {
  titleKurs: 'Разработка мобильных приложений для iOS на архитектуре TCA',
  descriptionKurs:
    'Данный учебный курс посвящен фундаментальным концепциям и методам программирования на языке JavaScript. Курс направлен на изучение и практическое освоение инструментов, которые позволяют создавать динамичные и интерактивные веб-приложения.В ходе занятий студенты познакомятся с основами JavaScript, включая работу с переменными, функциями, массивами и объектами. Уделено особое внимание асинхронному программированию, включая использование колбэков, промисов и async/await. Рассматриваются ключевые аспекты работы с DOM, обработка событий, а также основы модульного подхода к разработке и взаимодействие с API.Студенты научатся применять теоретические знания на практике, разрабатывая интерактивные пользовательские интерфейсы, управляя состоянием приложений и работая с внешними данными. В рамках курса предлагаются практические задания, имитирующие реальные сценарии веб-разработки, которые помогут развить навыки создания удобных, производительных и масштабируемых приложений с использованием JavaScript.',
  lectures: [
    {
      title: 'Введение в JavaScript: основы синтаксиса и работы с данными',
      pathDocument: '/uemkValentin/1.docx',
    },
    {
      title: 'Асинхронное программирование: от колбэков к async/await',
      pathDocument: '/uemkValentin/2.docx',
    },
    {
      title: 'Взаимодействие с DOM: динамическое управление веб-страницей',
      pathDocument: '/uemkValentin/3.docx',
    },
    {
      title: 'Модульный подход в JavaScript: структурирование кода',
      pathDocument: '/uemkValentin/4.docx',
    },
    {
      title: 'Работа с API и управление данными',
      pathDocument: '/uemkValentin/5.docx',
    },
    {
      title: 'Основы проектирования пользовательских интерфейсов',
      pathDocument: '/uemkValentin/6.docx',
    },
    {
      title: 'Производительность и масштабируемость приложений',
      pathDocument: '/uemkValentin/7.docx',
    },
  ],
  tasks: [
    {
      title: 'Динамическое управление DOM',
      pathDocument: '/uemkValentin/tasks/1.docx',
    },
    {
      title: 'Работа с API и управление данными',
      pathDocument: '/uemkValentin/tasks/2.docx',
    },
    {
      title: 'Оптимизация производительности интерфейса',
      pathDocument: '/uemkValentin/tasks/3.docx',
    },
  ],
  dopMatireals: [
    {
      title: 'MDN Web Docs: JavaScript',
      description:
        'Официальная документация по JavaScript, содержащая основы языка, примеры кода и руководство по передовым темам.',
      link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript',
    },
    {
      title: 'Eloquent JavaScript',
      description:
        'Бесплатная онлайн-книга, подробно освещающая основы и более сложные концепции JavaScript, с примерами и задачами.',
      link: 'https://eloquentjavascript.net/',
    },
    {
      title:
        'Asynchronous JavaScript: From Callbacks to Promises to Async/Await',
      description:
        'Статья, объясняющая эволюцию асинхронного программирования в JavaScript с примерами и практическими задачами.',
      link: 'https://javascript.info/async',
    },
  ],
  authour: 'Матюха Валентин',
  kriteri: '/uemkValentin/kriteri.docx',
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
