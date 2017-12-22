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

const RoleTypeResponseType = new GraphQLObjectType({
  name: 'RoleTypeResponseType',
  description: 'response type for RoleType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {RoleTypeResponseType};
    