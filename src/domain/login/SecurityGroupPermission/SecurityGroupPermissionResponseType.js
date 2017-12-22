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

const SecurityGroupPermissionResponseType = new GraphQLObjectType({
  name: 'SecurityGroupPermissionResponseType',
  description: 'response type for SecurityGroupPermission',

  fields: () => ({
    groupId: {type: GraphQLString},
    permissionId: {type: GraphQLString}
  })
});

export {SecurityGroupPermissionResponseType};
    