const baseURL = "http://localhost:8080/tip_out_types"

export async function getTipOutTypes(){
    const res = await fetch(baseURL)
    return await res.json()
}