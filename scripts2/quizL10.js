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
        question: "Duas luzes vermelhas sólidas devem ser tratada como 1 luz vermelha?",
        answers: {
          a: "Verdadeiro",
          b: "Falso",
        
        },
        correctAnswer: "a"
      },
      {
        question: "Motoristas encontrando uma luz sólida verde tem a permissão de tráfego na interseção, sem parar, a não ser que seja necessário dar o direito para o tráfego próximo quando virando à esquerda ou quando tiver pedestres na faixa, quando virando à direita ou esquerda. Verdadeiro ou falso?",
        answers: {
          a: "Verdadeiro",
          b: "Falso",        
        },
        correctAnswer: "a"
      },
      {
        question:  "Motoristas encontrando uma luz sólida verde tem a permissão de tráfego na interseção, sem parar, a não ser que seja necessário dar o direito para o tráfego próximo quando virando à esquerda ou quando tiver pedestres na faixa, quando virando à direita ou esquerda. Verdadeiro ou falso?",
        answers: {
          a: "Verdadeiro",
          b: "Falso",        
        },
        correctAnswer: "a"
      },
      {
        question: "Quando chegando perto de um sinal verde, uma boa maneira de antecipar a luz amarela é checar a luz de pedestre (travessia) na interseção. Verdadeiro ou Falso?        ",
        answers: {
          a: "Falso",
          b: "Verdadeiro",        
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
  