const baseURL = "http://localhost:8080/users/"


export const postUser = async (payload) => {
    const res = await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}

// export const getUserByUid = async (uid) => {
//     const res = await fetch(baseURL + uid, {
//         method: 'GET',
//         body: JSON.stringify(uid)
//     })
//     return await res.json()
// }

export async function getUserByUid(uid){
    return await fetch(baseURL + uid)
    .then(res => res.json())
}
