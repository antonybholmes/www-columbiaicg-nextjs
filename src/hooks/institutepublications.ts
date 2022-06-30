const useInstitutePublications = (publications: Array<any>) => {
  return publications.filter((pub: any) => {
    return (
      pub.tagList.includes("icg") ||
      pub.tagList.includes("selected") ||
      pub.tagList.includes("additional")
    )
  })
}

export default useInstitutePublications
