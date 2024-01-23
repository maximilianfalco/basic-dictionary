import { Box, IconButton } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
  return (
    <Box>
      <div>Bookmarks</div>
      <Link to='/'>
        <IconButton>
          <HomeIcon/>
        </IconButton>
      </Link>
    </Box>
  )
}

export default Bookmarks