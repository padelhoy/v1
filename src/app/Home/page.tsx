import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

export default function Home() {
    return (
        <Stack gap={1}>
            <Container maxWidth='sm'>
                <Image src='/hero.jpg' alt='hero' layout='responsive' width={600} height={123} />
                <Typography>hola mundis</Typography>
                <Box></Box>
            </Container>
        </Stack>
    )
}
