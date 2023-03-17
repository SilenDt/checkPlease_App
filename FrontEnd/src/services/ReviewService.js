const baseURL = "http://localhost:8080"

export  function getReviewsInfo(){
    return  fetch(baseURL + "/reviews")
    .then(res => res.json())
}

export async function getOneReview(id){
    return await fetch(baseURL + "/reviews" + id)
    .then(res => res.json())
}