class Quiz {
    // YOUR CODE HERE:
    //

    constructor (questions, timeLimit, timeRemaining){
    this.questions = questions
    this.timeLimit = timeLimit
    this.timeRemaining = timeRemaining
    this.correctAnswers = 0
    this.currentQuestionIndex = 0
    }

    
    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    // 3. moveToNextQuestion()
    moveToNextQuestion(){
        this.currentQuestionIndex++;
        return this.questions[this.currentQuestionIndex];
    }

    // 4. shuffleQuestions()
    shuffleQuestions(){
        let randomQuestion = Math.floor(Math.random()* this.questions.length)
        return this.questions[randomQuestion];
    }

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}

const testQuestions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7"];
      // Instantiate a new Quiz object with the test questions
      const quiz = new Quiz(testQuestions, 60, 60);
      // Call the shuffleQuestions() method to shuffle the questions array in the quiz
      console.log(quiz.shuffleQuestions());
      