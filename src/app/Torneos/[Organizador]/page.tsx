import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Torneos from './Torneos'
import { Organizador as OrganizadorT } from './types'

export default async function Organizador({ params }: { params: Promise<{ Organizador: string }> }) {
    const organizadorParam = (await params).Organizador
    const organizador = (await import(`../../../data/${organizadorParam}.json`)).default as OrganizadorT

    return (
        <Stack gap={1}>
            <Image src='/hero.jpg' alt='hero' layout='responsive' width={600} height={123} />
            <Container maxWidth='sm'>
                <Stack gap={2}>
                    <Typography
                        sx={{ fontWeight: 600, letterSpacing: '-0.02em', textAlign: 'left', fontSize: '28.8px' }}
                        variant='h6'
                        component='h1'
                    >
                        {organizador.name}
                    </Typography>
                    <Typography>{organizador.telefono}</Typography>
                    <Typography>{organizador.instagram}</Typography>
                    <Typography variant='h6' component='h2'>
                        Torneos más recientes
                    </Typography>
                    <Stack gap={1}>
                        <Torneos torneos={organizador.torneos} />
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}
