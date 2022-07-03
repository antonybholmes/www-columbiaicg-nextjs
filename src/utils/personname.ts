export const personName = (person: any): string => {
  return `${person.fields.firstName} ${person.fields.lastName}`
}
