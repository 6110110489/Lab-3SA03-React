import React, {useState} from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

var correct = 0;
var row = 0;
var ans = "";

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))

    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}
   
export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                correct++;
                console.log('yeah!' + correct)
                alert('WOW ! You Correct ' + correct)
                setState({...state, guess: '', completed: true})
                if(correct == 4) {
                    console.log("YOU WIN!")
                    alertToWin();
                    window.location.reload(false)
                }
            
            }else{
                console.log('reset, next attempt')
                alert("TRY AGAIN")
                row++;
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        } 
    }

    return(
        <div>
            {
                state.chars.map( (c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/> 
                )

            }
        </div>
    )
}

function alertToWin() {
    var ale = Math.floor(Math.random() * 3);
    if(ale == 0) {
        alert("YOU WIN!");
    }
    else if(ale == 1) {
        alert("YOUR ENGLISH SO GOOD!");
    }
    else{
        alert("YOU SO WISE!");
    }
}

function displayAnswer(word, rows) {
    if(rows >= 3){
      document.getElementById("demo").innerText = "Answer this question : "+ word;
    }
}