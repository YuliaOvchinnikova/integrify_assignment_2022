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
    <div className="search">
      <form
        className="search__form"
        onSubmit={handleSubmit(onSearchButtonClick)}
      >
        <input
          className="search__input"
          placeholder="Enter your search query"
          {...register('query', {
            onChange: (e) => {
              onSearchSubmit(e.target.value);
            },
          })}
        />
        <button
          type="submit"
          aria-label="sent request for search"
          className="button button_search"
        >
          Search Brewery
        </button>
      </form>
    </div>
  );
}

export default Search;
