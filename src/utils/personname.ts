export const personName = (person: any): string => {
  return `${person.frontmatter.firstName} ${person.frontmatter.lastName}`
}
