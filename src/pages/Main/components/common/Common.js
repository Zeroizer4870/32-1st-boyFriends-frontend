export function goToNext(index, setIndex, carousel) {
  index >= carousel ? setIndex(0) : setIndex(index + 1);
}

export function goToPrev(index, setIndex, carousel) {
  index === 0 ? setIndex(carousel) : setIndex(index - 1);
}

export function findImage(e, setIndex) {
  setIndex(e.target.id);
}
