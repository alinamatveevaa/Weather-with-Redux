
export function formatString(str: string) {
    return str
        .split(' ')
        .map((letter, index) => index === 1 ? letter : letter[0].toUpperCase() + letter.slice(1))
        .join(' ')
}