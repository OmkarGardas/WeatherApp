import React, { useEffect, useState } from "react";
import "./css/style.css";

function Tempapp() {
  const [city, setCity] = useState(null);
  const [search, setsearch] = useState("Hyderabad");
  const [country, setcountry] = useState("IN");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a65838f25b097dadb4c3589766caee6d`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson)
      setCity(resJson.main);
      setcountry(resJson.sys);
    };

    fetchApi();
  }, [search]);

  return (
    <>
    <h1 className="heading">Dynamic weather search</h1>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setsearch(event.target.value);
            }}
            placeholder="search"
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view icon"></i>
                {search},{country.country}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="temp_min_max">
                min:{city.temp_min}°C | max:{city.temp_max}°C
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tempapp;
