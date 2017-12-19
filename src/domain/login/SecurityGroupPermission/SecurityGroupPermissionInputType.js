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

const SecurityGroupPermissionInputType = new GraphQLInputObjectType({
  name: 'SecurityGroupPermissionInputType',
  description: 'input type for SecurityGroupPermission',

  fields: () => ({
    groupId: {type: GraphQLString},
    permissionId: {type: GraphQLString}
  })
});

export {SecurityGroupPermissionInputType};
    