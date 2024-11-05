'use client'

import { Box, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import Torneo from './Torneo'
import { TorneoT } from './types'

export default function Torneos({ torneos }: { torneos: TorneoT[] }) {
    const [torneosState /* setTorneosState */] = useState(torneos)

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const genero = searchParams.get('genero') ?? ''
    const categoria = searchParams.get('categoria') ?? ''

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div>
            <Stack direction='row' gap={2}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Genero</InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={genero}
                            label='Age'
                            onChange={e => {
                                const generoQuery = createQueryString('genero', e.target.value ? e.target.value : '')
                                let categoriaQuery
                                if (categoriaQuery) {
                                    categoriaQuery = createQueryString('categoria', categoria)
                                }

                                router.push(pathname + '?' + categoriaQuery + (generoQuery ? '&' + generoQuery : ''))
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Categoria</InputLabel>
                        <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={categoria}
                            label='Age'
                            onChange={e => {
                                const categoriaQuery = createQueryString('genero', e.target.value ? e.target.value : '')
                                let generoQuery
                                if (genero) {
                                    generoQuery = createQueryString('genero', genero)
                                }

                                router.push(pathname + '?' + categoriaQuery + (generoQuery ? '&' + generoQuery : ''))
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Stack>
            {torneosState.map(torneo => (
                <Torneo key={torneo.id} torneo={torneo} />
            ))}
        </div>
    )
}
