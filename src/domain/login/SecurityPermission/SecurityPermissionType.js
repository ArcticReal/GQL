
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



const SecurityPermissionType = new GraphQLObjectType({
  name: 'SecurityPermissionType',
  description: 'Type for SecurityPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SecurityPermissionType};
    