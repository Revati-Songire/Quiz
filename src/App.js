import { useState } from 'react';
import './App.css';

function App() {
  const [quiz, setQuiz] = useState([
    {
      Question_No: 1,
      Question: 'What is the correct command to create a new React project?',
      Correct_answer: "npx create-react-app app-name",
      Users_answer: "",
      Options: ['npx create-react-app',
        'npm create-react-app',
        'npx create-react-app app-name',
        'npm create-react-app app-name']
    },
    {
      Question_No: 2,
      Question: 'What command is used to start the React local development server?',
      Correct_answer: "npm start",
      Users_answer: "",
      Options: ['npm build', 'npm start', 'npm run dev', 'npm serve']
    },
    {
      Question_No: 3,
      Question: 'What is the default local host port that a React development server uses?',
      Correct_answer: 3000,
      Users_answer: "",
      Options: [5000, 3000, 8080, 3500]
    },
    {
      Question_No: 4,
      Question: 'Which keyword creates a constant in JavaScript?',
      Correct_answer: "const",
      Users_answer: "",
      Options: ['var', 'constant', 'let', 'const']
    },
    {
      Question_No: 5,
      Question: 'A copy of the real DOM that is kept in memory is called what?',
      Correct_answer: "Virtual DOM",
      Users_answer: "",
      Options: ['Virtual DOM', 'DOM', 'Real DOM', 'Shadow DOM']
    },
    {
      Question_No: 6,
      Question: 'React component names must begin with an uppercase letter.',
      Correct_answer: "True",
      Users_answer: "",
      Options: ['False', 'True',]
    },
    {
      Question_No: 7,
      Question: 'Which operator can be used to conditionally render a React component?',
      Correct_answer: "::",
      Users_answer: "",
      Options: ['::', '??', '&&', '||']
    },
    {
      Question_No: 8,
      Question: 'What tool does React use to compile JSX?',
      Correct_answer: "Babel",
      Users_answer: "",
      Options: ['React DOM', 'Babel', 'React Router', 'JSX Compiler']
    },
    {
      Question_No: 9,
      Question: 'What is ReactJS mainly used for building?',
      Correct_answer: "User Interface",
      Users_answer: "",
      Options: ['Database', 'Connectivity', 'User Interface', 'Design Platform']
    },
    {
      Question_No: 10,
      Question: 'Which company developed ReactJS?',
      Correct_answer: "Facebook",
      Users_answer: "",
      Options: ['Apple', 'Facebook', 'Google', 'Twitter']
    }
  ])

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  
  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      console.log(quiz.length)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleOptions = (selectedOption) => {
    const updatedQuiz = [...quiz];
    updatedQuiz[currentQuestion].Users_answer = selectedOption;
    console.log(updatedQuiz)
    setQuiz(updatedQuiz);
  }

  const handleSubmit = () => {
    console.log('Quiz Submitted', quiz)
    alert('Quiz Submitted')
    setSubmitted(true)
  }

  const calculateMarks = () => {
    let marks = 0;
    quiz.filter((item) => {
      if (item.Users_answer === item.Correct_answer) {
        marks++;
      }
    })
    return marks;
  }
  
  return (
    <>
    <div className="App">
      {!submitted ? (
        <div className='questions'>
          <h1>{quiz[currentQuestion].Question_No}. {quiz[currentQuestion].Question}</h1>
          <div className='options' style={{ marginTop: '30px' }}>
            {quiz[currentQuestion].Options.map((option, index) => {
              return (
                <button key={index} >
                  <div><input type='radio' value={option}
                    checked={quiz[currentQuestion].Users_answer === option} onClick={() => handleOptions(option)}/> {option}</div>
                </button>
              )
            })}
          </div>

          <div className='buttons'>
            <button className='prev' onClick={handlePrevious} >PREVIOUS</button>
            <button className='submit' type='submit' onClick={handleSubmit}>SUBMIT</button>
            <button className='next' onClick={handleNext} >NEXT</button>
          </div>
        </div>
      ) : (
        <>
          <h1>Quiz Result</h1>
          <div className="quiz-result-container">
            <table className="quiz-result-table">
              <thead>
               <tr>
              <th>Question No.</th>
              <th>User Selected Answer</th>
              <th>Correct Answer</th>
              </tr> 
              </thead>
              <tbody>
                {quiz.map((item, index) => (
                  <tr key={index}>
                    <td>{item.Question_No}</td>
                    <td style={{color:item.Users_answer === item.Correct_answer ? "green" : item.Users_answer == "" ? "black" : "red"}}>
                    {item.Users_answer == "" ? 'Not Answered' : item.Users_answer}
                    </td>
                    <td>{item.Correct_answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='total'>
            <h2>Total Marks Obtained: {calculateMarks()} / {quiz.length}</h2>
          </div>
        </>
      )}
    </div>
    </>
  );
}


export default App;
