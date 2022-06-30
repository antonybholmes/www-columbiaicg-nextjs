const useTopPubs = (publications: Array<any>, top: number) => {
  const countMap = new Map<string, number>()

  for (let pub of publications) {
    if (!countMap.has(pub.journal)) {
      countMap.set(pub.journal, 0)
    }

    countMap.set(pub.journal, countMap.get(pub.journal) + 1)
  }

  const pubMap = new Map<number, Array<string>>()

  for (let e of Array.from(countMap.entries())) {
    if (!pubMap.has(e[1])) {
      pubMap.set(e[1], [])
    }

    pubMap.get(e[1]).push(e[0])
  }

  const ret: Array<any> = []

  for (let c of Array.from(pubMap.keys())
    .sort((a, b) => a - b)
    .reverse()) {
    for (let j of pubMap.get(c).sort()) {
      ret.push([j, c])

      if (ret.length == top) {
        break
      }
    }

    if (ret.length == top) {
      break
    }
  }

  return ret
}

export default useTopPubs
