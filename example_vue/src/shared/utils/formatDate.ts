export function formatDate (date: Date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}.${month}.${year}`
}