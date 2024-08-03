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

export function RtNavigationButton({
  direction,
  ariaLabel,
  // nextEvent,
  // previousEvent,
  onClick,
}: Props) {
  return (
    <IconButton aria-label={ariaLabel} onClick={onClick}>
      {direction === 'next' ? <ArrowForward /> : <ArrowBack />}
    </IconButton>
  )
}
