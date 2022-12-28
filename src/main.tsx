import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.module.scss'
import Kalc from './kalc';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Kalc />
  </React.StrictMode>
)
