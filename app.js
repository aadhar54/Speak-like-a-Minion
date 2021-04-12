let btnTranslate = document.querySelector('#btn-translate');
let btnRefresh = document.querySelector('#btn-refresh');
let englishText = document.querySelector('#textarea-eng');
let minionText = document.querySelector('#outdiv');


btnTranslate.addEventListener('click',()=>{
    //console.log();
    let input = englishText.value;

    // concat input to url
    let url = 'https://api.funtranslations.com/translate/minion.json?text='+input;

    //fetch the api
    fetch(url)
    .then(response => response.json())
    .then(json => {
        minionText.innerText = json.contents.translated;
    })
    .catch(errorThrow)
    //show the output in the minion text area
})

btnRefresh.addEventListener('click',()=>{
    minionText.innerText = '';
    englishText.value = '';
})


function errorThrow(error){
    console.log('error happened : '+error);
}