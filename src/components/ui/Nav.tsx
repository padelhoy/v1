import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
// import { Poppins } from 'next/font/google'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='primary'>
                <Toolbar sx={{ color: 'white', justifyContent: 'center' }}>
                    <Typography
                        variant='h6'
                        component='div'
                        color='inherit'
                        align='center'
                        sx={{ flexGrow: 1 }}
                        // className={poppins.className}
                    >
                        PadelHoy
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
