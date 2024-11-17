import { Data } from '@shared/types';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarIcon,
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
    phrase:
      'Разработка системы распределения  товаров на складе, автоматически определяющимся по эффективности алгоритмом',
    search: 'Google',
    countDocuments: '115000',
    link: 'https://www.google.com/search?as_q=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%2C+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F+%D0%BF%D0%BE+%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%BC&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=lang_ru&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=',
  },
  {
    id: 2,
    search: 'Яндекс',
    countDocuments: '30000',
    link: 'https://ya.ru/search/?text=%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F++%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2+%D0%BD%D0%B0+%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5%2C+%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8+%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F+%D0%BF%D0%BE+%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%BC&lr=35&within=0&lang=ru',
  },
  {
    id: 3,
    search: 'Bing',
    countDocuments: '30000',
    link: 'Bing',
  },
  {
    id: 4,
    numberPhrase: 2,
    language: 'рус',
    phrase: '',
    search: 'Google',
    countDocuments: '115000',
    link: '',
  },
  {
    id: 5,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 6,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 7,
    numberPhrase: 3,
    language: 'рус',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 8,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 9,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 10,
    numberPhrase: 4,
    language: 'рус',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 11,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 12,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 13,
    numberPhrase: 5,
    language: 'рус',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 14,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 15,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 16,
    numberPhrase: 1,
    language: 'eng',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 17,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 18,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 19,
    numberPhrase: 2,
    language: 'eng',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 20,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 21,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 22,
    numberPhrase: 3,
    language: 'eng',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 23,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 24,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 25,
    numberPhrase: 4,
    language: 'eng',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 26,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 27,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
  {
    id: 28,
    numberPhrase: 5,
    language: 'eng',
    phrase: '',
    search: '',
    countDocuments: '',
    link: '',
  },
  {
    id: 29,
    search: 'Яндекс',
    countDocuments: '',
    link: '',
  },
  {
    id: 30,
    search: 'Bing',
    countDocuments: '',
    link: '',
  },
];
