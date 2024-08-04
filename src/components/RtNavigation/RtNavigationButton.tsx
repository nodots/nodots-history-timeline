import React from 'react'
import { IconButton } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { RtEvent } from '../../types'

interface Props {
  direction: 'previous' | 'next'
  ariaLabel: string
  nextEvent?: RtEvent
  previousEvent?: RtEvent
  onClick: (e: React.MouseEvent) => void
}

export function RtNavigationButton({ direction, ariaLabel, onClick }: Props) {
  return (
    <IconButton
      aria-label={ariaLabel}
      onClick={onClick}
      className="rt-navigation-button"
    >
      {direction === 'next' ? <ArrowForward /> : <ArrowBack />}
    </IconButton>
  )
}
