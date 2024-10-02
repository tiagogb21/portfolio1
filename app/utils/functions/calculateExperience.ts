import { formatExperience } from "./formatExperience";

export function calculateExperience(
    startDate: string | Date,
    endDate: string | Date = new Date()
) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    return formatExperience(years, months);
}
