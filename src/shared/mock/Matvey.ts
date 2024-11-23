import { Data } from '@shared/types';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
  DevicePhoneMobileIcon,
  InboxIcon,
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

export const referatResponseRu = [
  {
    title: 'Введение',
    body: 'Безопасность веб-приложений — это фундаментальная составляющая современной разработки, направленная на защиту данных пользователей, предотвращение сбоев в работе систем и минимизацию рисков несанкционированного доступа. В условиях постоянно растущей зависимости от веб-сервисов угроза атак становится критически важной проблемой, требующей внедрения эффективных стратегий защиты. Введение в тему безопасности фокусируется на важности создания устойчивых систем, которые не только защищают данные, но и укрепляют доверие пользователей.',
  },
  {
    title: 'Основные угрозы и уязвимости веб-приложений',
    body: 'Современные веб-приложения сталкиваются с множеством угроз, включая SQL-инъекции, межсайтовые скрипты (XSS), атаки с использованием CSRF и эксплойты в сторонних библиотеках. Эти уязвимости часто возникают из-за ошибок в коде, недостаточного тестирования или использования устаревших технологий. Хакеры могут эксплуатировать такие слабые места для кражи конфиденциальной информации, нарушения работы приложений или их полного выведения из строя. Анализ основных типов уязвимостей позволяет разработчикам понимать природу угроз и принимать проактивные меры для их предотвращения.',
  },
  {
    title: 'Подходы к обеспечению безопасности',
    body: 'Для борьбы с уязвимостями необходимо применять комплексный подход, включающий внедрение защищенной архитектуры, регулярные аудиты кода и мониторинг системы. Ключевую роль играет разработка с учетом принципов безопасного программирования: использование проверенных библиотек, защита данных на уровне шифрования, а также реализация строгой системы контроля доступа. Кроме того, тестирование на проникновение и использование автоматизированных средств анализа помогают своевременно выявлять и устранять слабые места в системе. Эффективная стратегия безопасности строится на принципах многослойной защиты, где каждая часть системы усиливает общую устойчивость к атакам.',
  },
  {
    title:
      'Текущие вызовы и перспективы в борьбе с уязвимостями',
    body: 'Несмотря на значительный прогресс в технологиях безопасности, разработчики продолжают сталкиваться с новыми вызовами. Быстрое развитие технологий, таких как искусственный интеллект и микросервисная архитектура, увеличивает сложность систем и требует обновления подходов к защите. Кроме того, необходимость балансировки между удобством для пользователей и уровнем безопасности создает дополнительное напряжение. Перспективы борьбы с уязвимостями включают усиление автоматизации процессов обнаружения угроз, внедрение AI-алгоритмов для анализа поведения системы и создание глобальных стандартов безопасности для унификации подходов.',
  },
  {
    title: 'Заключение: Значимость профилактики и обучения',
    body: 'Обеспечение безопасности веб-приложений — это не одноразовая задача, а постоянный процесс, требующий адаптации к новым вызовам и угрозам. Применение проактивных мер, таких как регулярное обучение разработчиков основам безопасного программирования, тестирование и мониторинг системы, позволяет минимизировать риски и создать более устойчивые приложения. В будущем акцент будет сделан на интеграции автоматизированных решений и международном сотрудничестве для борьбы с киберугрозами, что станет ключом к созданию безопасной цифровой среды для всех пользователей.',
  },
];

