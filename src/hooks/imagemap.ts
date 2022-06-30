const useImageMap = (data: any) => {
  const imageMap: any = {}

  for (const { node } of data.images.edges) {
    const file = node

    if (file.ext === ".jpg" || file.ext === ".png") {
      imageMap[file.name] = file
    }
  }

  if (data.genericPersonImage !== undefined) {
    imageMap["generic"] = data.genericPersonImage
  }

  return imageMap
}

export default useImageMap
