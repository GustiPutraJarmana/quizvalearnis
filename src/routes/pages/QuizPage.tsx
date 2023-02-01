import React, { useState } from "react";
import AuthPage from "./AuthPage";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const quiz: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "London", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest country by area?",
    options: ["Russia", "China", "USA", "Canada"],
    answer: "Russia",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Everest",
  },
];

const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleAnswer = (answer: string) => {
    if (answer === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion === quiz.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <AuthPage>
      <div className="relative flex flex-col overflow-hidden">
        <div className="flex items-center justify-center h-screen flex-col z-30 text-black bg-slate-500 bg-opacity-50 rounded-lg">
          <div className="flex flex-col align-center px-6 py-9 bg-cyan-300 bg-opacity-80 border-none rounded-md cursor-pointer">
            <div className="mb-4 text-3xl sm:text-4xl">
              Question {currentQuestion + 1} :
            </div>
            <div className="mb-4 text-3xl md:text-4xl text-red-500">
              {quiz[currentQuestion].question}
            </div>
            <div className="flex md:flex-row flex-col justify-between">
              {quiz[currentQuestion].options.map((option, index) => (
                <div className="text-center p-4">
                  <button
                    key={index}
                    className="m-4 md:m-10 px-6 py-2 md:px-7 hover:text-red-500 hover:bg-black rounded-md bg-red-500 text-2xl"
                    onClick={() => handleAnswer(option)}>
                    {option}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center">
              {currentQuestion !== 0 && (
                <div className="">
                  <button className="prev" onClick={handlePrev}>
                    &#60;Prev
                  </button>
                </div>
              )}
              {/* {showResults && (
              <Link to="/result">
                  <button className="">
                    Submit 
                  </button>
              </Link>
            )} */}
              {currentQuestion !== quiz.length - 1 && (
                <div className="">
                  <button className="next" onClick={handleNext}>
                    Next&#62;
                  </button>
                </div>
              )}
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
