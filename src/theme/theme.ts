import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
})

const theme = createTheme({
    palette: {
        primary: {
            main: '#459465',
            contrastText: '#fff',
        },
        // secondary: {
        //     main: '#175f33',
        //     // contrastText: '#fff',
        // },
        warning: {
            main: orange[500],
            contrastText: '#333',
        },
        /* pending: {
            main: yellow[500],
            text: yellow[500],
            color: yellow[500],
            contrastText: '#333',
        }, */
        /* inputBorder: {
            main: 'hsla(0, 0%, 0%, 0.23)',
            contrastText: 'red',
            text: 'red',
            color: 'red',
        }, */
        background: {
            /* primary: {
                main: '#1b4c78',
            }, */
            /* secondary: {
                main: '#175f33',
            }, */
            /* warning: {
                main: orange[500],
                contrastText: '#333',
            }, */
            /* pending: {
                main: yellow[500],
                text: yellow[500],
                color: yellow[500],
                contrastText: '#333',
            }, */
        },
    },
    typography: {
        fontSize: 14,
        allVariants: {
            color: '#2b2b2b',
        },
        /* color: {
            pending: {
                main: yellow[500],
            },
        }, */
        fontFamily: `${poppins.style.fontFamily}, Roboto, sans-serif`,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 600,
            xl: 600,
        },
    },
})

export default theme
