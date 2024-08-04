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
        <div className="rt-entry-sidebar-references">
          <h3>Sources</h3>
          <a href="https://www.livius.org/sources/content/appian/appian-caesars-funeral/">
            Apian on Caesar's Funeral
          </a>
        </div>
      </div>
      <div id="RtEntryContent">
        <h2>{rtEvent.event}</h2>
      </div>
    </Paper>
  )
}
