export const ratingsFormat = (rating: number) => {
  if (rating.toString().length == 1) {
    return `${rating}.0`
  }
  return rating
}