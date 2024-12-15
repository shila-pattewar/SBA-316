const paragraphs = [ 
    "Gratitude is the practice of acknowledging and appreciating the good things in life, and it is essential to cultivating a sense of joy and contentment. Whether it's expressing gratitude for small acts of kindness or for the simple pleasures of life, gratitude can bring a sense of peace and happiness to our lives.",
    
    "Honesty is a virtue that is essential to building trust and maintaining healthy relationships. Whether it's being honest with oneself or with others, speaking the truth is always the best course of action.",
    
    "Self-awareness is the ability to understand our thoughts, feelings, and behaviors, and it is essential to personal growth and development. Whether it's reflecting on our strengths and weaknesses, seeking feedback from others, or practicing mindfulness, self-awareness can help us make more intentional and informed choices in our lives.",
    
    "Forgiveness is the act of letting go of resentment and bitterness towards others, and it is essential to building healthy and fulfilling relationships. Whether it's extending forgiveness to others, seeking forgiveness for our own mistakes, or simply letting go of negative emotions, forgiveness can foster a sense of peace and well-being in our lives.",
    
    "The development of sustainable urban planning is another important application of technology and nature. Sustainable urban planning prioritizes livability and environmental sustainability, promoting more sustainable and equitable urban development.",
    
    "Creativity is the ability to think outside the box and generate new ideas, and it is essential to innovation and problem-solving. Whether it's experimenting with new approaches, embracing our unique perspectives and talents, or exploring our creative passions, creativity can bring a sense of inspiration and fulfillment to our lives.",

    "The wind was howling outside, rattling the windows and making the branches of the trees sway. I huddled under the blankets, feeling grateful for the warmth and safety of my home.",

    "The development of eco-friendly materials is another important application of technology in nature. By creating sustainable alternatives to traditional materials, we can reduce our impact on the environment and promote more sustainable practices.",

    "Kindness is a simple yet powerful force that has the ability to transform lives. Whether it's through a small act of generosity or a larger show of compassion, every act of kindness has the power to make a positive impact.",

    "Integrity is the practice of living in alignment with our values and beliefs, and it is essential to building trust and respect with others. Whether it's keeping our promises and commitments, speaking and acting authentically, or holding ourselves accountable for our actions and decisions, integrity can help us live with greater purpose and meaning."];

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
    paragraphs[randIndex].split("").forEach(span => 
        {
            let spanTag = `<span>${span}</span>`;
            typingText.innerHTML += spanTag;
        })

    document.addEventListener("click", () => inpuField.focus()); 
}

function initTyping(){
    const character = typingText.querySelectorAll("span");
    let typedChar = inpuField.value.split("")[charIndex]; //add each input char in new line as new word

    console.log(typedChar); //to check the typed character is matches with original one
    if (character[charIndex].innerText === typedChar) // if user type the correct character as shown then add the true class else add false class
        { 
            character[charIndex].classList.add("correct");
        }
    else
        {
        character[charIndex].classList.add("incorrect");
        }
    charIndex++; // this will increase the charIndex 
}


inpuField.addEventListener("input", initTyping);


