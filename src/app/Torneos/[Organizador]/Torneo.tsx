import Card from '@mui/material/Card'
// import Avatar from '@mui/material/Avatar'
// import IconButton from '@mui/material/IconButton'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CardActionArea, CardContent, Typography } from '@mui/material'
import { TorneoT } from './types'

export default function Torneo({ torneo }: { torneo: TorneoT }) {
    return (
        <Card variant='outlined'>
            <CardActionArea>
                <CardContent>
                    <Typography>{torneo.categoria + ' ' + torneo.fecha + ' - ' + torneo.lugar}</Typography>
                    <Typography>El salon padel {torneo.cancha}</Typography>
                    <Typography>{torneo.cupo === torneo.anotados ? 'Cupos llenos' : 'Quedán cupos disponibles'}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
