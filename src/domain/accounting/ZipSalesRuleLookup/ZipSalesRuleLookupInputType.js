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

const ZipSalesRuleLookupInputType = new GraphQLInputObjectType({
  name: 'ZipSalesRuleLookupInputType',
  description: 'input type for ZipSalesRuleLookup',

  fields: () => ({
    city: {type: GraphQLString},
    county: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    idCode: {type: GraphQLString},
    shipCond: {type: GraphQLString},
    stateCode: {type: GraphQLString},
    taxable: {type: GraphQLString}
  })
});

export {ZipSalesRuleLookupInputType};
    