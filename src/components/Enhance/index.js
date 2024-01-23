import { Box, Button, IconButton, Stack, } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Enhance = () => {
  const navigate = useNavigate(); 

  const fetchRandomWord = async () => {
    const res = await fetch('https://random-word-api.herokuapp.com/word', {
      method: 'GET',
      headers: {},
    })
    const randomWord = await res.json();
    return randomWord[0];
  }
  
  const handleClick = async () => {
    const word = await fetchRandomWord();
    navigate(`../search/${word}`, { relative: 'path' });
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      maxWidth: '400px',
      margin: 'auto',
      padding: 2
    }}>
      <Stack direction='row' justifyContent='space-between' sx={{ mb: 1 }}>
        <Link to='/'>
          <IconButton>
            <ArrowBackIcon/>
          </IconButton>
        </Link>
      </Stack>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button sx={{ width: 'fit-content', px: 3 }} onClick={handleClick}>
          Learn a new word!
        </Button>
      </Box>
    </Box>
  )
}

export default Enhance