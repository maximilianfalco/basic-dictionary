import { Box, FilledInput, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import BookIcon from '../../assets/book_icon.png';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [word, setWord] = useState(''); 
  
  const navigate = useNavigate();

  const searchWord = () => {
    navigate(`/search/${word}`, { relative: 'path' })
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      maxWidth: '400px',
      margin: 'auto'
    }}>

      {/* Main Title */}
      <img src={BookIcon} alt='Books' title='Books' style={{ width: '100px' }}/>
      <Typography variant='h3' sx={{ mt: 0.5 }}>
        Dictionary
      </Typography>
      <Typography>
        Find meaning to words and learn new ones!
      </Typography>

      {/* Input Field */}
      <Box sx={{ width: '360px' }}>
        <FilledInput disableUnderline placeholder='Search' sx={{ 
          my: 2,
          backgroundColor: 'white',
          boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.05)',
          borderRadius: '5px',
          '& .MuiFilledInput-input': {
            p: 2,
          } 
          }} 
          startAdornment={<SearchIcon/>}
          fullWidth
          onChange={e => {
            const trimmed = e.target.value.trim();
            setWord(trimmed.toLowerCase());
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (!word) return;
              if (word.includes(' ')) {
                alert('Please only type in one word.')
                return;
              }; 
              searchWord();
              e.target.value = '';
            };
          }}
        />
      </Box>

      {/* Icon Buttons */}
      <Stack direction='row' spacing={1}>
        <Link to='/bookmarks'>
          <IconButton title='Bookmarks'>
            <BookmarkIcon/>
          </IconButton>
        </Link>
        <Link to='/enhance'>
          <IconButton title='New Word'>
            <AddIcon/>
          </IconButton>
        </Link>
      </Stack>
    </Box>
  )
}

export default Home