const useJournalPublications = (
  publications: Array<any>,
  journals: Set<string>
) => {
  return publications.filter((pub: any) => {
    return journals.has(pub.journal)
  })
}

export default useJournalPublications
