import { Button, Box, Stack } from '@mui/material';

const Header = () => {
  return (
    <Stack sx={{ bgcolor: '#fff', height: 50, borderRadius: 1}} alignItems="flex-end" >
      <Button variant="contained" 
      size='large'
      sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1 }}>
        Создать пост
      </Button>
    </Stack>
  )
}

export default Header 