const useCalEventType = (event: any) => {
  let ret = ""

  if (event.fields.tagList.includes("Public Talk")) {
    ret = "Public Talk"
  } else if (event.fields.tagList.includes("Guest Speaker")) {
    ret = "Guest Speaker"
  } else {
    ret = "Seminar"
  }

  return ret
}

export default useCalEventType
