import React from 'react';
import { ICountry } from "../model/country"

export interface ICountryLi {
    key: number;
    country: ICountry;
}


const Card = (countryLi: ICountryLi) => {
    return (
        <li className='card'>
            <img src={countryLi.country.flags.svg} alt={"drapeau " + countryLi.country.translations.fra.common} />
            <div className='infos'>
                <h2>{countryLi.country.translations.fra.common}</h2>
                <h4>{countryLi.country.capital}</h4>
                <p>Pop. {countryLi.country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;