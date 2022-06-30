const toGroup = (group: any, peopleMap: any) => {
  const ret: any = {}
  ret.id = group.frontmatter.id
  ret.name = group.frontmatter.name
  ret.faculty = peopleMap.get(group.faculty)

  return ret
}

export default toGroup
