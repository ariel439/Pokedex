export const getTypeColor = (type) => {
    switch(type){
        case 'fire':
            return '#EE8130';
        case 'water':
            return '#6390F0';
        case 'grass':
            return '#7AC74C';
        case 'poison':
            return '#A33EA1';
        case 'flying':
            return '#A98FF3';
        case 'bug':
            return '#A6B91A';
        case 'rock':
            return '#B6A136';
        case 'normal':
            return '#A8A77A';
        case 'electric':
            return '#F7D02C';
        case 'ground':
            return '#E2BF65';
        case 'fairy':
            return '#D685AD';
        case 'fighting':
            return '#C22E28';
        case 'psychic':
            return '#F95587';
        case 'steel':
            return '#B7B7CE';
        case 'ice':
            return '#96D9D6';
        case 'ghost':
            return '#735797';
        case 'dragon':
            return '#6F35FC';
        case 'dark':
            return '#705746';
        default:
            return 'grey';
    }
}