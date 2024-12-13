const paragraphs = [ 
    "Sed sed libero ut sapien sollicitudin vestibulum. Nam gravida tincidunt tortor, non tristique odio dictum in. Pellentesque euismod felis et urna varius, at vestibulum lorem maximus. Cras egestas interdum metus, id sollicitudin orci.",
    
    "Phasellus id dolor eget risus feugiat consequat. Vestibulum a vestibulum tortor. In condimentum sapien vel est volutpat, at tempor leo suscipit. Nullam ut efficitur felis, ac mollis odio. Ut aliquam mi sit amet leo feugiat, at laoreet leo auctor.",
    
    "Curabitur convallis lectus ut orci pharetra, at aliquet nunc porttitor. Proin ut urna eu erat interdum auctor eget ac enim. Nulla facilisi. Donec nec suscipit leo, et tristique libero. Nam tristique sollicitudin tortor et tincidunt.",
    
    "Vivamus eget metus sit amet felis tempor egestas. Sed interdum, augue sit amet sollicitudin feugiat, justo lorem blandit lectus, id lobortis elit eros a ligula. Aliquam erat volutpat. Fusce malesuada purus eu est interdum, at posuere arcu tempus. Nunc lacinia auctor neque ac eleifend.",
    
    "Proin a ligula vel ipsum varius facilisis. Curabitur nec augue ut orci tincidunt sollicitudin. Nulla facilisi. Ut nec libero a sapien varius pretium. In cursus, ipsum eget consectetur gravida, lorem turpis efficitur elit, eu varius nisi nunc non felis. Aliquam erat volutpat.",
    
    "Quisque volutpat dui ut auctor congue. Vivamus suscipit fringilla augue, ac gravida metus. Suspendisse potenti. Integer in elit nec nulla lobortis ullamcorper. Etiam vel scelerisque velit. Donec venenatis nisl ut eros faucibus, non condimentum turpis egestas." ];

const typingText = document.querySelector(".inputTextArea")

function randomParagraph(){
    console.log(paragraphs[0]);
}

randomParagraph();

let randIndex = Math.floor(Math.random()* paragraphs.length);
console.log(paragraphs[randIndex].split(""));