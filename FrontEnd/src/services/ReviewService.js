const baseURL = "http://localhost:8080/reviews"

// export  function getReviewsInfo(){
//     return  fetch(baseURL)
//     .then(res => res.json())
// }

export  function getAllReviews(){
    return  fetch(baseURL)
    .then(res => res.json())
}

export async function getOneReview(id){
    return await fetch(baseURL + id)
    .then(res => res.json())
}

export function addAReview(){
    return fetch(baseURL)
}

// export async function getReviewsByCompany(chosenCompanyId){
//     return await fetch(baseURL + "?" + "company_id=" + chosenCompanyId)
//     .then(res => res.json())
// }

// await fetch('/api/questions', {
//     method: 'POST',
//     body: JSON.stringify({
//     tipOutMultipleChoichDropdown,
//     yesOrNo,
//     shortAnswer,
//     multipleAnswers,
//     jobTitletMultipleChoichDropdown,
// }),
// headers: {
//     'Content-Type': 'application/json',
//     },
// });