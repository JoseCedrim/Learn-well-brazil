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
        question: "Se você está em uma faixa de pedestres com tráfego e a luz do sinal muda para vermelha, você deve:",
        answers: {
          a: " Buzinar e proceder caso não tenha pedestres ",
          b: "  Parar e continuar após os pedestres atravessarem",
          c: " Parar completamente o seu veículo antes da linha ou faixa de pedestre ",
          d: "Diminuir a velocidade e dar o direito aos pedestres, se for seguro fazer"
        },
        correctAnswer: "c"
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
      {
        question: "Motoristas se aproximando de uma interseção com a luz do sinal amarela (sólida) devem:",
        answers: {
          a: "Aumentar a velocidade e limpar a interseção o mais rápido o possível, independente das circunstâncias          ",
          b: "Parar o veículo completamente independente das circunstância",
          c: "Trazer o veículo a uma parada completa, a não ser que o veículo chegou num ponto onde para não é seguro          ",
          d: "Acelerar e limpar a interseção, ainda que a passagem não seja feita de modo seguro",
        
        },
        correctAnswer: "c"
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
        question: "Motoristas encontrando uma luz sólida verde tem a permissão de tráfego na interseção, sem parar, a não ser que seja necessário dar o direito para o tráfego próximo quando virando à esquerda ou quando tiver pedestres na faixa, quando virando à direita ou esquerda. Verdadeiro ou falso?",
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
      {
        question: "O que uma seta verde para a esquerda com uma luz verde significa:",
        answers: {
          a: "Você pode tratar como uma luz amarela piscando          ",
          b: "Você pode entrar na interseção e proceder para a direita          ",        
          c: "Você pode tratar como uma luz verde piscando          ",
          d: "Você pode entrar na interseção e proceder para esquerda          "
        },
        correctAnswer: "d"
      },
      {
        question: "Uma luz vermelha piscando deve ser tratada como uma placa de pare. Verdadeiro ou Falso?        ",
        answers: {
          a: "Verdadeiro",
          b: "Falso"
        },
        correctAnswer: "a"
      },
      {
        question: "Quando encontrar uma luz amarela piscando em uma interseção, você deve:",
        answers: {
          a: "Parar completamente mesmo se você tiver passado a linha de parar          ",
          b: "Proceder com cuidado após dar o direito aos pedestres ",
          c: "Proceder somente se você está virando a direita        ",
          d: "Parar completamente se você está antes da linha de parar          "
        },
        correctAnswer: "b"
      },
      {
        question: "Quando encontrar uma luz verde piscando é permitido que você:        ",
        answers: {
          a: "Aumente a velocidade e limpe a interseção",
          b: "Continue na mesma direção sem virar a esquerda ou direita",
          c: "Proceder somente se você irá virar a esquerda ou à direita",
          d: "Ir em frente, virar a esquerda ou à direita sem parar"
        },
        correctAnswer: "d"
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
  