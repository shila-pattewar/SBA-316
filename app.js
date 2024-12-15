const paragraphs = [ 
    "Sed sed libero ut sapien sollicitudin vestibulum. Nam gravida tincidunt tortor, non tristique odio dictum in. Pellentesque euismod felis et urna varius, at vestibulum lorem maximus. Cras egestas interdum metus, id sollicitudin orci.",
    
    "Phasellus id dolor eget risus feugiat consequat. Vestibulum a vestibulum tortor. In condimentum sapien vel est volutpat, at tempor leo suscipit. Nullam ut efficitur felis, ac mollis odio. Ut aliquam mi sit amet leo feugiat, at laoreet leo auctor.",
    
    "Curabitur convallis lectus ut orci pharetra, at aliquet nunc porttitor. Proin ut urna eu erat interdum auctor eget ac enim. Nulla facilisi. Donec nec suscipit leo, et tristique libero. Nam tristique sollicitudin tortor et tincidunt.",
    
    "Vivamus eget metus sit amet felis tempor egestas. Sed interdum, augue sit amet sollicitudin feugiat, justo lorem blandit lectus, id lobortis elit eros a ligula. Aliquam erat volutpat. Fusce malesuada purus eu est interdum, at posuere arcu tempus. Nunc lacinia auctor neque ac eleifend.",
    
    "Proin a ligula vel ipsum varius facilisis. Curabitur nec augue ut orci tincidunt sollicitudin. Nulla facilisi. Ut nec libero a sapien varius pretium. In cursus, ipsum eget consectetur gravida, lorem turpis efficitur elit, eu varius nisi nunc non felis. Aliquam erat volutpat.",
    
    "Quisque volutpat dui ut auctor congue. Vivamus suscipit fringilla augue, ac gravida metus. Suspendisse potenti. Integer in elit nec nulla lobortis ullamcorper. Etiam vel scelerisque velit. Donec venenatis nisl ut eros faucibus, non condimentum turpis egestas." ];

const typingText = document.querySelector(".inputTextArea")
const inpuField = document.querySelector(".mainContainer .input-field")
let charIndex = 0;

function randomParagraph(){
    console.log(paragraphs[0]);
}

randomParagraph();

function randomParagraph() {
    // get the ramdom paragraphs
    let randIndex = Math.floor(Math.random()* paragraphs.length);
    paragraphs[randIndex].split("").forEach(span => {
        let spanTag = `<span>${span}</span>`;
        typingText.innerHTML += spanTag;
    })

    // focus the input field on click
    document.addEventListener("click", () => inpuField.focus());
}

function initTyping(){
    const character = typingText.querySelectorAll("span");

    //add each input char in new line as new word
    let typedChar = inpuField.value.split("")[charIndex];
    console.log(typedChar);
    //to check the typed character is matches with original one
   if (character[charIndex].innerText === typedChar){
    // if user type the correct character as shown then add the true class else add false class
    character[charIndex].classList.add("correct");
   }else{
    character[charIndex].classList.add("incorrect");
   }
   charIndex++; // this will increase the charIndex 
}

inpuField.addEventListener("input", initTyping);