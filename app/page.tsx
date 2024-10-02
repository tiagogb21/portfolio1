import { aboutInfo } from "./utils/constants/aboutInfo";

export default function Home() {
    return (
        <div className="text-white flex flex-col justify-between h-full gap-6">
            <p>{aboutInfo.top.aboutMe}</p>
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-xl font-bold">{aboutInfo.bottom.title}</h2>
                <div className="flex-1 grid lg:grid-cols-2 gap-4">
                    {aboutInfo.bottom.doing.map((item) => (
                        <div
                            key={item.title}
                            className="flex bg-zinc-900 rounded-lg p-4 gap-4"
                        >
                            <div className="hidden lg:block">
                              {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-justify">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
