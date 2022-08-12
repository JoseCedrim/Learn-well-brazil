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
        question: "Pedestres podem atravessar qualquer interseção, a qualquer momento sem checar por veículos antes de atravessarem:",
        answers: {
          a: "Verdadeiro",
          b: "Falso",
        },
        correctAnswer: "b"
      },
      {
        question: "Duas luzes vermelhas sólidas devem ser tratada como 1 luz vermelha?",
        answers: {
          a: "Verdadeiro",
          b: "Falso",
        
        },
        correctAnswer: "a"
      },
      {
        question: "Você pode virar a direita, no sinal vermelho, após parar completamente antes da linha ou faixa de pedestre:",
        answers: {
          a: "Sim, a não ser que uma sinalização proíba",
          b: "Não, nunca",
          c: "Sim, sempre",
          d: "Não, a não ser que a sinalização permita",
        
        },
        correctAnswer: "a"
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
  