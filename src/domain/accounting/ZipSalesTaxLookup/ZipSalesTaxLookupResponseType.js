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

const ZipSalesTaxLookupResponseType = new GraphQLObjectType({
  name: 'ZipSalesTaxLookupResponseType',
  description: 'response type for ZipSalesTaxLookup',

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

export {ZipSalesTaxLookupResponseType};
    