'use client'

import theme from '@/theme/theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
})

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box className={poppins.className}>{children}</Box>
        </ThemeProvider>
    )
}
