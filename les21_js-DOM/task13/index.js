function getSection(num) {
  const spanElement = document.querySelector(`span[data-number="${num}"]`);
  if (spanElement) {
    const parent = spanElement.closest(".box");
    if (parent) {
      return parent.dataset.section;
    }
  }
  return null;
}