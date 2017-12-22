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

const FinAccountTransTypeResponseType = new GraphQLObjectType({
  name: 'FinAccountTransTypeResponseType',
  description: 'response type for FinAccountTransType',

  fields: () => ({
    description: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FinAccountTransTypeResponseType};
    