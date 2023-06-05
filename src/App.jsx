import './App.css'
import Mensaje from './components/Mensaje'

function App() {

  return (
    <div className='App'>
      <Mensaje color="White" message="Este es una props"/>
      <Mensaje color="red" message="y esta otra props"/>
    </div>
  )
}

export default App
