import React, { useState, useEffect } from 'react';

const CountryData = () => {
  const [hasError, setErrors] = useState(false);
  const [countryData, setCountryData] = useState({});

  async function fetchData(){
    const response = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		    "x-rapidapi-key": "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef"
      }
    });

    response
      .json()
      .then(response => setCountryData(response))
      .catch((err) => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  })
  return (
    <div>
      <span>{JSON.stringify(countryData)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default CountryData;
