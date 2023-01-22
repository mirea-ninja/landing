import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


const randomAvatar = (title: string, clr?: string) => {
  const colors = [
    "f72585",
    "b5179e",
    "7209b7",
    "560bad",
    "480ca8",
    "3a0ca3",
    "3f37c9",
    "4361ee",
    "4895ef",
    "4cc9f0",
    "a5f3fc",
    "fdeff9",
    "f9c80e",
    "f3722c",
    "f94144",
    "f8961e",
    "f9844a",
    "f9c74f",
    "90be6d",
    "43aa8b",
    "4d908e",
    "577590",
    "277da1",
  ]
  const color = colors[Math.floor(Math.random() * colors.length)]
  const letters = title.split(" ")
  const firstLetter = letters[0][0]
  const secondLetter = letters[1] ? letters[1][0] : ""

  if (clr) {
    return `https://ui-avatars.com/api/?name=${firstLetter.toUpperCase()}${secondLetter.toUpperCase()}&background=${clr}&color=fff&size=128`
  }
  return `https://ui-avatars.com/api/?name=${firstLetter.toUpperCase()}${secondLetter.toUpperCase()}&background=${color}&color=fff&size=128`
}

const ProjectCard = ({
  title,
  description,
  link,
  icon,
}: {
  title: string
  description: string
  link: string
  icon: string
}) => {
  return (
    <Link href={link}>
      <div className="rounded-2xl p-4 ring-1 ring-gray-200 ring-inset hover:ring-2 hover:ring-blue-100 transition-all duration-200 cursor-pointer min-h-[240px]">
        <Image
          src={icon}
          width={64}
          height={64}
          alt={"Иконка проекта"}
          className="rounded-xl ring-1 ring-gray-200 ring-inset mb-4"
        />
        <h3 className="text-sm font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Mirea Ninja</title>
        <meta name="description" content="Наши проекты и идеи" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <h2 className="text-2xl font-bold mb-8 mt-8 text-center">Чат-боты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <ProjectCard
            title="Mirea Ninja Bot"
            description="Бот для беседы сообщества в Телеграме. Помогает следить за порядком в беседе. Имеется система репутации и полноценная интеграция аккаунтов в Telegram с аккаунтами на форуме"
            link="https://t.me/mireaninja_bot"
            icon="/ninja_bot.jpg"
          />
          <ProjectCard
            title="Mirea Ninja Executor Bot"
            description="Бот для создания, сохранение и исполнение Python кода прямо в чате. Имеется поддержка библиотек, в том числе сетевых. Выполняется в изолированном окружении"
            link="https://t.me/mireaninja_executor_bot"
            icon="/executor_bot.jpg"
          />
          <ProjectCard
            title="Расписание преподавателей МИРЭА"
            description="Бот для просмотра расписания преподавателей МИРЭА по ФИО или расписание группы. Работает с расписанием сессии"
            link="https://t.me/teacherschedulertu_bot"
            icon="/schedule_bot.jpg"
          />
          <ProjectCard
            title="Поиск студентов РТУ МИРЭА"
            description="Бот для поиска группы студента по ФИО или поиска ФИО по группе. Выводит email, код студента, ссылку на профиль в ВКонтакте"
            link="https://t.me/mirea_ninja_search_students_bot"
            icon={randomAvatar("Поиск студентов", "577590")}
          />
          <ProjectCard
            title="Траектория обучения РТУ МИРЭА"
            description="Бот позволяет получать траекторию обучения из по коду направления, названию профиля или названию направления. Выводи по семестрам и годам поступления"
            link="https://t.me/learning_roadmap_bot"
            icon="/trajectory.jpg"
          />
        </div>
        <h2 className="text-2xl font-bold mb-8 mt-8 text-center">
          Веб-сайты и сервисы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <ProjectCard
            title="Форум Mirea Ninja"
            description="Наше сообщество. Здесь можно задавать вопросы, обсуждать и делиться своими знаниями"
            link="https://mirea.ninja"
            icon="/forum.svg"
          />
          <ProjectCard
            title="API Расписания МИРЭА"
            description="API для получения расписания группы, поиска расписания преподавателей"
            link="https://schedule.mirea.ninja/docs"
            icon={randomAvatar("API", "f3722c")}
          />
          <ProjectCard
            title="API Расписания V2"
            description="API расписания v2. Методы для работы с расписанием аудиторий. Используется в ЛКС и на информационных экранах у аудиторий"
            link="https://timetable.mirea.ru/docs"
            icon={randomAvatar("API", "43aa8b")}
          />
          <ProjectCard
            title="LKS User API"
            description="Сервис авторизации и защищенный API для работы с пользовательскими данными"
            link="https://lks.mirea.ninja/login"
            icon={randomAvatar("API", "4895ef")}
          />
        </div>
        <h2 className="text-2xl font-bold mb-8 mt-8 text-center">
          Мобильные приложения
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <ProjectCard
            title="Ninja Mirea App"
            description="Приложение для просмотра расписания группы, просмотра новостей, карты. Имеется интеграция с профилем студента"
            link="https://play.google.com/store/apps/details?id=ninja.mirea.mireaapp"
            icon="/mobile.png"
          />
        </div>
        <h2 className="text-2xl font-bold mb-8 mt-8 text-center">
          Голосовые помощники
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <ProjectCard
            title="Расписание РТУ МИРЭА"
            description="Навык для Яндекс Алисы. Позволяет получить расписание группы на сегодня, завтра или на любой день недели"
            link="https://dialogs.yandex.ru/store/skills/fdd92935-raspisanie-rtu-mirea"
            icon={randomAvatar("Алиса", "f72585")}
          />
        </div>
      </main>
    </>
  )
}
