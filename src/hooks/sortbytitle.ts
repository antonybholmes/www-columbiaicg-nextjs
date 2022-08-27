import getContextName from "./contextname"

export const useSortByTitle = (
  people: any[],
  context: string = "",
  reverse: boolean = false
): any[] => {
  let ret: any[] = []

  const titleMap: any = {}

  for (let person of people) {
    const title = getContextName(context, person.titleMap)

    if (!(title in titleMap)) {
      titleMap[title] = []
    }

    titleMap[title].push(person)
  }

  if (reverse) {
    for (let title of Object.keys(titleMap).sort().reverse()) {
      ret = ret.concat(titleMap[title])
    }
  } else {
    for (let title of Object.keys(titleMap).sort()) {
      ret = ret.concat(titleMap[title])
    }
  }

  return ret
}

export default useSortByTitle
