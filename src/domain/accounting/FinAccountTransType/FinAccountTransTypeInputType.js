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

const FinAccountTransTypeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransTypeInputType',
  description: 'input type for FinAccountTransType',

  fields: () => ({
    description: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FinAccountTransTypeInputType};
    