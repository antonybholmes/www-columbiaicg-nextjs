const useTwoDigitFormat = (v: number) => {
  return v > 9 ? `${v}` : `0${v}`
}

export default useTwoDigitFormat
