const baseURL = "http://localhost:8080"

export async function getCompaniesInfo(){
    return await fetch(baseURL + "/companies")
    .then(res => res.json())
}

export async function getOneCompany(id){
    return await fetch(baseURL + "/companies" + id)
    .then(res => res.json())
}