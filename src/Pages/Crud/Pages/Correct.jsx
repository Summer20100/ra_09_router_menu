import { Box, Stack, TextField, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Correct = () => {

  return (
    <Stack sx={{ bgcolor: '#fff', width: 800, borderRadius: 1, padding: '15px' }} 
      direction="column"
      justifyContent="space-evenly"
      alignItems="stretch"
      spacing={0}  
    > 
        <Stack direction="row"  justifyContent='space-between' alignItems='center' 
            sx={{ bgcolor: '#fff', 
            width: 800, 
            minHeight: 50, 
            borderRadius: 1, 
            paddingLeft: '15px', 
            textAlign:'left' }}
        >
            <Box>ФИО</Box>
        </Stack>
        <Divider />
        <Box sx={{ bgcolor: '#fff', width: 800, minHeight: 50, borderRadius: 1 }}>
            <TextField size="small" 
                sx={{ m: 1,  width: { sm: 500, md: '98%'},
                "& .MuiInputLabel-root": { fontSize: 13 }, 
                "& .MuiInputBase-root": { height: 35 },
            }}  label="Напишите комментарий" multiline fontSize='15px' />
        </Box>
        <Divider />
        <Stack direction="row"  justifyContent='space-between' alignItems='center' 
            sx={{ bgcolor: '#fff', 
            width: 800, 
            minHeight: 50, 
            borderRadius: 1, 
            paddingLeft: '15px', 
            textAlign:'left' }}
        >
            <Box>Набор иконок</Box>
        </Stack>

        <Divider />
        <Stack direction="row" justifyContent="flex-end" alignItems="center" >
            <Button variant="contained" 
                size='large' 
                sx={{ width: 130, bgcolor: `primary.light`, fontSize: 10, margin: 1}}>
                    Изменить
            </Button>
            <Button variant="contained" 
                size='large' 
                color="error"
                sx={{ width: 130, bgcolor: `primary.red`, fontSize: 10, margin: 1 }}>
                    Удалить
            </Button>
        </Stack>
    </Stack>
  )
}

export default Correct 