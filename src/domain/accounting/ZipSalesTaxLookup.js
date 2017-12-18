
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ZipSalesTaxLookupType = new GraphQLObjectType({
  name: 'ZipSalesTaxLookupType',
  description: 'Type for ZipSalesTaxLookup in accounting',

  fields: () => ({
    zipCode: {type: GraphQLString},
    citySalesTax: {type: GraphQLFloat},
    comboSalesTax: {type: GraphQLFloat},
    city: {type: GraphQLString},
    stateSalesTax: {type: GraphQLFloat},
    county: {type: GraphQLString},
    geoCode: {type: GraphQLString},
    stateUseTax: {type: GraphQLFloat},
    cityUseTax: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    countyUseTax: {type: GraphQLFloat},
    comboUseTax: {type: GraphQLFloat},
    countySalesTax: {type: GraphQLFloat},
    generalDefault: {type: GraphQLBoolean},
    countyLocalSalesTax: {type: GraphQLFloat},
    countyDefault: {type: GraphQLBoolean},
    countyLocalUseTax: {type: GraphQLFloat},
    countyFips: {type: GraphQLString},
    insideCity: {type: GraphQLBoolean},
    stateCode: {type: GraphQLString},
    cityLocalUseTax: {type: GraphQLFloat},
    cityLocalSalesTax: {type: GraphQLFloat}
  })
});

export {ZipSalesTaxLookupType};
    




const ZipSalesTaxLookupInputType = new GraphQLInputObjectType({
  name: 'ZipSalesTaxLookupInputType',
  description: 'input type for ZipSalesTaxLookup',

  fields: () => ({
    city: {type: GraphQLString},
    cityLocalSalesTax: {type: GraphQLFloat},
    cityLocalUseTax: {type: GraphQLFloat},
    citySalesTax: {type: GraphQLFloat},
    cityUseTax: {type: GraphQLFloat},
    comboSalesTax: {type: GraphQLFloat},
    comboUseTax: {type: GraphQLFloat},
    county: {type: GraphQLString},
    countyDefault: {type: GraphQLBoolean},
    countyFips: {type: GraphQLString},
    countyLocalSalesTax: {type: GraphQLFloat},
    countyLocalUseTax: {type: GraphQLFloat},
    countySalesTax: {type: GraphQLFloat},
    countyUseTax: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    generalDefault: {type: GraphQLBoolean},
    geoCode: {type: GraphQLString},
    insideCity: {type: GraphQLBoolean},
    stateCode: {type: GraphQLString},
    stateSalesTax: {type: GraphQLFloat},
    stateUseTax: {type: GraphQLFloat},
    zipCode: {type: GraphQLString}
  })
});

export {ZipSalesTaxLookupInputType};
    