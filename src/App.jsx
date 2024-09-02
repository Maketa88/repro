
import reactLogo from './assets/calavera-mexicana.png'


import './App.css'
import { Player1 } from './componets/Player1'

function App() {
  

  return (
    <>
      <div className='fondo'>
        
        <div className='calavera'>
          <img src={reactLogo} className="logoreact" alt="React logo" />
          </div>
        
        <Player1/>
      </div>
      
    </>
  )
}

export default App
