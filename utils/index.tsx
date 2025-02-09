export interface CountryData {
  id: number;
  name: string;
  capital: string;
  interestingFact: string;
  population: number;
}

export interface HeaderInterface {
  id: number;
  name: string;
  url: string;
}

export interface FooterApi {
  id: number;
  title: string;
  details: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface countryInterface {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export interface soloCountryInterface {
  name: {
    nativeName: {
      [key: string]: {
        official?: string;
        common?: string;
      };
    };
    official: string;
    common?:string
  };
  region: string;
  population: number;
  subregion: string;
  capital: string;
  tld: string;
  currencies: {
    SHP: {
      name: string;
    };
  };
  languages: string[];
  flags: {
    svg: string;
    alt: string;
  };
}
