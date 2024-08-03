import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { formatYear, RtEvent } from '../../types'

interface Props {
  rtEvent: RtEvent
}

export function RtCard({ rtEvent }: Props) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '90vw',
        height: '40vh',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <CardHeader
        title={formatYear(rtEvent.year)}
        sx={{
          width: '20vw',
          alignSelf: 'flex-start',
          border: 'none',
          boxShadow: 'none',
        }}
      ></CardHeader>
      <CardContent
        sx={{
          width: '80vw',
          textAlign: 'left',
          fontFamily: 'serif',
          color: '#ccc',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop: 0,
            paddingTop: 0,
            fontSize: '1.2rem',
            color: '#ccc',
          }}
        >
          {rtEvent.event}
        </Typography>
      </CardContent>
    </Card>
  )
}
