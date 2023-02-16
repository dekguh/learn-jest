import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { getListAlbums, TDataAlbums } from '../utils/api'

const Home = () => {
  const [dataAlbums, setDataAlbums] = React.useState<TDataAlbums>([])

  const fetchDataAlbums = async () => {
    const result = await getListAlbums()
    setDataAlbums(result)
  }

  React.useEffect(() => {
    fetchDataAlbums()
  }, [])

  return (
    <Box data-testid='home-id'>
      <Typography>Learning Jest</Typography>
      <Stack marginTop='20px'>
        {dataAlbums?.map(item => (
          <Typography key={item.id}>{item.title}</Typography>
        ))}
      </Stack>
    </Box>
  )
}

export default Home