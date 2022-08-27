const getCalEventTypeUrl = (root: string, eventType: string) => {
  return `${root}/topics/${eventType.replace(/ /g, "-").toLowerCase()}`
}

export default getCalEventTypeUrl
