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

const SecurityPermissionInputType = new GraphQLInputObjectType({
  name: 'SecurityPermissionInputType',
  description: 'input type for SecurityPermission',

  fields: () => ({
    description: {type: GraphQLString},
    permissionId: {type: GraphQLString}
  })
});

export {SecurityPermissionInputType};
    