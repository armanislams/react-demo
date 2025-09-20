import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries)
    const handleVisited = () => {
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'visited'}` }>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 30000 ? "big country" : "small country"}</p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Countries Flag</button>
        </div>
    );
};

export default Country;