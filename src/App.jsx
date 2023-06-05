import './App.css'
import Contador from './components/Contador'
import Mensaje from './components/Mensaje'
import PrimerEjercicio from './components/PrimerEjercicio'

function App() {

  return (
    <div className='App'>
      <Mensaje color="White" message="Este es una props"/>
      <PrimerEjercicio />
      <Contador />
    </div>
  )
}

export default App
