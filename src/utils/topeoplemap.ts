const toPeopleMap = (peopleList: Array<any>) => {
  let ret: any = {}

  people.forEach(person => {
    ret[person.fields.personId] = person
  })

  return ret
}

export default toPeopleMap
