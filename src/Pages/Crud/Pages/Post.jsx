import { Box, TextField, Divider, Stack } from '@mui/material';

const Post = ({name}) => {
  console.log(name)
  return (
    <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} 
    direction="column"
    justifyContent="space-evenly"
    alignItems="stretch"
    spacing={0}  
    >
      <Stack direction="row"  justifyContent='space-between' alignItems='center' 
        sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1, paddingLeft: '15px', textAlign:'left' }}
      >
        <Box>
          ФИО
        </Box>
      </Stack>
      <Divider />
      <Stack direction="row"  justifyContent='space-between' alignItems='center' 
        sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1, paddingLeft: '15px', textAlign:'left' }}
      >
        <Box>
        Название поста
        </Box>
      </Stack>
      <Divider />
      <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1}}>
        <TextField size="small" 
        sx={{ m: 1,  width: { sm: 5000, md: '98%'},
        "& .MuiInputLabel-root": { fontSize: 13 }, 
        "& .MuiInputBase-root": { height: 35 },
        }}  label="Напишите комментарий" multiline fontSize='15px'>
        </TextField>
      </Box>
    </Stack>
  )
}

export default Post 