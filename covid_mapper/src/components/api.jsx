import React, { useState, useEffect } from "react";

const CountryData = () => {
  const [hasError, setErrors] = useState(false);
  const [countryData, setCountryData] = useState({});

  async function fetchData() {
    const response = await fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Iceland",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef"
        }
      }
    );

    response
      .json()
      .then(response => setCountryData(response))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();

    console.log(JSON.stringify(countryData.data));
    // console.log(countryData.data.covid19Stats);
  });

  return <div>{JSON.stringify(countryData.data)}</div>;
};

export default CountryData;

// request.onload = function(){
//   var data = JSON.parse(this.response).response.results
//   console.log(data)
//   if(request.status === 200){ for(var i = 0; i < data.length; i++ ){
//     storyList.addStory(data[i].webTitle, data[i].webPublicationDate, data[i].webUrl, image = data[i].fields.main)}

//   var controller = new StoryController(storyList)
//   controller.insertHeadlineHTML()}
//   else{ console.log("API Error")}
// }
