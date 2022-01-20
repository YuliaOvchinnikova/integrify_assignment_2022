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
    <div className="brewery">
      <h1 className="brewery__title">More information about {brewery.name}</h1>
      <p className="brewery__paragraph">name: {brewery.name}</p>
      <p className="brewery__paragraph">brewery type: {brewery.brewery_type}</p>
      <p className="brewery__paragraph">street: {brewery.street}</p>
      <p className="brewery__paragraph">address: {brewery.address_2}</p>
      <p className="brewery__paragraph">address:{brewery.address_3}</p>
      <p className="brewery__paragraph">city: {brewery.city}</p>
      <p className="brewery__paragraph">state: {brewery.state}</p>
      <p className="brewery__paragraph">
        county province: {brewery.county_province}
      </p>
      <p className="brewery__paragraph">postal code: {brewery.postal_code}</p>

      <button
        type="button"
        aria-label="Go back to main page"
        className="button button_brewery"
        onClick={onBackButtonClick}
      >
        Go Back
      </button>
    </div>
  );
}

export default Brewery;
