var inputword = document.querySelector(".typeword input");
var searchicon = document.querySelector(".searchicon");
var result = document.querySelector(".result");
searchicon.addEventListener("click", function () {
    if (inputword.value != "") {
        loaddata();
    }


});
function loaddata() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputword.value}`;
    fetch(url).then(res => res.json()).then(resultdata => {
        console.log(result);
        result.innerHTML = `<div class="detail">
                                 <h3 class="meaning">
                    Word
                    <p>${resultdata[0].word}</p>
                   </h3></div> 
            <div class="detail">
            <h3 class="meaning">
Meaning
<p>${resultdata[0].meanings[0].definitions[0].definition}</p>
</h3>

</div> `;

    }).catch((err) =>{
        // result.innerHTML=err.value;
    });
}