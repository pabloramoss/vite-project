import './App.css'
import CountdownTimer from './components/Countdown'
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Title />
      <CountdownTimer targetDate={new Date('2023-03-02')} />
    </div>
  )
}

export default App
