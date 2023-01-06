import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import './index.module.scss'
import Kalc from './Kalc';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RecoilRoot>
          <Kalc />
      </RecoilRoot>
    </React.StrictMode>
)
