import Layout from "@/components/layout";
import ProjectGrid, {ProjectGridProps} from "@/components/project-grid";

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
            backgroundColor: "bg-orange-500",
        }, {
            title: "API Расписания V2",
            description: "API расписания v2. Методы для работы с расписанием аудиторий. Используется в ЛКС и на информационных экранах у аудиторий",
            link: "https://timetable.mirea.ru/docs",
            backgroundColor: "bg-lime-500"
        }, {
            title: "LKS User API",
            description: "Сервис авторизации и защищенный API для работы с пользовательскими данными",
            link: "https://lks.mirea.ninja/login",
            backgroundColor: "bg-sky-500"
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
            backgroundColor: "bg-pink-500"
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
