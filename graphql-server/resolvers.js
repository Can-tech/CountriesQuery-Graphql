import { continents, countries, languages } from "./data/index.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

export const resolvers = {
  Query: {
    continents: () => continents,
    continents_by_pk: (parent, args) =>
      continents.find((continent) => args.continentCode == continent.code),
    countries: () =>
      Object.entries(countries).map(([code, country]) => ({
        ...country,
        code,
      })),
    countries_by_pk: (_, args) => {
      const obj = Object.entries(countries).find(([code, country]) => {
        return args.countryCode == code;
      });
      const objFinal = { ...obj[1], code: obj[0] };
      console.log(objFinal);
      return objFinal;
    },
    languages: () =>
      Object.entries(languages).map(([code, language]) => ({
        ...language,
      })),
    languages_by_pk: (_, args) => languages[args.languageCode],
  },
  Country: {
    continent: (parent) => {
      const continentLast = continents.filter(
        (continent) => continent.code == parent.continent
      );
      return continentLast[0];
    },
    language: (parent) => {
      const allLanguages = [];
      parent.languages.map((languageCode) => {
        const language = languages[languageCode];
        allLanguages.push(language);
      });
      console.log(allLanguages);
      return allLanguages;
    },
  },
};
