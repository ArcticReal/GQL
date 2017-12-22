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

const ProductStoreGroupRoleResponseType = new GraphQLObjectType({
  name: 'ProductStoreGroupRoleResponseType',
  description: 'response type for ProductStoreGroupRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupRoleResponseType};
    