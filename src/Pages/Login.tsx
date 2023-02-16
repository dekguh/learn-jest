import React from 'react'
import { Box, Button, TextField } from '@mui/material'

const Login = () => {
  return (
    <Box>
      <TextField role='email' label='email' size='small' data-testid='tes'/>
      <TextField role='password' label='password' type='password' size='small' />
      <Button role='login' variant='contained'>login</Button>
    </Box>
  )
}

export default Login