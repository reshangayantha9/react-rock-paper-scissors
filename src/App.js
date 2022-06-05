import React,{useState,useEffect}from 'react'
function App() {
  const [userChoice,setUserChoice]=useState("rock")
  const [computerChoice,setComputerChoice]=useState('rock')
  const[userPoint,setUserPoint]=useState(0);
  const[computerPoint,setComputerPoint]=useState(0);
  const[turnResult,setTurnResult]=useState(0)
  const[result,setResult]=useState('Let\'s see who wins')
  const[gameOver,setGameOver]=useState(false)

  const choices=['rock','paper','scissors']

  const handleOnClick=(choice)=>{
    setUserChoice(choice)
    generateComputerChoice()
  }
  const generateComputerChoice=()=>{
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }
  const reset=()=>{
    window.location.reload()
  }
  useEffect(()=>{
    const comboMoves=userChoice+computerChoice
    if(userPoint <=4 && computerPoint <=4){
      if(comboMoves ==='rockscissors' || comboMoves === 'paperrock' || comboMoves==='scissorspaper'){
        const updateUserPoint=userPoint+1
        setUserPoint(updateUserPoint)
        setTurnResult('User got the point')
        if(updateUserPoint ===5){
          setGameOver(true)
          setResult('User Wins')
        }
      }
      if(comboMoves ==='papercissors' || comboMoves === 'scissorsrock' || comboMoves==='rockpaper'){
        const updatedComputerPoint=computerPoint+1
        setComputerPoint(updatedComputerPoint)
        setTurnResult('Computer got the point')
        if(updatedComputerPoint ===5){
          setGameOver(true)
          setResult('Computer Wins')
        }
      }
      if(comboMoves ==='rockrock' || comboMoves === 'paperpaper' || comboMoves==='scissorsscissors'){
        setTurnResult('No one got a point')
        
      }
    }
  },[userChoice,computerChoice])

  return (
    <div className="App">
      <h1 className='heading'>Rock Paper Scissors Game</h1>    
      <div className='score'>
        <h2>User Points :{userPoint}</h2>
        <h2>Computer Points :{computerPoint}</h2>
      </div>
      <div className='choice'>
          <div className='choiceUser'>
            <img className='userHand' src={`../img/${userChoice}.png`}/>
          </div>
          <div className='computerUser'>
            <img className='computerHand' src={`../img/${computerChoice}.png`}/>
          </div>
      </div>
      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleOnClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      <div className='result'>
        <h3>Turn Result : {turnResult}</h3>
        <h3>Final Result : {result}</h3>
      </div>
      <div className='button-div'>
        {gameOver && <button className='button' onClick={()=>reset()}>Restart Game ?</button>}
      </div>
    </div>
  );
}

export default App;
