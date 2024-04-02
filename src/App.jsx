import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import jeff1 from './images/studentID_photo.jpg'
import jeff2 from './images/jeff_pfp.jpg'
import jeff3 from './images/IMG_1869.jpg'
import jeff4 from './images/IMG_2275.jpg'
import jeff5 from './images/IMG_2722.jpg'
import jeff6 from './images/IMG_2783.jpg'
import jeff7 from './images/IMG_2918.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>BELOW IS Jeff's Photo Collection BELOW</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Picture count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          Contracted by Jeff Inc for his own purposes
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p>
        Below are multiple pictures of Jeff Joyal; Examine at your own discretion
      </p>

      <div className="pics">
        <a href="" target="linkedinpfp">
          <img src={jeff1} className="image" alt="Jeff pic 1" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff2} className="image" alt="Jeff pic 2" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff3} className="image" alt="Jeff pic 3" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff4} className="image" alt="Jeff pic 4" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff5} className="image" alt="Jeff pic 5" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff6} className="image" alt="Jeff pic 6" />
        </a>
        <a href="" target="linkedinpfp">
          <img src={jeff7} className="image" alt="Jeff pic 7" />
        </a>
      </div>
    </>
  )
}

export default App
