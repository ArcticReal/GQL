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

const FinAccountAuthResponseType = new GraphQLObjectType({
  name: 'FinAccountAuthResponseType',
  description: 'response type for FinAccountAuth',

  fields: () => ({
    amount: {type: GraphQLFloat},
    authorizationDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    finAccountAuthId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FinAccountAuthResponseType};
    