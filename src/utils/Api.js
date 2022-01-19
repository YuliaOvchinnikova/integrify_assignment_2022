class Api {
  constructor({ address }) {
    this._address = address;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getBreweriesList(page) {
    return fetch(`${this._address}?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  getBreweryById(id) {
    return fetch(`${this._address}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }

  getBreweriesListByQuery(text) {
    text = text.split(' ').join('_');
    return fetch(`${this._address}/search?query=${text}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse);
  }
}

const api = new Api({ address: 'https://api.openbrewerydb.org/breweries' });

export default api;
