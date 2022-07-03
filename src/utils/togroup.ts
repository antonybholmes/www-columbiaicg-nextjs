const toGroup = (group: any, peopleMap: any) => {
  const ret: any = {}
  ret.id = group.fields.id
  ret.name = group.fields.name
  ret.faculty = peopleMap.get(group.faculty)

  return ret
}

export default toGroup
