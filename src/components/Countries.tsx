import { useEffect, useState } from 'react';
import Card from './Card';
import { ICountry } from "../model/country"

const Countries = () => {
    const [data, setData] = useState<ICountry[]>([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    //Quand le composant est monté
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const jsonData = await response.json();
            setData(jsonData)
        };

        fetchData();
    }, []);

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => {
                    setRangeValue(parseInt(e.target.value))
                }} />
                {radios.map((continent, index) => (
                    <li key={index}>
                        <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e) => {
                            setSelectedRadio((e.target.id))
                        }} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}

            </ul>
            {selectedRadio !== "" && (<button onClick={() => { setSelectedRadio("") }}>Annuler la recherche</button>)}

            <ul>
                {data
                    .filter((country) => {
                        return country.continents[0].includes(selectedRadio) || selectedRadio.length === 0
                    })
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue)
                    .map((country, index) => (
                        /*<li key={index}>{country.translations.fra.common}</li>*/
                        <Card key={index} country={country}></Card>
                    ))}
            </ul>
        </div>
    );
};

export default Countries;