# Brewery Project

This is a website that shows breweries from the [Open Brewery DB](https://www.openbrewerydb.org/)

You can browse breweries by selecting page number or you can also use a search field to find breweries by name.

In this project I used the following react features:

- `useState` to keep various data like list of breweries, current page and search query
- `useEffect` to request data from the web server
- `useForm` to get search query from the search form
- `Routes` and `Route` to have basic routing on my website
- `useNavigate` to have history navigation from the list of breweries to the particular brewery

For styles I use vanilla CSS and BEM ([Block, Element, Modifier](https://en.bem.info/methodology/)) methodology of organizing CSS stylesheets.

Ideally I would also love to add unit tests using [Jest framework](https://jestjs.io/), but I had a very limited time resources, so this is something for the follow-up work.

This website is available on Netlify as well: [link](https://breweries-integrify-2022.netlify.app)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
