const useFormatStartTime = (d: Date) => {
  return d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
}

export default useFormatStartTime
