const useCalEventType = (event: any) => {
  let ret = ""

  if (event.frontmatter.tagList.includes("Public Talk")) {
    ret = "Public Talk"
  } else if (event.frontmatter.tagList.includes("Guest Speaker")) {
    ret = "Guest Speaker"
  } else {
    ret = "Seminar"
  }

  return ret
}

export default useCalEventType
