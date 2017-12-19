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

const FinAccountTypeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeInputType',
  description: 'input type for FinAccountType',

  fields: () => ({
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    isRefundable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    replenishEnumId: {type: GraphQLString}
  })
});

export {FinAccountTypeInputType};
    