export const referatResponseEng = [
  {
    title: 'Introduction',
    body: 'Web application security is a fundamental component of modern development aimed at protecting user data, preventing system failures and minimizing the risks of unauthorized access. With the ever-increasing dependence on web services, the threat of attacks is becoming a critical issue that requires the implementation of effective protection strategies. The introduction to the topic of security focuses on the importance of creating sustainable systems that not only protect data, but also strengthen user trust.',
  },
  {
    title:
      'The main threats and vulnerabilities of web applications',
    body: 'Modern web applications face a variety of threats, including SQL injection, cross-site scripting (XSS), CSRF attacks, and exploits in third-party libraries. These vulnerabilities are often caused by errors in the code, insufficient testing, or the use of outdated technologies. Hackers can exploit such weaknesses to steal confidential information, disrupt applications, or completely disable them. Analyzing the main types of vulnerabilities allows developers to understand the nature of threats and take proactive measures to prevent them.',
  },
  {
    title: 'Approaches to security',
    body: 'To combat vulnerabilities, it is necessary to apply an integrated approach, including the implementation of a secure architecture, regular code audits and system monitoring. The key role is played by the development taking into account the principles of secure programming: the use of proven libraries, data protection at the encryption level, as well as the implementation of a strict access control system. In addition, penetration testing and the use of automated analysis tools help to identify and eliminate weaknesses in the system in a timely manner. An effective security strategy is based on the principles of multi-layered protection, where each part of the system enhances the overall resistance to attacks.',
  },
  {
    title:
      'Current challenges and prospects in the fight against vulnerabilities',
    body: 'Despite significant progress in security technologies, developers continue to face new challenges. The rapid development of technologies such as artificial intelligence and micro-service architecture increases the complexity of systems and requires updating security approaches. In addition, the need to balance user convenience and the level of security creates additional stress. The prospects for dealing with vulnerabilities include increased automation of threat detection processes, the introduction of AI algorithms for analyzing system behavior, and the creation of global security standards to unify approaches.',
  },
  {
    title:
      'Conclusion: The importance of prevention and education',
    body: 'Securing web applications is not a one-time task, but an ongoing process that requires adaptation to new challenges and threats. The use of proactive measures, such as regular training of developers in the basics of secure programming, testing and monitoring of the system, allows you to minimize risks and create more sustainable applications. In the future, the focus will be on the integration of automated solutions and international cooperation to combat cyber threats, which will be the key to creating a secure digital environment for all users.',
  },
];

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

