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
    <section className="paginator">
      <button
        type="button"
        aria-label="Previous page"
        className={`button button_paginator ${
          currentPage === 1 && 'button_inactive'
        }`}
        onClick={onPreviousButtonClick}
      >
        Previous
      </button>
      <p className="paginator__number">{currentPage}</p>
      <button
        type="button"
        aria-label="Next page"
        className="button button_paginator"
        onClick={onNextButtonClick}
      >
        Next
      </button>
    </section>
  );
}
export default Paginator;
