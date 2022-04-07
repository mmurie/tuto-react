export interface ICountry {
    flags: { svg: string };
    translations: {
        fra: {
            common: string
        }
    };
    capital: string;
    population: number;
    continents: Array<string>;

}