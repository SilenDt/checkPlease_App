const baseURL = "http://localhost:8080/usersDto"


export const postUser = async (payload) => {
    const res = await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}