export function goToNext(index, setIndex, carousel) {
  index >= carousel ? setIndex(0) : setIndex(index + 1);
}

export function goToPrev(index, setIndex, carousel) {
  index === 0 ? setIndex(carousel) : setIndex(index - 1);
}

export function findCard(e, setIndex) {
  setIndex(Number(e.target.id) - 1);
}
