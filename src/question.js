class Question {
    constructor (text, choices, answer, difficulty){
       this.text = text
       this.choices = choices
       this.answer = answer
       this.difficulty = difficulty
    }

    // 2. shuffleChoices()
    shuffleChoices(){

      let shuffledArray = []

        let array = this.choices
       


      for(let i = 0; i< array.length  ;i++ ){

       const x = Math.floor(Math.random() * array.length  )
        
        [array[i] , array[x]] = [array[x] , array[i]]

      }
    


    return array ;


}
    
}
const question = new Question('Hello', ["rabbit" , "cat", "dog"])
 console.log(question.shuffleChoices())
 // figure out why we needed to add the new variable

