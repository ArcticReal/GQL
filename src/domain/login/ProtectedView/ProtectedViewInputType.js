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

const ProtectedViewInputType = new GraphQLInputObjectType({
  name: 'ProtectedViewInputType',
  description: 'input type for ProtectedView',

  fields: () => ({
    groupId: {type: GraphQLString},
    maxHits: {type: GraphQLInt},
    maxHitsDuration: {type: GraphQLInt},
    tarpitDuration: {type: GraphQLInt},
    viewNameId: {type: GraphQLString}
  })
});

export {ProtectedViewInputType};
    