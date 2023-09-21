import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const root = document.querySelector('#root')
if(!root) throw new Error('Missing PWA root')
createRoot(root)
    .render(<React.Profiler id="Pickers Demo App" onRender={() => null}>
        <App/>
    </React.Profiler>)
