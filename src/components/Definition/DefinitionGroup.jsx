import { Box, Divider } from '@mui/material'
import React from 'react'
import DefinitionCard from './DefinitionCard'

const DefinitionGroup = (props) => {
  console.log(props.meaning)
  return (
    <Box>
      <Divider sx={{ my: 1 }} /> 
      {props.meaning.meanings.map((meaning) => (
        <DefinitionCard 
          antonym={meaning.antonym}
          definitions={meaning.definitions}
          partOfSpeech={meaning.partOfSpeech}
          synonyms={meaning.synonyms}
          />
      ))}
        
    </Box>
  )
}

export default DefinitionGroup