export const reportSearchResponse = [
  {
    id: 1,
    numberPhrase: 1,
    language: 'рус',
    phrase: '',
    search: 'Google',
    countDocuments: '115200000',
    link: 'https://www.google.com/search?q=%D0%9A%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D1%8F%D0%B8%D1%85+%D0%B8+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%B8%D1%85+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=784&ei=UkfwZqGaE6aKkdUP7-nwmQ8&ved=0ahUKEwihi5_i_daIAxUmRaQEHe80PPMQ4dUDCA8&oq=%D0%9A%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D1%8F%D0%B8%D1%85+%D0%B8+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%B8%D1%85+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F&gs_lp=Egxnd3Mtd2l6LXNlcnAibdCa0LjQsdC10YDQsdC10LfQvtC_0LDRgdC90L7RgdGC0Ywg0LIg0LLQtdCxINC_0YDQuNC70L7QttC10L3Rj9C40YUg0Lgg0LzQtdGC0L7QtNGLINC40YUg0YPRgdGC0YDQsNC90LXQvdC40Y9IAFAAWABwAHgBkAEAmAEAoAEAqgEAuAEMyAEAmAIAoAIAmAMA4gMFEgExIECSBwCgBwA&sclient=gws-wiz-serp',
  },
  {
    id: 2,
    search: 'Яндекс',
    countDocuments: '2000',
    link: 'https://yandex.ru/search/?text=%D0%9A%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%D1%85+%D0%B8+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D0%B8%D1%85+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F&clid=2411726&lr=35',
  },
  {
    id: 3,
    search: 'Bing',
    countDocuments: '8830',
    link: 'https://www.bing.com/search?q=Кибербезопасность+в+веб+приложеняих+и+методы+их+устранения&search=&form=QBLH&rdr=1&rdrig=BB26C99F041749708E66D2BB3E3DECD7',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'рус',
    phrase: 'Подколзин Вадим Владиславович',
    search: 'Google',
    countDocuments: '5830',
    link: 'https://www.google.com/search?q=%D0%BF%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD+%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC+%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=784&ei=j0fwZunXHbfVkdUPz8ia4QU&oq=%D0%BF%D0%BE%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD+%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC+%D0%B2%D0%BB&gs_lp=Egxnd3Mtd2l6LXNlcnAiItC_0L7QtNC60L7Qu9C30LjQvSDQstCw0LTQuNC8INCy0LsqAggAMgUQABiABDIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYogQYiQUyCBAAGIAEGKIESJA3UP0GWJQxcAV4AZABAZgB4wOgAe0dqgEKMC4xNS4wLjEuM7gBA8gBAPgBAZgCF6AC7RuoAgrCAhYQABgDGLQCGOUCGOoCGIwDGI8B2AEBwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICCBAAGIAEGLEDwgITEAAYgAQYARixAxhDGIoFGAoYKsICDBAAGIAEGAEYsQMYCsICCRAAGIAEGAEYCsICDxAAGIAEGAEYsQMYgwEYCsICCxAAGIAEGAEYChgqwgIJEC4YgAQYARgKwgIQEAAYgAQYsQMYQxiDARiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIKEAAYgAQYQxiKBcICDRAAGIAEGLEDGEMYigXCAggQLhiABBixA8ICCxAuGIAEGLEDGIMBwgIEEAAYA8ICCxAAGIAEGLEDGIoFwgILEC4YgAQYxwEYrwHCAgUQLhiABMICCBAuGIAEGNQCwgIGEAAYFhgewgIUEC4YgAQYlwUY3AQY3gQY3wTYAQKYAwziAwUSATEgQLoGBAgBGAq6BgYIAhABGBSSBwo1LjE1LjAuMS4yoAf60gE&sclient=gws-wiz-serp',
  },
  {
    id: 5,
    search: 'Яндекс',
    countDocuments: '2010',
    link: 'https://yandex.ru/search/?text=%D0%9F%D0%9E%D0%B4%D0%BA%D0%BE%D0%BB%D0%B7%D0%B8%D0%BD+%D0%B2%D0%B0%D0%B4%D0%B8%D0%BC+%D0%B2%D0%BB%D0%B0%D0%B4%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D0%BE%D0%B2%D0%B8%D1%87&lr=35&clid=2411726',
  },
  {
    id: 6,
    search: 'Bing',
    countDocuments: '93800',
    link: 'https://www.bing.com/search?go=Поиск&q=подколзин+вадим+владиславович&qs=n&form=QBRE&sp=-1&lq=0&pq=подколзин+вадим+владиславович&sc=0-29&sk=&cvid=B5A274DF38BA46C08177D9A62E5B021F&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'рус',
    phrase: 'Кибербезопасность',
    search: 'Google',
    countDocuments: '3680000',
    link: 'https://www.google.com/search?q=%D0%BA%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=784&ei=UUrwZvOhPIaskdUPs6nKsAw&ved=0ahUKEwizjqbQgNeIAxUGVqQEHbOUEsYQ4dUDCA8&uact=5&oq=%D0%BA%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C&gs_lp=Egxnd3Mtd2l6LXNlcnAiItC60LjQsdC10YDQsdC10LfQvtC_0LDRgdC90L7RgdGC0YwyBRAAGIAEMggQABiABBixAzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESJE1UKsRWN8ycAJ4AJABAZgBtQagAYsfqgEOMC4xMS4yLjIuMC4xLjG4AQPIAQD4AQGYAhKgAs4ZwgIIEAAYgAQYsAPCAgsQABiABBiwAxiiBMICDRAuGIAEGEMY1AIYigXCAgsQLhiABBixAxiDAcICBRAuGIAEwgIQEAAYgAQYsQMYQxiDARiKBcICCxAAGIAEGLEDGIMBwgIIEC4YgAQYsQPCAhwQLhiABBhDGNQCGIoFGJcFGNwEGN4EGOAE2AEBwgIKEAAYgAQYQxiKBcICChAuGIAEGEMYigXCAgsQLhiABBjHARivAZgDAIgGAZAGBroGBggBEAEYFJIHCjIuMTEuMi4yLjGgB-i3AQ&sclient=gws-wiz-serp',
  },
  {
    id: 8,
    search: 'Яндекс',
    countDocuments: '10000',
    link: 'https://yandex.ru/search/?text=%D0%BA%D0%B8%D0%B1%D0%B5%D1%80%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C&lr=35&clid=2411726',
  },
  {
    id: 9,
    search: 'Bing',
    countDocuments: '95800',
    link: 'https://www.bing.com/search?q=кибербезопасность&qs=LT&pq=кибербезопа&sc=10-11&cvid=89499D9A0B314EA49F4BFB2DCFA3D434&FORM=QBRE&sp=1&lq=0',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'рус',
    phrase: 'Классификация уявимостей в веб приложении',
    search: 'Google',
    countDocuments: '235000',
    link: 'https://www.google.com/search?q=%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=784&ei=CEzwZq6XA-amkdUPjfDL6AU&ved=0ahUKEwiuu5ehgteIAxVmU6QEHQ34El0Q4dUDCA8&uact=5&oq=%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8&gs_lp=Egxnd3Mtd2l6LXNlcnAiUNC60LvQsNGB0YHQuNGE0LjQutCw0YbQuNGPINGD0Y_Qt9Cy0LjQvNC-0YHRgtC10Lkg0LIg0LLQtdCxINC_0YDQuNC70L7QttC10L3QuNC4MhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhMQABiABBhDGLQCGIoFGOoC2AEBMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQLhgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECMhYQABgDGLQCGOUCGOoCGIwDGI8B2AECSIBYUKcLWOtVcAJ4AZABAJgBAKABAKoBALgBA8gBAPgBAZgCAqACGKgCFMICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFmAMMiAYBkAYKugYECAEYB7oGBggCEAEYCpIHATKgBwA&sclient=gws-wiz-serp',
  },
  {
    id: 11,
    search: 'Яндекс',
    countDocuments: '52000',
    link: 'https://yandex.ru/search/?text=%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8&lr=35&clid=2411726',
  },
  {
    id: 12,
    search: 'Bing',
    countDocuments: '24700',
    link: 'https://www.bing.com/search?go=Поиск&q=классификация+уязвимостей+в+веб+приложении&qs=n&form=QBRE&sp=-1&lq=0&pq=классификация+уязвимостей+в+веб+приложении&sc=4-42&sk=&cvid=72358307E0E94986921243524921449B&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'рус',
    phrase:
      'Методы устранения уязвимостей в веб приложении',
    search: 'Google',
    countDocuments: '260000',
    link: 'https://www.google.com/search?q=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8++&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=784&ei=tE3wZsVsu5yR1Q-20MXwCw&ved=0ahUKEwjFlqDtg9eIAxU7TqQEHTZoEb4Q4dUDCA8&uact=5&oq=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8++&gs_lp=Egxnd3Mtd2l6LXNlcnAiWdCc0LXRgtC-0LTRiyDRg9GB0YLRgNCw0L3QtdC90LjRjyDRg9GP0LfQstC40LzQvtGB0YLQtdC5INCyINCy0LXQsSDQv9GA0LjQu9C-0LbQtdC90LjQuCAgSN0CUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgCgAgCYAwCSBwCgBwA&sclient=gws-wiz-serp',
  },
  {
    id: 14,
    search: 'Яндекс',
    countDocuments: '1200',
    link: 'https://yandex.ru/search/?text=%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B+%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F+%D1%83%D1%8F%D0%B7%D0%B2%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D0%B2+%D0%B2%D0%B5%D0%B1+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8&lr=35&clid=2411726',
  },
  {
    id: 15,
    search: 'Bing',
    countDocuments: '21000',
    link: 'https://www.bing.com/search?go=Поиск&q=Методы+устранения+уязвимостей+в+веб+приложении&qs=n&form=QBRE&sp=-1&lq=0&pq=методы+устранения+уязвимостей+в+веб+приложении&sc=3-46&sk=&cvid=658CEC8F0BAF4D0980F06B9839F28BA2&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 16,
    numberPhrase: 1,
    language: 'eng',
    phrase:
      'Cybersecurity in web applications and methods of their elimination',
    search: 'Google',
    countDocuments: '5000000',
    link: 'https://www.google.com/search?q=Cybersecurity+in+web+applications+and+methods+of+their+elimination&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=865&ei=vE3wZtWhO5WJkdUPhPWp0AI&ved=0ahUKEwjV78Lxg9eIAxWVRKQEHYR6CioQ4dUDCA8&uact=5&oq=Cybersecurity+in+web+applications+and+methods+of+their+elimination&gs_lp=Egxnd3Mtd2l6LXNlcnAiQkN5YmVyc2VjdXJpdHkgaW4gd2ViIGFwcGxpY2F0aW9ucyBhbmQgbWV0aG9kcyBvZiB0aGVpciBlbGltaW5hdGlvbjIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYR0i5B1DfA1jfA3ABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgGgAgqYAwCIBgGQBgiSBwExoAcA&sclient=gws-wiz-serp',
  },
  {
    id: 17,
    search: 'Яндекс',
    countDocuments: '100000',
    link: 'https://yandex.ru/search/?text=Cybersecurity+in+web+applications+and+methods+of+their+elimination&lr=35&clid=2411726',
  },
  {
    id: 18,
    search: 'Bing',
    countDocuments: '125000',
    link: 'https://www.bing.com/search?go=Поиск&q=Cybersecurity+in+web+applications+and+methods+of+their+elimination&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=408BE5CA49884EA495CF8AD73AED14A6&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 19,
    numberPhrase: 2,
    language: 'eng',
    phrase: 'Podkolzin Vadim Vladislavovich',
    search: 'Google',
    countDocuments: '23400',
    link: 'https://www.google.com/search?q=Podkolzin+Vadim+Vladislavovich&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=865&ei=g07wZsr_A9KvkdUPyNbQ2Ac&ved=0ahUKEwiKzf3PhNeIAxXSV6QEHUgrFHsQ4dUDCA8&uact=5&oq=Podkolzin+Vadim+Vladislavovich&gs_lp=Egxnd3Mtd2l6LXNlcnAiHlBvZGtvbHppbiBWYWRpbSBWbGFkaXNsYXZvdmljaDIHEAAYgAQYDTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESPgBUABYAHAAeAGQAQCYAZ0BoAGdAaoBAzAuMbgBA8gBAPgBAvgBAZgCAaACqQGYAwCSBwMwLjGgB_8G&sclient=gws-wiz-serp',
  },
  {
    id: 20,
    search: 'Яндекс',
    countDocuments: '15000',
    link: 'https://yandex.ru/search/?text=Podkolzin+Vadim+Vladislavovich&lr=35&clid=2411726',
  },
  {
    id: 21,
    search: 'Bing',
    countDocuments: '66300',
    link: 'https://www.bing.com/search?go=Поиск&q=Podkolzin+Vadim+Vladislavovich&qs=n&form=QBRE&sp=-1&lq=0&pq=cybersecurity+in+web+applications+and+methods+of+their+elimination&sc=8-66&sk=&cvid=314C01C62F084B2FB78DB98B284CFFAA&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 22,
    numberPhrase: 3,
    language: 'eng',
    phrase: 'Cybersecurity',
    search: 'Google',
    countDocuments: '876000000',
    link: 'https://www.google.com/search?q=Cybersecurity&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=865&ei=ME_wZqT-FKqakdUPi--d4Q0&ved=0ahUKEwik1s2ihdeIAxUqTaQEHYt3J9wQ4dUDCA8&uact=5&oq=Cybersecurity&gs_lp=Egxnd3Mtd2l6LXNlcnAiDUN5YmVyc2VjdXJpdHkyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAuGIAEMgsQLhiABBjRAxjHATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESIaqA1DPpQNYz6UDcAF4AJABAJgB3AGgAdwBqgEDMi0xuAEDyAEA-AEC-AEBmAICoALvAcICChAAGIAEGLADGA3CAgsQABiABBiwAxiiBMICCxAAGLADGKIEGIkFmAMAiAYBkAYFkgcFMS4wLjGgB-gL&sclient=gws-wiz-serp',
  },
  {
    id: 23,
    search: 'Яндекс',
    countDocuments: '400000',
    link: 'https://yandex.ru/search/?text=Cybersecurity&lr=35&clid=2411726',
  },
  {
    id: 24,
    search: 'Bing',
    countDocuments: '2821000',
    link: 'https://www.bing.com/search?go=Поиск&q=Cybersecurity&qs=n&form=QBRE&sp=-1&lq=0&pq=cybersecurity&sc=10-13&sk=&cvid=47FCBA0FE17D4239B122894082C4FD1F&ghsh=0&ghacc=0&ghpl=',
  },
  {
    id: 25,
    numberPhrase: 4,
    language: 'eng',
    phrase:
      'Classification of vulnerabilities in web applications',
    search: 'Google',
    countDocuments: '160000000',
    link: 'https://www.google.com/search?q=Classification+of+vulnerabilities+in+web+application&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=865&ei=vk_wZsr0E4mfkdUPndyC6Q8&ved=0ahUKEwjKy6fmhdeIAxWJT6QEHR2uIP0Q4dUDCA8&uact=5&oq=Classification+of+vulnerabilities+in+web+application&gs_lp=Egxnd3Mtd2l6LXNlcnAiNENsYXNzaWZpY2F0aW9uIG9mIHZ1bG5lcmFiaWxpdGllcyBpbiB3ZWIgYXBwbGljYXRpb24yChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigVI5wRQgQNYgQNwAXgBkAEAmAEAoAEAqgEAuAEDyAEA-AEC-AEBmAIBoAIHmAMAiAYBkAYKkgcBMaAHAA&sclient=gws-wiz-serp',
  },
  {
    id: 26,
    search: 'Яндекс',
    countDocuments: '780000',
    link: 'https://yandex.ru/search/?text=Classification+of+vulnerabilities+in+web+application&lr=35&clid=2411726',
  },
  {
    id: 27,
    search: 'Bing',
    link: 'https://www.bing.com/search?go=Поиск&q=Classification+of+vulnerabilities+in+web+application&qs=n&form=QBRE&sp=-1&lq=0&pq=cybersecurity&sc=10-13&sk=&cvid=5A7BEDD269ED42569ECC6FC23C490715&ghsh=0&ghacc=0&ghpl=',
    countDocuments: '817000',
  },
  {
    id: 28,
    numberPhrase: 5,
    language: 'eng',
    phrase:
      'Methods for eliminating vulnerabilities in a web application',
    search: 'Google',
    countDocuments: '569000',
    link: 'https://www.google.com/search?q=Methods+for+eliminating+vulnerabilities+in+a+web+application&client=safari&sca_esv=62d1c2127d43278b&sca_upv=1&rls=en&biw=1512&bih=865&ei=d1DwZv70G_GLkdUPlLWikQc&ved=0ahUKEwi-jMu-hteIAxXxRaQEHZSaKHIQ4dUDCA8&uact=5&oq=Methods+for+eliminating+vulnerabilities+in+a+web+application&gs_lp=Egxnd3Mtd2l6LXNlcnAiPE1ldGhvZHMgZm9yIGVsaW1pbmF0aW5nIHZ1bG5lcmFiaWxpdGllcyBpbiBhIHdlYiBhcHBsaWNhdGlvbjIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYR0i0C1DuAlidCXABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgGgAgaYAwCIBgGQBgiSBwExoAcA&sclient=gws-wiz-serp',
  },
  {
    id: 29,
    search: 'Яндекс',
    countDocuments: '340600',
    link: 'https://yandex.ru/search/?text=Methods+for+eliminating+vulnerabilities+in+a+web+application&lr=35&clid=2411726',
  },
  {
    id: 30,
    search: 'Bing',
    countDocuments: '73600',
    link: 'https://www.bing.com/search?go=Поиск&q=Methods+for+eliminating+vulnerabilities+in+a+web+application&qs=n&form=QBRE&sp=-1&lq=0&pq=&sc=0-0&sk=&cvid=55F9838FDCDF49D5859FE720D9007000&ghsh=0&ghacc=0&ghpl=',
  },
];
export const LibraryResponse = [
  {
    title:
      'Безопасность веб-приложений: лучшие практики и уязвимости',
    authors: 'Редакция itProger',
    description:
      'Статья описывает ключевые уязвимости веб-приложений, такие как SQL-инъекции, XSS и CSRF, а также методы защиты от них. Рассматриваются практики безопасности, включая использование двухфакторной аутентификации, патчи для сторонних библиотек и мониторинг систем для быстрого обнаружения атак.',
    source: 'itProger, 2024',
  },
  {
    title:
      'Безопасность веб-приложений: анализ методов защиты от атак на уровне Backend',
    authors: 'Редакция Хабр',
    description:
      'Материал посвящен методам защиты веб-приложений от угроз на уровне бэкенда, включая предотвращение атак через управление сеансами, защиту аутентификации и выявление аномалий в действиях пользователей. Рассматриваются принципы безопасности, такие как шифрование данных и мониторинг системы.',
    source: 'Хабр, 2024',
  },
];

