const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const popup = document.getElementById('popup-container');
const playAgainBtn = document.getElementById('play-button');
const notifications = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');
const warns = document.getElementById('warning');
const figuresParts = document.querySelectorAll('.figure-part');

const words=['application', 'programming', 'interface', 'wizard'];
selectedWord = words[Math.floor(Math.random()*words.length)];
let playable = true;
const correctLetters = [];
const wrongLetters = [];

function displayWord(){
    wordEl.innerHTML=`
    ${selectedWord
        .split('')
        .map(
            letter =>`
                <span class="letter">
                    ${correctLetters.includes(letter)?letter:''}
                </span>`
        )
        .join('')}
    `;
    const innerWord = wordEl.innerText.replace(/[\n]/g,'');
    if(innerWord == selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😃';
        finalMessageRevealWord.innerText = '';
        popup.style.display = 'flex';
        playable = false;
    }
}

function updateWrongLetters(){
    wrongLettersEl.innerHTML =`
    ${wrongLetters.length>0?'<p>Wrong</p>':''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    figuresParts.forEach((part,index) =>{
        const errors = wrongLetters.length;
        if(index<errors) part.style.display='block';
        else part.style.display='none';
    })
    
    if(wrongLetters.length == figuresParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        finalMessageRevealWord.innerText = `...the word was:${selectedWord}`;
        popup.style.display = 'flex';
        playable = false;
    }
}

function showNotification(){
    notifications.classList.add('show');
    setTimeout(() => {
        notifications.classList.remove('show');
    },2000);
}
function showWarns(){
    warns.innerText = 'Please Enter a right letter!';
    notifications.classList.add('show');
    setTimeout(() => {
        notifications.classList.remove('show');
    },2000);
}

window.addEventListener('keydown',e =>{
    if(playable){
        if(e.key>='a' && e.key<='z'){
            const letter = e.key.toLowerCase();
            if(selectedWord.includes(letter)){
                if(!correctLetters.includes(letter)){
                    correctLetters.push(letter);
                    displayWord();
                }
                else{
                    showNotification();
                }
            }
            else{
                if(!wrongLetters.includes(letter)){
                    wrongLetters.push(letter);
                    updateWrongLetters();
                }
                else{
                    showNotification();
                }
            }
        }
        else{
            showWarns();
        }
    }
});

playAgainBtn.addEventListener('click',() =>{
    playable = true;
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = words[Math.floor(Math.random()*words.length)];
    displayWord();
    updateWrongLetters();
    popup.style.display ='none';
});
displayWord();