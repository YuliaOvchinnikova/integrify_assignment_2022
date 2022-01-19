import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';
import Search from './Search';
import Paginator from './Paginator';

function HomePage() {
  const [breweries, setBreweries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      api
        .getBreweriesList(currentPage)
        .then((breweries) => {
          setBreweries(breweries);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .getBreweriesListByQuery(searchQuery)
        .then((filteredBreweries) => {
          setBreweries(filteredBreweries);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchQuery, currentPage]);

  return (
    <>
      <h1 className="title">Breweries</h1>
      <Search onSearchSubmit={setSearchQuery} />
      <section className="cards" aria-label="Breweries cards">
        {breweries &&
          breweries.map((brewery) => (
            <Card brewery={brewery} key={brewery.id} />
          ))}
      </section>
      {searchQuery === '' && (
        <Paginator currentPage={currentPage} onPageChange={setCurrentPage} />
      )}
    </>
  );
}

export default HomePage;
