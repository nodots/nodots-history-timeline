import { Table, TableBody, TableRow, TableCell } from '@mui/material'
import { useState } from 'react'
import { formatYear, RtEvent } from '../../types'
import { RtNavigationButton } from './RtNavigationButton'
interface Props {
  timeline: RtEvent[]
  activeEvent: RtEvent
  previousEvent?: RtEvent
  nextEvent?: RtEvent
  onRowClick: (rtEvent: RtEvent) => void
  onPreviousClick: (e: React.MouseEvent) => void
  onNextClick: (e: React.MouseEvent) => void
}

export const RtNavigation = ({
  timeline,
  activeEvent,
  previousEvent,
  nextEvent,
  onPreviousClick,
  onNextClick,
}: Props) => {
  const [page] = useState(1)

  const rowsPerPage = 1

  const slicedTimeline = timeline.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  )

  return (
    <Table sx={{ width: '100%' }}>
      <TableBody sx={{ width: '100%' }}>
        {slicedTimeline.map((e: RtEvent) => (
          <TableRow
            key={e.guid}
            sx={{
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <TableCell sx={{ border: 'none', textAlign: 'left' }}>
              <RtNavigationButton
                direction="previous"
                onClick={onPreviousClick}
                previousEvent={previousEvent}
                ariaLabel="previous event"
              />
            </TableCell>
            <TableCell
              sx={{ textAlign: 'center', border: 'none', color: '#ccc' }}
            >
              {formatYear(activeEvent.year)}
            </TableCell>
            <TableCell sx={{ border: 'none', textAlign: 'right' }}>
              <RtNavigationButton
                direction="next"
                onClick={onNextClick}
                nextEvent={nextEvent}
                ariaLabel="next event"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
