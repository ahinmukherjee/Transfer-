// import React from 'react'
import {IoIosSwap} from "react-icons/io";

const App = () => {
  return (
    <div className="currency-converter">
      <h2 className="convert-title">Currencey</h2>
      <form className="converter-form">
        <div className="form-group">
          <label className="form-labrel">Plz Enter Amount</label>
          <input type="number" className="form-input" required/>
        </div>

        <div className="form-group">
          <div className="form-selction">
            <label className="form-labrel">form</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/US/flat/64.png"></img>
              <select className="currency-dropdown">
                <option value="USD" selected>USD</option>
                <option value="INR">INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>

          <div className="swap-icon">
            <IoIosSwap/>
            {/* <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.13 1166H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 
              .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06
              .33-16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 
              0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16l.19 5.94a.9.9 0 0 0 .68 1.4H19
              .78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z" fill="#000"/>
            </svg> */}
          </div>

          <div className="form-selction">
            <label className="form-labrel">form</label>
            <div className="currency-select">
              <img src="https://flagsapi.com/IN/flat/64.png"></img>
              <select className="currency-dropdown">
                <option value="USD" >USD</option>
                <option value="INR" selected>INR</option>
                <option value="NPR">NPR</option>
              </select>
            </div>
          </div>

         <button type="submit" className="submit-button">Start</button>

         <p className="Exchange-result">1,000 usd= 83000 inr</p>
        </div>
      </form>
    </div>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