export const LinkResponse = {
  literature: [
    {
      title: 'OWASP Top Ten: Защита веб-приложений',
      authors: 'OWASP Foundation',
      description:
        'Краткое и доступное руководство по основным угрозам безопасности веб-приложений, включая уязвимости, входящие в список OWASP Top Ten. Описаны методы защиты и лучшие практики разработки безопасного ПО.',
    },
    {
      title: 'Web Application Security, A Beginner’s Guide',
      authors: 'Bryan Sullivan, Vincent Liu',
      description:
        'Практическое руководство для начинающих по обеспечению безопасности веб-приложений. Рассматриваются наиболее распространенные угрозы и методы их предотвращения, включая примеры на реальных кейсах.',
    },
    {
      title: 'Hacking Exposed Web Applications',
      authors: 'Joel Scambray, Vincent Liu, Caleb Sima',
      description:
        'Книга, посвященная методам выявления и устранения уязвимостей в веб-приложениях. Содержит информацию о новых технологиях и подходах к тестированию безопасности.',
    },
  ],
  saits: [
    {
      link: 'https://owasp.org',
      description:
        'Официальный сайт OWASP (Open Web Application Security Project) — ведущей организации, предоставляющей ресурсы, инструменты и руководства по обеспечению безопасности веб-приложений.',
    },
    {
      link: 'https://portswigger.net',
      description:
        'Сайт компании PortSwigger, разработчика инструмента Burp Suite для тестирования безопасности. Содержит блоги, учебные материалы и Web Security Academy — бесплатный ресурс для изучения кибербезопасности.',
    },
  ],
};

export const PersonalLink = {
  title: 'Каждый раз перед сдачей проекта',
  video: '/VID_20241120_194536_534.mp4',
  preview: '/harlamov.png',
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
