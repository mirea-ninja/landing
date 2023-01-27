import Image from "next/image";


const avatarClassSize = "w-16 h-16"
const avatarClass = `${avatarClassSize} rounded-xl ring-1 group-hover:ring-2 duration-200 ring-secondary`

interface AvatarProps {
    title: string
    icon?: string
}

export default function Avatar(props: { title: string, icon?: string }) {
    if (props.icon) {
        return (
            <div className={avatarClass}>
                <Image
                    src={props.icon}
                    width={64}
                    height={64}
                    alt={`Логотип ${props.title}`}
                    className="bg-white"
                />
            </div>
        )
    } else {
        const letters = props.title.split(" ")
        const firstLetter = letters[0] ? letters[0][0] : null
        const secondLetter = letters[1] ? letters[1][0] : null

        return (
            <div className={`avatar placeholder ${avatarClass}`}>
                <div className={`${avatarClassSize} bg-local bg-accent group-hover:bg-accent-focus duration-200`}>
                <span className="text-xl font-bold text-access-content">
                    {firstLetter?.toUpperCase()}
                    {secondLetter?.toUpperCase()}
                </span>
                </div>
            </div>
        )
    }
}