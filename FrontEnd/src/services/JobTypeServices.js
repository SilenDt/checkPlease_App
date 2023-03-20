const baseURL = "http://localhost:8080/job_types"

export  function getJobTypesInfo(){
    return  fetch(baseURL)
    .then(res => res.json())
}