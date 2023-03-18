﻿## Countries-Query-Graphql
 
 Graphql-API backend project. We can query single and all countries, languages, continents.

SOME OF THE WORKING QUERIES

```
query getASingleCountry($countryCode: ID) {
  countries_by_pk(countryCode: $countryCode) {
    code
    continent {
      code
      name
    }
    language {
      name
    }
    name
  }
}

query AllCountries {
  countries {
    name
    continent {
      name
    }
    language {
      name
    }
  }
}
```
