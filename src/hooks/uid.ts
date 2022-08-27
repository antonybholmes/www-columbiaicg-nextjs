const useUid = () => {
  // const uid = (
  //   "000000000000000" + useCurrentBuild().valueOf().toString(16)
  // ).substr(-16)

  // return (
  //   uid.substr(0, 4) +
  //   ":" +
  //   uid.substr(4, 4) +
  //   ":" +
  //   uid.substr(8, 4) +
  //   ":" +
  //   uid.substr(12, 4)
  // )

  return "f1da8c7f-9763-4b0f-af68-ee484144cbca" //getUuid(useCurrentBuild().toString()) //"ef3c0576-5011-480f-9e43-179068810eaf"
}

export default useUid
