import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export default async function Organizador({ params }: { params: Promise<{ Organizador: string }> }) {
    const organizador = (await params).Organizador

    return (
        <Stack gap={1}>
            <Container maxWidth='sm'>
                <Image src='/hero.jpg' alt='hero' layout='responsive' width={600} height={123} />
                <Typography
                    sx={{ fontWeight: 600, letterSpacing: '-0.02em', textAlign: 'left', fontSize: '28.8px' }}
                    variant='h6'
                    component='h1'
                >
                    {organizador}
                </Typography>
                <Typography>116847-5867</Typography>
                <Typography>Instagram del organizador</Typography>
            </Container>
        </Stack>
    )
}
