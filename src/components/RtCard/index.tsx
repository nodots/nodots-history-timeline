import { Card, CardContent, CardHeader, Link, Typography } from '@mui/material'
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
        <Link
          href="https://www.google.com/maps/place/Curia+di+Pompeo/@41.8953024,12.4739933,16.92z/data=!4m6!3m5!1s0x132f61879475f52d:0x6f50e8e3d8d4e9e1!8m2!3d41.895465!4d12.4765811!16s%2Fm%2F0n_gxtb?entry=ttu"
          sx={{
            color: '#bbb',
            fontFamily: 'sans-serif',
            fontSize: '0.8rem',
            fontVariant: 'small-caps',
          }}
        >
          map
        </Link>
      </CardContent>
    </Card>
  )
}
