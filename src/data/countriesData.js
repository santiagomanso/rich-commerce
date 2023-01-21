//Source for monetary income
//Average networth per capita https://en.wikipedia.org/wiki/List_of_countries_by_financial_assets_per_capita#List_of_countries_by_mean_net_financial_assets_per_capita_by_Allianz_A.G._(2022)

//gdp https://www.worldometers.info/gdp/gdp-by-country/

//annual income https://data.worldbank.org/indicator/NY.ADJ.NNTY.PC.CD

export const countryList = [
  {
    id: 1,
    name: { en: 'Germany', es: 'Alemania', de: 'Deutschland' },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png',
    annualIncome: 38426,
    gdp: 3693204332230,
    averageNetworthPerCapita: 69290,
    language: 'de',
  },
  {
    id: 2,
    name: { en: 'United States', es: 'Estados Unidos', de: 'USA' },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png',
    annualIncome: 53329,
    gdp: 19485394000000,
    averageNetworthPerCapita: 259780,
    language: 'en',
  },
  {
    id: 3,
    name: { en: 'Argentina', es: 'Argentina', de: 'Argentinien' },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-argentina2x.png',
    annualIncome: 7212,
    gdp: 637430331479,
    averageNetworthPerCapita: 1270,
    language: 'es',
  },
  {
    id: 4,
    name: { en: 'Spain', es: 'España', de: 'Spanien' },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png',
    annualIncome: 22545,
    gdp: 1314314164402,
    averageNetworthPerCapita: 40480,
    language: 'es',
  },
  {
    id: 5,
    name: { en: 'Venezuela', es: 'Venezuela', de: 'Venezuela' }, //source: https://www.statista.com/statistics/370937/gross-domestic-product-gdp-in-venezuela/
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-venezuela2x.png',
    annualIncome: 3380,
    gdp: 49520000000,
    averageNetworthPerCapita: 200,
  },
  {
    id: 6,
    name: { en: 'Switzerland', es: 'Suiza', de: 'Schweiz' },
    flag: 'https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-switzerland2x.png',
    annualIncome: 63782,
    gdp: 678965423322,
    averageNetworthPerCapita: 237110,
  },
]
