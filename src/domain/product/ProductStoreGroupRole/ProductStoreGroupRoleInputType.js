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

const ProductStoreGroupRoleInputType = new GraphQLInputObjectType({
  name: 'ProductStoreGroupRoleInputType',
  description: 'input type for ProductStoreGroupRole',

  fields: () => ({
    partyId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString}
  })
});

export {ProductStoreGroupRoleInputType};
    