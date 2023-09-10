import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const NewPost = () => {

  return (
    <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} 
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={0}  
    > 
      <Stack paddingLeft="15px" 
      direction="row"  
      justifyContent='space-between' 
      alignItems='center' 
      sx={{ bgcolor: '#fff', width: 785, minHeight: 50, borderRadius: 1 }}>
        <Box>
          Набор Иконок Паблика
        </Box>
        <Button variant="contained" 
          sx={{ bgcolor: 'inherit', 
          "&:hover": { bgcolor: 'inherit' }, 
          fontSize: 10, margin: 1, minWidth:'10px', padding: .5,
        }}
        >
          <CloseIcon sx={{ color: 'red', fontSize: '20px'}} ></CloseIcon>
        </Button>
      </Stack>
      <Divider />
      <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1 }}>
        <TextField size="small" 
          sx={{ m: 1,  width: { sm: 500, md: '98%'},
          "& .MuiInputLabel-root": { fontSize: 13 }, 
          "& .MuiInputBase-root": { height: 35 },
          }}  label="Напишите комментарий" multiline fontSize='15px'>
        </TextField>
      </Box>
      <Divider />
      <Button variant="contained" 
      size='large' 
      sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1, alignSelf: 'flex-end' }}>
        Опубликовать
      </Button>
    </Stack>
  )
}

export default NewPost 