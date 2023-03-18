const baseURL = "http://localhost:8080/companies"

export  function getCompaniesInfo(){
    return  fetch(baseURL)
    .then(res => res.json())
}

export async function getOneCompany(id){
    return await fetch(baseURL + id)
    .then(res => res.json())
}