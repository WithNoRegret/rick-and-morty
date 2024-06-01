export async function fetchCharacters(name = '', status = '', page = 1) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных с API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function fetchCharacter(id) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных с API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}

export async function fetchEpisodes() {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        if (!response.ok) {
            throw new Error('Ошибка при загрузке данных с API');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error.message);
        return [];
    }
}