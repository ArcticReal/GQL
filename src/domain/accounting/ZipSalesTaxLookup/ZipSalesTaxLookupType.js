
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
    