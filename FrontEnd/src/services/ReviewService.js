const baseURL = "http://localhost:8080/reviews/"

// export  function getReviewsInfo(){
//     return  fetch(baseURL)
//     .then(res => res.json())
// }

export async function getAllReviews() {
    const res = await fetch(baseURL)
    return await res.json()
}

export async function getOneReview(id) {
    return await fetch(baseURL + id)
        .then(res => res.json())
}

export function addAReview() {
    return fetch(baseURL)
}

export const postReview = async (payload) => {
    const res = await fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    return await res.json()
}


export const updateReview = async (uid, payload) => {
    const res = await fetch(baseURL + uid, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    });
    return await res.json();
}

export async function getReviewByCompanyId(companyId) {
    return await fetch(baseURL + `?company_id=${companyId}`)
        .then(res => res.json)
}

export async function deleteOneReview(id) {
    return fetch(baseURL + id, {
        method: 'DELETE',
        body: JSON.stringify({ id })
    })
}

// export const deleteVisitedCountry = (id) => {
//     return fetch(visitedURL, {
//         method: 'DELETE',
//         body: JSON.stringify({ id })
//     });
// }


