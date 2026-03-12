import type { Event } from '@/data/events';

/**
 * Group an array of events by year into a Record keyed by year number.
 * Preserves the original order of events within each year.
 */
export function groupEventsByYear(events: Event[]): Record<number, Event[]> {
  return events.reduce<Record<number, Event[]>>((acc, event) => {
    const bucket = acc[event.year];
    if (bucket === undefined) {
      acc[event.year] = [event];
    } else {
      bucket.push(event);
    }
    return acc;
  }, {});
}

/**
 * Return the unique years present in a grouped events record,
 * sorted in descending order (most recent first).
 */
export function getSortedYears(
  eventsByYear: Record<number, Event[]>
): number[] {
  return Object.keys(eventsByYear)
    .map(Number)
    .sort((a, b) => b - a);
}
