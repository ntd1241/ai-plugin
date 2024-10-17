import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { ClientProvider } from './contexts/ClientProvider'
import '@zendeskgarden/css-bedrock'
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ClientProvider>
    <App />
  </ClientProvider>
)
