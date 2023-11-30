import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'virtual:uno.css'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <BrowserRouter >
    <App />
   </BrowserRouter>
)