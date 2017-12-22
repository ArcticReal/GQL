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

const FinAccountTypeResponseType = new GraphQLObjectType({
  name: 'FinAccountTypeResponseType',
  description: 'response type for FinAccountType',

  fields: () => ({
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    isRefundable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    replenishEnumId: {type: GraphQLString}
  })
});

export {FinAccountTypeResponseType};
    