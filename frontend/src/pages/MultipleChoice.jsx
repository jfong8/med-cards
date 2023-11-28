import React, { useState } from 'react';

function MultipleChoiceQuiz() {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is the Largest Bone in the Body',
      options: ['Skull', 'Femur', 'Clavicle'],
      correctAnswer: 'Femur',
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Brain', 'Skin', 'Liver'],
      correctAnswer: 'Skin',
    },
    {
      question: 'Which part of the brain is responsible for regulating basic functions such as breathing and heartbeat?',
      options: ['Cerebellum', 'Medulla Oblongata', 'Hippocampus', 'Frontal Lobe'],
      correctAnswer: 'Medulla Oblongata',
    },
    {
      question: 'Which bone is also known as the collarbone?',
      options: ['Femur', 'Humerus', 'Radius', 'Clavicle'],
      correctAnswer: 'Clavicle',
    },
  ];

  const handleAnswerChange = (question, selectedAnswer) => {
    setAnswers({
      ...answers,
      [question]: selectedAnswer,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line max-len
    const newScore = questions.reduce((totalScore, question) => (answers[question.question] === question.correctAnswer
      ? totalScore + 1
      : totalScore), 0);

    setScore(newScore);
  };

  return (
    <div style={{ marginLeft: '40px' }}>
      <h1>Multiple Choice Quiz</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div>
            <p>{question.question}</p>
            {question.options.map((option) => (
              <label htmlFor="radio">
                <input
                  type="radio"
                  name={question.question}
                  value={option}
                  checked={answers[question.question] === option}
                  onChange={() => handleAnswerChange(question.question, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>
        Your score:
        {' '}
        {score}
        {' '}
        out of
        {' '}
        {questions.length}
      </p>
    </div>
  );
}

export default MultipleChoiceQuiz;
