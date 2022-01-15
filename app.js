var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var mockServerURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function clickHandler() {
  var inputText = txtInput.value; // taking input

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // output
    })
    .catch((error) => {
      console.log("error occured", error);
      alert("something wrong with server! try again after some time");
    });
}

btnTranslate.addEventListener("click", clickHandler);
