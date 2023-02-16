import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

const Login = () => {
  const [isCheckingAuth, setIsCheckingAuth] = React.useState<true | false>(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsCheckingAuth(false)
    }, 1000)
  }, [])

  return (
    <Box>
      <Typography data-testid='loading-text'>{isCheckingAuth ? 'checking...' : 'finished'}</Typography>

      <TextField role='email' label='email' size='small' data-testid='tes'/>
      <TextField role='password' label='password' type='password' size='small' />
      <Button role='login' variant='contained'>login</Button>
    </Box>
  )
}

export default Login