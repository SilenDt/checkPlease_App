const baseURL = ("http://localhost:8080")

export const getCompanyInfo = () => {
    return fetch(baseURL + "/companies")
    .then(res => res.json())
}