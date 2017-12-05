
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SecurityPermission = new GraphQLObjectType({
  name: 'SecurityPermissionType',
  description: 'Type for SecurityPermission in login',

  fields: () => ({
    permissionId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SecurityPermission};
    