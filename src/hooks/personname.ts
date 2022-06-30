const usePersonName = (person: any) => {
  return `${person.frontmatter.name}${
    person.frontmatter.postNominalLetters !== ""
      ? `, ${person.frontmatter.postNominalLetters}`
      : ""
  }`
}

export default usePersonName
