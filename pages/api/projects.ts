import type {NextApiRequest, NextApiResponse} from 'next'
import {ProjectGridProps} from "@/components/project-grid";

type Data = ProjectGridProps[]

const projects: Data = [
    {
        title: "Чат-боты",
        projects: [{
            title: "Mirea Ninja Bot",
            description: "Бот для беседы сообщества в Телеграме. Помогает следить за порядком в беседе. Имеется система репутации и полноценная интеграция аккаунтов в Telegram с аккаунтами на форуме",
            link: "https://t.me/mireaninja_bot",
            icon: "/static/project-icons/ninja-bot.jpg"
        }, {
            title: "Mirea Ninja Executor Bot",
            description: "Бот для создания, сохранения и исполнения Python кода прямо в чате. Имеется поддержка библиотек, в том числе сетевых. Выполняется в изолированном окружении",
            link: "https://t.me/mireaninja_executor_bot",
            icon: "/static/project-icons/executor-bot.jpg"
        }, {
            title: "Расписание преподавателей МИРЭА",
            description: "Бот для просмотра расписания преподавателей МИРЭА по ФИО или расписание группы. Работает с расписанием сессии",
            link: "https://t.me/teacherschedulertu_bot",
            icon: "/static/project-icons/schedule-bot.jpg"
        }, {
            title: "Поиск студентов РТУ МИРЭА",
            description: "Бот для поиска группы студента по ФИО или поиска ФИО по группе. Выводит email, код студента, ссылку на профиль в ВКонтакте",
            link: "https://t.me/mirea_ninja_search_students_bot",
            icon: "/static/project-icons/search-students.png"
        }, {
            title: "Траектория обучения РТУ МИРЭА",
            description: "Бот позволяет получать траекторию обучения по коду направления, названию профиля или названию направления по семестрам и годам поступления",
            link: "https://t.me/learning_roadmap_bot",
            icon: "/static/project-icons/trajectory.jpg"
        }]
    }, {
        title: "Веб-сайты и сервисы",
        projects: [{
            title: "Форум Mirea Ninja",
            description: "Наше сообщество. Здесь можно задавать вопросы, обсуждать и делиться своими знаниями",
            link: "https://mirea.ninja",
            icon: "/static/project-icons/forum.svg"
        }, {
            title: "API Расписания МИРЭА",
            description: "API для получения расписания группы, поиска расписания преподавателей",
            link: "https://schedule.mirea.ninja/docs"
        }, {
            title: "API Расписания V2",
            description: "API расписания v2. Методы для работы с расписанием аудиторий. Используется в ЛКС и на информационных экранах у аудиторий",
            link: "https://timetable.mirea.ru/docs"
        }, {
            title: "LKS User API",
            description: "Сервис авторизации и защищенный API для работы с пользовательскими данными",
            link: "https://lks.mirea.ninja/login"
        }]
    }, {
        title: "Мобильные приложения",
        projects: [{
            title: "Ninja Mirea App",
            description: "Приложение для просмотра расписания группы, просмотра новостей, карты. Имеется интеграция с профилем студента",
            icon: "/static/project-icons/mobile.png",
            appStoreLink: "https://apps.apple.com/ru/app/ninja-mirea/id1582508025",
            googlePlayLink: "https://play.google.com/store/apps/details?id=ru.mirea.ninja",
            // badges: [{ text: "Новый релиз", className: "badge-primary" }]
        }]
    }, {
        title: "Голосовые помощники",
        projects: [{
            title: "Алиса Расписание МИРЭА",
            description: "Навык для Яндекс Алисы. Позволяет получить расписание группы на сегодня, завтра или на любой день недели",
            link: "https://dialogs.yandex.ru/store/skills/fdd92935-raspisanie-rtu-mirea"
        }]
    }
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(projects)
}
