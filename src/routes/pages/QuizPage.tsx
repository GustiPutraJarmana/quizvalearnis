import React, { useState } from "react";
import AuthPage from "./AuthPage";
import { Link } from "react-router-dom";

interface Iquestion {
  question: string;
  options: string[];
  answer: string;
  checkAnswer: string;
}

const QuizPage: React.FC = () => {
  const [quiz, setQuiz] = useState<Iquestion[]>([
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      answer: "Paris",
      checkAnswer: "",
    },
    {
      question: "What is the largest country by area?",
      options: ["Russia", "China", "USA", "Canada"],
      answer: "Russia",
      checkAnswer: "",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Everest",
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

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  console.log({ quiz });

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
                      <button className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-900">
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
