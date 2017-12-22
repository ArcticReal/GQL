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

const ProtectedViewResponseType = new GraphQLObjectType({
  name: 'ProtectedViewResponseType',
  description: 'response type for ProtectedView',

  fields: () => ({
    groupId: {type: GraphQLString},
    maxHits: {type: GraphQLInt},
    maxHitsDuration: {type: GraphQLInt},
    tarpitDuration: {type: GraphQLInt},
    viewNameId: {type: GraphQLString}
  })
});

export {ProtectedViewResponseType};
    