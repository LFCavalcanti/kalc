import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './main.module.scss'
import './index.module.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>KALC</h1>
    <div className={styles.frame}>
      <p>TESTE</p>
    </div>
  </React.StrictMode>,
)
