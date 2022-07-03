const toPeopleGroupMap = people => {
  const ret = {}

  for (let person of people) {
    const g = person.fields.group

    if (!(g in ret)) {
      ret[g] = []
    }

    ret[g].push(person)
  }

  return ret
}

export default toPeopleGroupMap
