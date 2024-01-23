import { Box, IconButton, Stack, Typography, } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DefinitionCard from './DefinitionCard';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DefinitionGroup from './DefinitionGroup';

const Definition = () => {
  const { word } = useParams();
  const [ meanings, setMeanings ] = useState(null);
  const [ bookmarked, setBookmarked ] = useState(false);

  const fetchGet = async (word) => {
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word, {
      method: 'GET',
      headers: {},
    })
  }

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  }

  useEffect(() => {
    const fetchMeaning = async () => {
      setMeanings(null);
      const res = await fetchGet(word);
      if (!res.ok) return;
      const data = await res.json();
      setMeanings(data)
    }
    fetchMeaning();
  }, [word]);

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
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
        <IconButton onClick={toggleBookmark}>
          {bookmarked ? <BookmarkIcon/> : <BookmarkBorderIcon/>}
        </IconButton>
      </Stack>
      <Box sx={{
          backgroundColor: "lightGrey",
          mb: 1,
          borderRadius: 1,
          padding: 1,
        }}>
        <Typography variant='h3'>
          {word}
        </Typography>
      </Box>

      <Stack>
        {meanings
          ?
          (<>
            {meanings.map((meaning) => (
              <DefinitionGroup meaning={meaning}/>
            ))}
          </>)
          :
          (<>
            {'Sorry we could not find the definition of this word :('}
          </>)
        }
      </Stack>
    </Box>
  )
}

export default Definition