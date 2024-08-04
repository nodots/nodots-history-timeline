import { Paper } from '@mui/material'
import { formatYear, RtEvent } from '../../types'

interface Props {
  rtEvent: RtEvent
}

export function RtBody({ rtEvent }: Props) {
  return (
    <Paper id="RtBody">
      <div id="RtEntrySidebar">
        <h1>{formatYear(rtEvent.year)}</h1>
      </div>
      <div id="RtEntryContent">
        <h2>{rtEvent.event}</h2>
      </div>
    </Paper>
  )
}
