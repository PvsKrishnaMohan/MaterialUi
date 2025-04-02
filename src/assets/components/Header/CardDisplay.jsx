import { Stack } from '@mui/material'
import React from 'react'
import MediaCard from './Card'

const CardDisplay = () => {
  return (
    <Stack direction='row' spacing={8} style={{margin:'30px 60px'}}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
    </Stack>
  )
}

export default CardDisplay