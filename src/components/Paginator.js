function Paginator({ currentPage, onPageChange }) {
  function onPreviousButtonClick() {
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  }

  function onNextButtonClick() {
    onPageChange(currentPage + 1);
  }

  return (
    <>
      <button
        type="button"
        aria-label="Previous page"
        className="interactive-button button card__button"
        onClick={onPreviousButtonClick}
      >
        Previous
      </button>
      <p>{currentPage}</p>
      <button
        type="button"
        aria-label="Next page"
        className="interactive-button button card__button"
        onClick={onNextButtonClick}
      >
        Next
      </button>
    </>
  );
}
export default Paginator;
