

function jokeSuccess(response){
    let resultFunny = response.data.joke;
    for (let jokeOne of resultFunny){
    document.body.insertAdjacentHTML(`beforeend`, `<h2>${jokeOne.joke}</h2>`)
    }
}

function jokeFail(error){
    console.log("error");
    console.log(error);

}

axios.request({
    url : "https://geek-jokes.sameerkumar.website/api?format=json",
    
}).then(jokeSuccess).catch(jokeFail);




