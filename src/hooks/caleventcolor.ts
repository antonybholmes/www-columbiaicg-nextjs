const useCalEventColor = (event: any) => {
  let ret = ""

  if (event.fields.tags.includes("Public Talk")) {
    ret = "Public Talk"
  } else {
    ret = "Seminar"
  }

  return ret
}

export default useCalEventColor
