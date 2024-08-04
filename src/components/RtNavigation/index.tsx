import { RtEvent } from '../../types'
import { RtNavigationButton } from './RtNavigationButton'
import { BottomNavigation } from '@mui/material'
interface Props {
  timeline: RtEvent[]
  activeEvent: RtEvent
  onRowClick: (rtEvent: RtEvent) => void
  onPreviousClick: (e: React.MouseEvent) => void
  onNextClick: (e: React.MouseEvent) => void
}

export const RtNavigation = ({
  activeEvent,
  onPreviousClick,
  onNextClick,
}: Props) => {
  return (
    <BottomNavigation id="RtBottomNavigation">
      <RtNavigationButton
        direction="previous"
        onClick={onPreviousClick}
        ariaLabel="Go Back"
      />
      <div className="rt-bottom-navigation-text">{activeEvent.event}</div>
      <RtNavigationButton
        direction="next"
        onClick={onNextClick}
        ariaLabel="Go Forward"
      />
    </BottomNavigation>
  )
}
