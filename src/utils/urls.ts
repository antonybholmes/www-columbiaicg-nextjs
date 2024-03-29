import { EVENTS_PATH, JOBS_PATH } from "../constants"

export const personUrl = (person: any): string => {
  return `/people/${person.fields.personId}`
}

export const labUrl = (group: any): string => {
  return `/research-areas/labs/${group.fields.id}`
}

export const labMembersUrl = (group: any): string => {
  return `/research-areas/labs/${group.fields.id}/members`
}

export const eventUrl = (event: any): string => {
  return `${EVENTS_PATH}/${
    event.fields.start.split("T")[0]
  }-${event.fields.title.toLowerCase().replace(/ /g, "-")}`
}

export const useJobUrl = (job: any): string => {
  return `${JOBS_PATH}/${job.fields.start.split("T")[0]}-${job.fields.title
    .toLowerCase()
    .replace(/ /g, "-")}`
}
