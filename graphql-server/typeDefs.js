// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.0
export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Continent {
    code: ID!
    name: String!
  }
  type Language {
    name: String!
  }
  type Country {
    code: ID!
    name: String!
    continent: Continent
    language: [Language]
  }

  type Query {
    continents: [Continent]
    continents_by_pk(continentCode: ID): Continent
    languages: [Language]
    languages_by_pk(languageCode: ID): Language
    countries: [Country]
    countries_by_pk(countryCode: ID): Country
  }
`;
