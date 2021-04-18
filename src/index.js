import React from 'react'
import ReactDom from 'react-dom'

import Routes from './Routes'

ReactDom.render( 
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
, document.getElementById('root'))