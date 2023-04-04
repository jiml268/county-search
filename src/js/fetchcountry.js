export default function fetchCountries(typeContry) {
    const fetchURL = "https://restcountries.com/v3.1/name/"
    const returnFields = "?fields=name,capital,population,flags,languages,latlng,maps"
    console.log(fetchURL+typeContry+returnFields)
    return fetch(fetchURL+typeContry+returnFields)
  .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
    }

