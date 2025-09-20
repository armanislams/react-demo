import React, { use, useState } from 'react';
import Country from './Country/country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([])
const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
}
    const handleVisitedFlag =(flag)=>{
        const newVisitedFlags = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlags)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li> )
                }
            </ol>
            <h3>flags total: {visitedFlag.length}</h3>
            <div className='flag-container'>
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}/>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country => <Country
                    key={country.cca3.cca3} country={country}
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}/>)
            }
            </div>
        </div>
    );
};

export default Countries;