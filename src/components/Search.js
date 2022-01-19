import api from '../utils/Api';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Search({ onSearchSubmit }) {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  function onSearchButtonClick(e) {
    onSearchSubmit(e.query);
  }

  return (
    <div className="filter">
      <form
        className="filter__form"
        onSubmit={handleSubmit(onSearchButtonClick)}
      >
        <input
          className="filter__input"
          {...register('query', {
            required: 'Please enter your search query',
          })}
        />
        <button
          type="submit"
          aria-label="sent request for filter"
          className="interactive-button button filter__button"
        >
          Search Brewery
        </button>
      </form>
    </div>
  );
}

export default Search;
