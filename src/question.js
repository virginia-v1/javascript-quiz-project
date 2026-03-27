class Question {
    constructor (text, choices, answer, difficulty){
       this.text = text
       this.choices = choices
       this.answer = answer
       this.difficulty = difficulty
    }

    // 2. shuffleChoices()
    shuffleChoices(){
    const number = Math.floor (Math.random()*this.choices.length)
    return this.choices[number];
}
    
}
const question = new Question('Hello', ["rabbit" , "cat", "dog"])
 console.log(question.shuffleChoices())
 // figure out why we needed to add the new variable

