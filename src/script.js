let text = document.querySelector("textarea");




document.getElementById("upper-case")
    .addEventListener("click",function(){
        text.value = text.value.toUpperCase();
    });

document.getElementById("lower-case")
    .addEventListener("click",function(){
        text.value = text.value.toLowerCase();
    });


// document.getElementById("proper-case").addEventListener("click", function titleCase(text) {
//        let sentence = text.value.toLowerCase().split(" ");
//        for(let i = 0; i < sentence.length; i++){
//           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//        }
//     sentence = sentence.trim();
//     text.value = sentence;
//     });


document.getElementById("proper-case")
    .addEventListener("click",function(){
        let words = text.value.toLowerCase().split(' ');
        let temp = "";
        for (let w of words) {
            temp += capitalize(w)+ " ";
        }

        text.value = temp.trim();
    });

document.getElementById("sentence-case")
    .addEventListener("click",function(){
        let words = text.value.toLowerCase().split(' ');
        let result = "";
        for(let i=0; i < words.length; i++){
            if (i === 0) {
                result += capitalize(words[i]) + " ";
            }else {
                let lastWord = words[i - 1];
                if (lastWord.charAt(lastWord.length - 1) === '.') {
                    result += capitalize(words[i]) + " ";
                }else{
                    result += words[i] + " ";
                }
            }
        }
        text.value = result.trimEnd();
    });


let capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function (){
    download("text.txt",text.value);
})
