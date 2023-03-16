const baseURL = ("http://localhost:8080")

export async function getCompaniesInfo(){
    return await fetch(baseURL + "/companies")
    .then(res => res.json())
}