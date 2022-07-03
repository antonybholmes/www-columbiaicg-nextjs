import IFieldMap from "../types/field-map"

export const getPersonName = (person: any): string => {
  return `${person.fields.firstName} ${person.fields.lastName}`
}

export const toLabPeopleMap = (lab: any, peopleMap: IFieldMap) => {
  const ret: IFieldMap = {}

  for (let group of lab.groups) {
    for (let pid of group.peopleList) {
      const person = peopleMap[pid]

      for (let g of person.fields.groups) {
        if (!(g in ret)) {
          ret[g] = []
        }

        ret[g].push(person)
      }
    }
  }

  return ret
}
