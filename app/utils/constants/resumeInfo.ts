import { calculateExperience } from "../functions/calculateExperience";

interface IInfo {
    subtitle: string;
    place: string;
    content: string;
}

interface IResumeInfo {
    top: {
        title: string;
        info: IInfo[];
    }[];
}

export const resumeInfo: IResumeInfo = {
    top: [
        {
            title: "Educação",
            info: [
                {
                    subtitle: "Desenvolvedor Web Full Stack",
                    place: "Trybe",
                    content:
                        "Formado pela Trybe no curso de desenvolvedor web full stack",
                },
            ],
        },
        {
            title: "Experiência",
            info: [
                {
                    subtitle: "Desenvolvedor Web Full Stack",
                    place: "Cansei Vendi",
                    content: calculateExperience("2023-04-01"),
                },
                {
                    subtitle: "Desenvolvedor Web Full Stack",
                    place: "Paradox Technology",
                    content: calculateExperience("2021-11-01", "2023-04-01"),
                },
            ],
        },
        {
            title: "Certificações",
            info: [
                {
                    subtitle: "PHP Developer",
                    place: "Upinside Treinamentos",
                    content: "Curso com 200h focado em PHP",
                },
                {
                    subtitle: "API Restful Javascript com Node.js, Typescript, TypeORM",
                    place: "Udemy",
                    content: "Curso com 27h focado em tecnologias backend",
                },
            ],
        },
    ],
};
