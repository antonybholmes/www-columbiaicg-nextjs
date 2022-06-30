const toPeopleMap = (peopleList: Array<any>) => {
  let ret: any = {}

  people.forEach(person => {
    ret[person.frontmatter.personId] = person
  })

  return ret
}

export default toPeopleMap
