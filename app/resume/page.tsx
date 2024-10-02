import { resumeInfo } from "../utils/constants/resumeInfo";

interface ResumeCardProp {
    subtitle: string;
    place: string;
    content: string;
}

const ResumeCard = ({ subtitle, place, content }: ResumeCardProp) => {
    return (
        <div>
            <h4 className="text-xl font-bold text-teal-600">{subtitle}</h4>
            <p className="text-lg text-teal-300">{place}</p>
            <p className="text-lg">{content}</p>
        </div>
    );
};

export default function Resume() {
    return (
        <div className="text-white flex flex-col h-full gap-6">
            {resumeInfo.top.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {Array.isArray(item.info) && (
                            item.info.map(({ subtitle, place, content }) => (
                                <div key={index} className="bg-zinc-900 rounded-lg p-4">
                                    <ResumeCard
                                        subtitle={subtitle}
                                        place={place}
                                        content={content}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
