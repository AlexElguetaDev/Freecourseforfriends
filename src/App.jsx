import './App.css'
import Mensaje from './components/Mensaje'
import PrimerEjercicio from './components/PrimerEjercicio'

function App() {

  return (
    <div className='App'>
      <Mensaje color="White" message="Este es una props"/>
      <PrimerEjercicio />
    </div>
  )
}

export default App
