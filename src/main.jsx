import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { IdiomProvider } from './contexts/ChangeIdiom.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IdiomProvider>
      <App />
    </IdiomProvider>
  </React.StrictMode>,
)
