import './App.scss'
import timeline from '../data/timeline.json'
import { useState } from 'react'
import { RtTimeline } from './components/RtTimeline'
import { RtEvent } from './types'

function App() {
  const [activeEvent, setActiveEvent] = useState(timeline[54])

  const eventIndex = (activeEvent: RtEvent) =>
    timeline.findIndex((e) => e.guid === activeEvent.guid)

  const nextEvent = (activeEvent: RtEvent) =>
    eventIndex(activeEvent) < timeline.length
      ? timeline[eventIndex(activeEvent) + 1]
      : activeEvent

  const previousEvent = (activeEvent: RtEvent) =>
    eventIndex(activeEvent) > 0
      ? timeline[eventIndex(activeEvent) - 1]
      : activeEvent

  function setPreviousEvent(e: React.MouseEvent): void {
    e.stopPropagation()
    const eventIndex = timeline.findIndex((e) => e.guid === activeEvent.guid)
    eventIndex > 0 && setActiveEvent(timeline[eventIndex - 1])
  }

  function setNextEvent(e: React.MouseEvent): void {
    e.stopPropagation
    const eventIndex = timeline.findIndex((e) => e.guid === activeEvent.guid)
    eventIndex < timeline.length && setActiveEvent(timeline[eventIndex + 1])
  }

  return (
    <RtTimeline
      timeline={timeline}
      activeEvent={activeEvent}
      nextEvent={nextEvent(activeEvent)}
      previousEvent={previousEvent(activeEvent)}
      setActiveEvent={setActiveEvent}
      handleNextClick={setNextEvent}
      handlePreviousClick={setPreviousEvent}
    />
  )
}

export default App
