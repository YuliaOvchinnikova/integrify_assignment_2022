import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/Api';

function Brewery() {
  const [brewery, setBrewery] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getBreweryById(params.id)
      .then((brewery) => {
        setBrewery(brewery);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onBackButtonClick() {
    navigate(`/`);
  }

  return (
    <div className="extended-card">
      <h1 className="extended-card__title">
        More information about {brewery.name}
      </h1>
      <p className="extended-card__paragraph">name: {brewery.name}</p>
      <p className="extended-card__paragraph">
        brewery type: {brewery.brewery_type}
      </p>
      <p className="extended-card__paragraph">street: {brewery.street}</p>
      <p className="extended-card__paragraph">address: {brewery.address_2}</p>
      <p className="extended-card__paragraph">address:{brewery.address_3}</p>
      <p className="extended-card__paragraph">city: {brewery.city}</p>
      <p className="extended-card__paragraph">state: {brewery.state}</p>
      <p className="extended-card__paragraph">
        county province: {brewery.county_province}
      </p>
      <p className="extended-card__paragraph">
        postal code: {brewery.postal_code}
      </p>

      <button
        type="button"
        aria-label="Go back to main page"
        className="interactive-button button extended-card__button"
        onClick={onBackButtonClick}
      >
        Go Back
      </button>
    </div>
  );
}

export default Brewery;
