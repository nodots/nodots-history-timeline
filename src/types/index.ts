export type RtEvent = {
  guid: string
  year: number
  event: string
  detail?: string
}

export type RtTimeline = RtEvent[]

export const formatYear = (year: number): string =>
  year < 0 ? `${year * -1} BCE` : `${year}`
