import Link from "next/link";
import Image from "next/image";


interface StoreBadgeProps {
    link: string,
    market: "app-store" | "google-play"
}

export default function StoreBadge(props: StoreBadgeProps) {
    let src = ""
    let alt = ""
    if (props.market === "app-store") {
        src = "static/market-badges/app-store-badge-ru.svg"
        alt = "Скачать в App Store"
    } else if (props.market === "google-play") {
        src = "static/market-badges/google-play-badge-ru.svg"
        alt = "Скачать в Google Play"
    }

    return (
        <Link href={props.link} target="_blank">
            <Image src={src} alt={alt} width={120} height={40}/>
        </Link>
    )
}