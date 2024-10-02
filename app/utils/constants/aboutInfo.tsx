import { FaReact, FaNodeJs, FaServer, FaChess, FaTasks } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

export const aboutInfo = {
    top: {
        aboutMe:
            "Desenvolvedor Full Stack formado pela Trybe, com mais de três anos de experiência em criação de soluções web. Atualmente, estou aprofundando minhas habilidades no curso superior de Desenvolvimento Full Stack, buscando constantemente novas tecnologias e desafios.",
    },
    bottom: {
        title: "Atualmente trabalhando em",
        doing: [
            {
                title: "Desenvolvimento Front-End",
                content:
                    "Apaixonado por transformar ideias em interfaces intuitivas e responsivas, crio aplicações single-page (SPAs) com foco em performance e experiência do usuário.",
                icon: <FaReact size={30} color="#2dd4bf" />,
            },
            {
                title: "Desenvolvimento Back-End",
                content:
                    "Responsável por arquiteturas robustas, atuo na construção de servidores, gerenciamento de bancos de dados e desenvolvimento de APIs escaláveis.",
                icon: <FaNodeJs size={30} color="#2dd4bf" />,
            },
            {
                title: "Desenvolvimento de APIs",
                content:
                    "Especialista em criar APIs REST eficientes e seguras, garantindo integração fluida entre sistemas.",
                icon: <FaServer size={30} color="#2dd4bf" />,
            },
            {
                title: "Programação Competitiva",
                content:
                    "Entusiasta de desafios lógicos, estou sempre elevando meu nível de codificação participando ativamente de competições no HackerRank e LeetCode, onde busco soluções inovadoras para problemas complexos.",
                icon: <FaChess size={30} color="#2dd4bf" />,
            },
            {
                title: "Testes Automatizados",
                content:
                    "Com foco em qualidade e performance, desenvolvo testes automatizados para garantir a estabilidade e confiabilidade do código.",
                icon: <FiCheckSquare size={30} color="#2dd4bf" />,
            },
            {
                title: "Metodologias Ágeis",
                content:
                    "Trabalho dentro de frameworks ágeis como Scrum e Kanban para entregar projetos de forma eficiente, com ênfase em colaboração e melhoria contínua.",
                icon: <FaTasks size={30} color="#2dd4bf" />,
            },
        ],
    },
};