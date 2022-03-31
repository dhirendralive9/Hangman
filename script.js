const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');

const figureParts = document.querySelectorAll('.figure-part');


const words = ['application','programming','interface','wizard'];


let selectedWord = words[Math.floor(Math.random()*words.length)];

console.log(selectedWord);

const correctLetters = [];
const wrongletters = [];


//show the hidden word
displayWord = () => {
   wordEl.innerHTML = `
   ${selectedWord
      .split('')
      .map(letter =>
       ` <span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
       </span>`).join('')}
    `;
    const innerWord = wordEl.innerText.replace(/\n/g," ");
    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congrats.You won!';
        popup.style.display = 'flex';
    }
}

//update the wrong letters

updateWronglettersEl = ()=>{
    console.log('updatw wrong');
}
//show notification fuunction 

showNotification = ()=> {
    notification.classList.add('show');

    setTimeout(()=>{
        notification.classList.remove('show');    
    },2000);
}

// kydown letter press 

window.addEventListener('keydown', e =>{
    // console.log(e.key);
     if(e.keyCode>= 65 && e.keyCode <= 90) {
         const letter = e.key;

         if(selectedWord.includes(letter)){
             if(!correctLetters.includes(letter)){
                 correctLetters.push(letter);

                 displayWord()
             } else {
                showNotification();
             }
         } else {
             if(!wrongletters.includes(letter)){
                 wrongletters.push(letter);

                 updateWronglettersEl();
             } else {
                 showNotification();
             }
         }
     }
});





displayWord();