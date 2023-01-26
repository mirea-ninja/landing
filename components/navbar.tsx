import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-xl rounded-lg">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost hower:btn-gost normal-case text-xl">Mirea Ninja</Link>
            </div>
            <div className="flex-none">
                <Link href="https://github.com/mirea-ninja" className="btn btn-square btn-ghost hower:btn-gost">
                    <Image src="static/github-mark.png" width={24} height={24} alt="GitHub Logo" />
                </Link>
            </div>
        </div>
    )
}