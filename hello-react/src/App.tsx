import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const myVoice = 'hey'
function Hello() {
    return (
        <h1 text-cyan> {myVoice} </h1>
    )
}
function List() {
    const dataList = [
        { id: 1, title: 'Jack' },
        { id: 2, title: 'Mike' },
        { id: 3, title: 'Rory' }
    ]
    
    const listDom = dataList.map((item) => 
        <p key={item.id} style={{
                color: item.id%2==0 ? 'red' : 'cyan'
            }}>
            { item.title }
        </p>
    )
    
    return (
    	<>
        	<ul>{listDom}</ul>
      </>
    )
}
function App() {
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
      <List />
    </>
  )
}

export default App
