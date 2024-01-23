import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, Grid } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import theme from './theme'
import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Definition from './components/Definition'
import Enhance from './components/Enhance'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bookmarks' element={<Bookmarks/>}/>
            <Route path='/search/:word' element={<Definition/>}/>
            <Route path='/enhance' element={<Enhance/>}/>
          </Routes>
        </Router>
    </ThemeProvider>
  )
}

export default App
