window.addEventListener('DOMContentLoaded',(event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounterakeem.azurewebsites.net/api/GetResumeCounter?code=i1MRm4O8r-tvGJCRNtIgXgcvySv7QT5IPZFIld27cQRbAzFuBTFWyw=='
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}