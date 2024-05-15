export function fetchApi(filters) {
    const { name, status } = filters;
    let url = 'https://rickandmortyapi.com/api/character/?';
    if (name.trim() !== '') {
        url += `name=${name}&`;
    }
    if (status.trim() !== '') {
        url += `status=${status}&`;
    }
    url = url.slice(0, -1);

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            return data.results;
        });
}