'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const links = [
        { id: 1, name: "Sobre", path: ["/", "/about"] },
        { id: 2, name: "Currículo", path: ["/resume"] },
        { id: 3, name: "Projetos", path: ["/projects"] },
    ];

    const path = usePathname();

    const name = () => {
        const findLink = links.find((el) => el.path.includes(path));
        return findLink?.name;
    }

    return (
        <div className="text-white flex justify-between items-end gap-4">
            <h1 className="first-letter:uppercase font-bold text-3xl border-b-2 border-solid border-teal-400">{name()}</h1>
            <nav>
                <ul className="flex gap-4">
                    {links.filter((link) => !link.path.includes(path)).map((item) => (
                        <li key={item.id}>
                            <Link href={item.path[0]}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
