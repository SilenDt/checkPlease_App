const baseURL = "http://localhost:8080"

export  function getCompaniesInfo(){
    return  fetch(baseURL + "/companies")
    .then(res => res.json())
}

export async function getOneCompany(id){
    return await fetch(baseURL + "/companies" + id)
    .then(res => res.json())
}

export  function getAllReviews(){
    return  fetch(baseURL + "/reviews")
    .then(res => res.json())
}

export async function getReviewsByCompany(chosenCompanyId){
    return await fetch(baseURL + "/reviews?" + "company_id=" + chosenCompanyId)
    .then(res => res.json())
}