export default function extractSpecials(character) {
    const { special } = character;
    const specials = special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({ id, name, icon, description }));
    return specials;
}

