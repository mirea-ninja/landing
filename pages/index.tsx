import Layout from "@/components/layout";
import ProjectGrid, {ProjectGridProps} from "@/components/project-grid";


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

const projects: ProjectGridProps[] = [
    {
        title: "Чат-боты",
        projects: [{
            title: "Mirea Ninja Bot",
            description: "Бот для беседы сообщества в Телеграме. Помогает следить за порядком в беседе. Имеется система репутации и полноценная интеграция аккаунтов в Telegram с аккаунтами на форуме",
            link: "https://t.me/mireaninja_bot",
            icon: "/ninja_bot.jpg"
        }, {
            title: "Mirea Ninja Executor Bot",
            description: "Бот для создания, сохранение и исполнение Python кода прямо в чате. Имеется поддержка библиотек, в том числе сетевых. Выполняется в изолированном окружении",
            link: "https://t.me/mireaninja_executor_bot",
            icon: "/executor_bot.jpg"
        }, {
            title: "Расписание преподавателей МИРЭА",
            description: "Бот для просмотра расписания преподавателей МИРЭА по ФИО или расписание группы. Работает с расписанием сессии",
            link: "https://t.me/teacherschedulertu_bot",
            icon: "/schedule_bot.jpg"
        }, {
            title: "Поиск студентов РТУ МИРЭА",
            description: "Бот для поиска группы студента по ФИО или поиска ФИО по группе. Выводит email, код студента, ссылку на профиль в ВКонтакте",
            link: "https://t.me/mirea_ninja_search_students_bot",
            icon: "/search-students-logo.png"
        }, {
            title: "Траектория обучения РТУ МИРЭА",
            description: "Бот позволяет получать траекторию обучения из по коду направления, названию профиля или названию направления. Выводи по семестрам и годам поступления",
            link: "https://t.me/learning_roadmap_bot",
            icon: "/trajectory.jpg"
        }]
    }, {
        title: "Веб-сайты и сервисы",
        projects: [{
            title: "Форум Mirea Ninja",
            description: "Наше сообщество. Здесь можно задавать вопросы, обсуждать и делиться своими знаниями",
            link: "https://mirea.ninja",
            icon: "/forum.svg"
        }, {
            title: "API Расписания МИРЭА",
            description: "API для получения расписания группы, поиска расписания преподавателей",
            link: "https://schedule.mirea.ninja/docs",
            icon: randomAvatar("API", "f3722c")
        }, {
            title: "API Расписания V2",
            description: "API расписания v2. Методы для работы с расписанием аудиторий. Используется в ЛКС и на информационных экранах у аудиторий",
            link: "https://timetable.mirea.ru/docs",
            icon: randomAvatar("API", "43aa8b")
        }, {
            title: "LKS User API",
            description: "Сервис авторизации и защищенный API для работы с пользовательскими данными",
            link: "https://lks.mirea.ninja/login",
            icon: randomAvatar("API", "4895ef")
        }]
    }, {
        title: "Мобильные приложения",
        projects: [{
            title: "Ninja Mirea App",
            description: "Приложение для просмотра расписания группы, просмотра новостей, карты. Имеется интеграция с профилем студента",
            link: "https://play.google.com/store/apps/details?id=ru.mirea.ninja",
            icon: "/mobile.png"
        }]
    }, {
        title: "Голосовые помощники",
        projects: [{
            title: "Алиса Расписание МИРЭА",
            description: "Навык для Яндекс Алисы. Позволяет получить расписание группы на сегодня, завтра или на любой день недели",
            link: "https://dialogs.yandex.ru/store/skills/fdd92935-raspisanie-rtu-mirea",
            icon: randomAvatar("Алиса Расписание", "f72585")
        }]
    }
]

export default function Home() {
    return (
        <Layout>
            {projects.map((grid, index) => {
                return <ProjectGrid key={index} title={grid.title} projects={grid.projects}/>
            })}
        </Layout>
    )
}
