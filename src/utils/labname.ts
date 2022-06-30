import { personName } from "./personname"

export const labName = (faculty: any): string => {
  return `The ${personName(faculty)} Lab`
}
