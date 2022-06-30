const useContextName = (
  context: string = "",
  contextMap: any,
  strictMode: boolean = false
): string => {
  let ret

  if (context in contextMap) {
    ret = contextMap[context]
  } else if ("default" in contextMap && !strictMode) {
    ret = contextMap["default"]
  } else {
    ret = ""
  }

  return ret
}

export default useContextName
