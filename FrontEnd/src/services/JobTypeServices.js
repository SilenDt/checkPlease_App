const baseURL = "http://localhost:8080/jobtype"

export async function getAllJobTypes(){
    const res = await fetch(baseURL)
    return await res.json()
}