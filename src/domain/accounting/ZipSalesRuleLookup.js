
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



const ZipSalesRuleLookupType = new GraphQLObjectType({
  name: 'ZipSalesRuleLookupType',
  description: 'Type for ZipSalesRuleLookup in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    taxable: {type: GraphQLString},
    city: {type: GraphQLString},
    idCode: {type: GraphQLString},
    county: {type: GraphQLString},
    shipCond: {type: GraphQLString},
    stateCode: {type: GraphQLString}
  })
});

export {ZipSalesRuleLookupType};
    




const ZipSalesRuleLookupInputType = new GraphQLInputObjectType({
  name: 'ZipSalesRuleLookupInputType',
  description: 'input type for ZipSalesRuleLookup in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    taxable: {type: GraphQLString},
    city: {type: GraphQLString},
    idCode: {type: GraphQLString},
    county: {type: GraphQLString},
    shipCond: {type: GraphQLString},
    stateCode: {type: GraphQLString}
  })
});

export {ZipSalesRuleLookupInputType};
    