export async function fetchApi(name = '', status = '', page = 1) {
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