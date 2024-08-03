import { Paper } from '@mui/material'
import { RtEvent } from '../../types'
import { RtCard } from '../RtCard'
import { RtNavigation } from '../RtNavigation'

export interface Props {
  timeline: RtEvent[]
  activeEvent: RtEvent
  nextEvent: RtEvent
  previousEvent: RtEvent
  setActiveEvent: (rtEvent: RtEvent) => void
  handlePreviousClick: (e: React.MouseEvent) => void
  handleNextClick: (e: React.MouseEvent) => void
}

export function RtTimeline({
  timeline,
  activeEvent,
  nextEvent,
  previousEvent,
  setActiveEvent,
  handlePreviousClick,
  handleNextClick,
}: Props) {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <RtCard rtEvent={activeEvent} />
      <RtNavigation
        timeline={timeline}
        activeEvent={activeEvent}
        nextEvent={nextEvent}
        previousEvent={previousEvent}
        onRowClick={setActiveEvent}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </Paper>
  )
}
