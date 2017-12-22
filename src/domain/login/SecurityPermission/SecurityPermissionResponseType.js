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

const SecurityPermissionResponseType = new GraphQLObjectType({
  name: 'SecurityPermissionResponseType',
  description: 'response type for SecurityPermission',

  fields: () => ({
    description: {type: GraphQLString},
    permissionId: {type: GraphQLString}
  })
});

export {SecurityPermissionResponseType};
    