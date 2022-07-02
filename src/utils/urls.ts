export const personUrl = (person: any): string => {
  return `/people/${person.frontmatter.personId}`
}

export const labUrl = (group: any): string => {
  return `/research-areas/labs/${group.frontmatter.id}`
}

export const labMembersUrl = (group: any): string => {
  return `/research-areas/labs/${group.frontmatter.id}/members`
}

export const eventUrl = (event: any): string => {
  return `${paths.eventsPath}/${
    event.frontmatter.start.split("T")[0]
  }-${event.frontmatter.title.toLowerCase().replace(/ /g, "-")}`
}

export const useJobUrl = (job: any): string => {
  return `${paths.jobsPath}/${
    job.frontmatter.start.split("T")[0]
  }-${job.frontmatter.title.toLowerCase().replace(/ /g, "-")}`
}
