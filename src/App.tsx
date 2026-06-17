import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const button = document.querySelector(".counter") as HTMLButtonElement;
  
  if (count === 10){
    button.style.backgroundColor = "green";
    button.style.color = "white";
}

  return (
    <>
      <section id="center">
        
        <div>
          <h1>Vamos começar!</h1>
          <p>
            Edite <code>src/App.tsx</code> e salve para testar <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Contar é {count}
        </button>
      </section>
    </>
  )
}

export default App
