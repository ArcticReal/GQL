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

const SettlementTermResponseType = new GraphQLObjectType({
  name: 'SettlementTermResponseType',
  description: 'response type for SettlementTerm',

  fields: () => ({
    settlementTermId: {type: GraphQLString},
    termName: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    uomId: {type: GraphQLString}
  })
});

export {SettlementTermResponseType};
    