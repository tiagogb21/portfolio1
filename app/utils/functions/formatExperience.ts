export function formatExperience(years:  number, months: number): string {
    const yearText = years === 1 ? "1 ano" : `${years} anos`;
    const monthText = months === 1 ? "1 mês" : `${months} meses`;

    if (years > 0 && months > 0) {
        return `Com experiência profissional de ${yearText} e ${monthText}.`;
    } else if (years > 0) {
        return `Com experiência profissional de ${yearText}.`;
    } else if (months > 0) {
        return `Com experiência profissional de ${monthText}.`;
    } else {
        return `Sem experiência.`;
    }
}
