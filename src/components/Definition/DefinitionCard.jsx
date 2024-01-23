import { Box, Typography } from '@mui/material'
import React from 'react'

const DefinitionCard = (props) => {
  const antonyms = props.antonyms;
  const definitions = props.definitions;
  const partOfSpeech = props.partOfSpeech;
  const synonyms = props.synonyms;


  return (
    <Box sx={{ 
      backgroundColor: 'lightGrey',
      mb: 1,
      padding: 1,
      borderRadius: 1
      }}>
      <Typography variant='button'>
        {partOfSpeech}
      </Typography>
      {definitions.map((definition) => (
        <Typography sx={{ fontSize: '0.8em' }}>{`- ${definition.definition}`}</Typography>
      ))}
    </Box>
  )
}

export default DefinitionCard