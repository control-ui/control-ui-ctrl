import React from 'react'
import { render } from 'react-dom'
import { App } from './App'

render(
    <React.Profiler id="Pickers Demo App" onRender={() => null}>
        <App/>
    </React.Profiler>,
    document.querySelector('#root'),
)
