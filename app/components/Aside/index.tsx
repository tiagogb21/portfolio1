import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const personalInfo = {
    image: "/perfil.jpeg",
    name: "Tiago Garbi",
    position: "Full Stack Web Developer",
    links: {
        linkedin: "https://www.linkedin.com/in/tiago-garbi-baganha-desenvolvedor-fullstack/",
        github: "https://github.com/tiagogb21",
    },
    email: 'tiagogarbideveloper@gmail.com',
    phone: '(35) 99977-3556',
};

export const Aside = () => {
    return (
        <aside className="flex flex-col items-center lg:col-span-1 bg-zinc-950 text-white rounded-lg p-4 gap-10">
            <div className="flex flex-col gap-6 items-center">
                <Image
                    src={personalInfo.image}
                    alt={personalInfo.name}
                    width={130}
                    height={130}
                    className="rounded-full"
                />
                <h2 className="text-center text-2xl font-bold">{personalInfo.name}</h2>
                <p className="bg-zinc-900 text-sm text-center px-10 py-4 rounded-lg font-bold">{personalInfo.position}</p>
                <Link href="#" className="bg-teal-700 text-center px-10 py-4 rounded-lg font-bold uppercase text-sm flex items-end gap-2">
                    <FaDownload size={14} /> baixar currículo
                </Link>
                <div className="w-full flex justify-between lg:justify-around">
                    <Link
                        href={personalInfo.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub size={30} />
                    </Link>
                    <Link
                        href={personalInfo.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={30} />
                    </Link>
                </div>
            </div>
            <div className="w-full bg-zinc-900 p-4">
                <h3 className="text-center text-lg font-bold mb-3">Contato</h3>
                <div className="flex flex-col gap-2">
                    <p className="text-center text-lg font-bold">E-mail:</p>
                    <p className="text-center text-sm">{personalInfo.email}</p>
                    <p className="text-center text-lg font-bold">Telefone:</p>
                    <p className="text-center text-sm">{personalInfo.phone}</p>
                </div>
            </div>
        </aside>
    );
};
