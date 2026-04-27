import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/*
  The entry point, the first file Vite/React loads.

  ReactDOM.createRoot() mounts our React app into the <div id="root">
  in index.html. Everything from here down is React-managed.

  StrictMode is a development tool that highlights potential bugs by
  intentionally double-invoking renders and effects. It has no effect
  in production builds.
*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)