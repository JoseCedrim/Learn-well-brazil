(function(){

    function buildQuiz(){
      
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
         
          const answers = [];
  
         
          for(letter in currentQuestion.answers){
  
          
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
     
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
   
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      
      let numCorrect = 0;
  
     
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
       
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = '#429867';
        }
        
        else{
        
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
     
      resultsContainer.innerHTML = `${numCorrect} acerto de ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
   
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "Uma pessoa ___ de idade ou mais velho poderá aplicar para Carteira de Motorista:",
        answers: {
          a: "14 anos",
          b: " 15 anos",
          c: " 16 anos",
          d: "  18 anos"
        },
        correctAnswer: "a"
      },
      {
        question: "Qual o minímo score para passar no teste?A pessoa que possuir a carteira de motorista classe 5 não deve operar:",
        answers: {
          a: "    Um veículo recreacional com não mais que 3 eixos",
          b: "  Um veículo alugado transportando passageiros",
          c: "    Uma moped",
          d: "     Um veículo com somente 2 eixos   "
          
        },
        correctAnswer: "b"
      },
      {
        question: "O motorista que possui a carteira Classe 5 não deve operar uma motocicleta para aprendizado com um supervisor que possui uma carteira classe 6 não GDL",
        answers: {
          a: " Verdadeiro",
          b: " Falso",        
        },
        correctAnswer: "b"
      },
    ];
  
  
    buildQuiz();
  
   
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
   
    showSlide(currentSlide);
  
    
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  