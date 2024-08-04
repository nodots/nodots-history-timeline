import { Paper } from '@mui/material'
import { RtEvent } from '../../types'
import { RtNavigation } from '../RtNavigation'
import { RtBody } from '../RtBody'

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
  setActiveEvent,
  handlePreviousClick,
  handleNextClick,
}: Props) {
  return (
    <Paper id="RtTimeline">
      <RtBody rtEvent={activeEvent} />
      <RtNavigation
        timeline={timeline}
        activeEvent={activeEvent}
        onRowClick={setActiveEvent}
        onPreviousClick={handlePreviousClick}
        onNextClick={handleNextClick}
      />
    </Paper>
  )
}
