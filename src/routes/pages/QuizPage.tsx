import React, { useState } from "react";
import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { incrementResult, countTotal, descrementResult } from '../../store'
import { useSelector } from 'react-redux'
import { RootState } from "../../store";


interface Iquestion {
  question: string;
  options: string[];
  answer: string;
  checkAnswer: string;
}

const QuizPage: React.FC = () => {
  const result = useSelector((state: RootState) => state.resultQuiz)
  const [quiz, setQuiz] = useState<Iquestion[]>([
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris",
      checkAnswer: "",
    },
    {
      question: "What is the largest country by area?",
      options: ["China", "USA", "Canada", "Russia"],
      answer: "Russia",
      checkAnswer: "",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Everest",
      checkAnswer: "",
    },
    {
      question: "In 1768, Captain James Cook set out to explore which ocean?",
      options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
      checkAnswer: "",
    },
    {
      question: "What is actually electricity?",
      options: ["A flow of water", "A flow of air", "A flow of atoms", "A flow of electrons"],
      answer: "A flow of electrons",
      checkAnswer: "",
    },
    {
      question: "Which of the following is not an international organisation?",
      options: ["FIFA", "FBI", "ASEAN", "NATO"],
      answer: "FBI",
      checkAnswer: "",
    },
    {
      question: "What is the speed of sound?",
      options: ["120 km/h", "1,200 km/h", "400 km/h", "700 km/h"],
      answer: "1,200 km/h",
      checkAnswer: "",
    },
    {
      question: "What was the first country to use tanks in combat during World War I?",
      options: ["France", "Japan", "Britain", "Germany"],
      answer: "Britain",
      checkAnswer: "",
    },
    {
      question: "What is the main component of the sun?",
      options: ["Liquid lava", "Gas", "Molten iron", "Rock"],
      answer: "Gas",
      checkAnswer: "",
    },
    {
      question: "Which two months are named after Emperors of the Roman Empire?",
      options: ["January and February", "March and April", "May and June", "July and August"],
      answer: "July and August",
      checkAnswer: "",
    },
    {
      question: "Which of the following animals can run the fastest?",
      options: ["Cheetah", "Leopard", "Tiger", "Lion"],
      answer: "Cheetah",
      checkAnswer: "",
    },
    {
      question: "Which of the following actors was the first one to play James Bond?",
      options: ["Timothy Dalton", "Roger Moore", "Sean Connery", "George Lazenby"],
      answer: "Sean Connery",
      checkAnswer: "",
    },
    {
      question: "In which country is Transylvania?",
      options: ["Bulgaria", "Romania", "Croatia", "Serbia"],
      answer: "Romania",
      checkAnswer: "",
    },
    {
      question: "How many time zones are there in total in the world?",
      options: ["8", "16", "24", "32"],
      answer: "24",
      checkAnswer: "",
    },
    {
      question: "Neil Armstrong was the first astronaut in the world to step foot on the moon. Who was the second?",
      options: ["Yuri Gagarin", "James Irwin", "Alan Bean", "Buzz Aldrin"],
      answer: "Buzz Aldrin",
      checkAnswer: "",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const handleAnswer = (answer: string) => {
    const storeTemp = quiz[currentQuestion];
    storeTemp.checkAnswer = answer;
    quiz[currentQuestion] = storeTemp;
    setQuiz([...quiz]);
  };

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(countTotal(quiz.length))
    handleNext()
  }

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    const correct = quiz[currentQuestion].answer === quiz[currentQuestion].checkAnswer;
    if (correct) {
      dispatch(incrementResult());
    } else if (result?.result < 0) {
      dispatch(descrementResult());
    }
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
    if (result?.result !== 0) {
      dispatch(descrementResult());
    }
  };

  return (
    <AuthPage>
      <div className="relative flex flex-col overflow-hidden">
        <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-500 bg-opacity-50 rounded-lg">
          <div className="flex flex-col px-8 py-10  bg-cyan-300 bg-opacity-80 border-none rounded-md">
            <div className="mb-4 text-xl md:text-2xl md:mb-2 shadow-black">
              Question {currentQuestion + 1} :
            </div>
            <div className="mb-4 text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
              {quiz[currentQuestion].question}
            </div>
            <div className="flex md:flex-row flex-col justify-center md:justify-between">
              {quiz[currentQuestion].options.map((option, index) => (
                <div key={index} className="">
                  {quiz[currentQuestion].checkAnswer === option ? (
                    <button
                      className="m-4 md:m-10 px-6 py-1 md:px-7 bg-red-600 ring-4 ring-red-600 rounded-2xl text-2xl"
                      onClick={() => handleAnswer(option)}>
                      {option}
                    </button>
                  ) : (
                    <button
                      className="m-4 md:m-10 px-6 py-1 md:px-7 bg-clip-text text-transparent bg-gradient-to-r hover:text-black hover:ring-4 hover:ring-pink-500 from-pink-500 to-violet-900 ring-4 ring-pink-600 rounded-2xl text-2xl"
                      onClick={() => handleAnswer(option)}>
                      {option}
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-around mt-9">
              <div className="">
                {currentQuestion !== 0 && (
                  <div className="">
                    <button
                      className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900"
                      onClick={handlePrev}>
                      &#8678; Prev
                    </button>
                  </div>
                )}
              </div>
              <div className="">
                {quiz[currentQuestion].checkAnswer !== "" &&
                  currentQuestion !== quiz.length - 1 && (
                    <div className="">
                      <button
                        className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900"
                        onClick={handleNext}>
                        Next &#8680;
                      </button>
                    </div>
                  )}
                {currentQuestion === quiz.length - 1 &&
                  quiz[currentQuestion].checkAnswer && (
                    <Link to="/result" replace>
                    {/* add to totalQuestion payload here */}
                      <button 
                      onClick={handleSubmit}
                      className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
                        Submit &#10004;
                      </button>
                    </Link>
                  )}
              </div>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none align-middle">
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/666882521/rendition/360p/360p.mp4?loc=external&oauth2_token_id=57447761&signature=ab43a4ef7cdcb5f34f7a9c70ca9421e6a3447f013e73be1055fc4a930ab4c4d5"
            type="video/mp4"
          />
          <div className="flex justify-center items-center align-center">
            <h1 className="text-cyan-500">UPSIDE_DOWN</h1>
          </div>
        </video>
      </div>
    </AuthPage>
  );
};

export default QuizPage;
