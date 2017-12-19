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

const SettlementTermInputType = new GraphQLInputObjectType({
  name: 'SettlementTermInputType',
  description: 'input type for SettlementTerm',

  fields: () => ({
    settlementTermId: {type: GraphQLString},
    termName: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    uomId: {type: GraphQLString}
  })
});

export {SettlementTermInputType};
    