
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ProductStoreGroupType} from '../../product/ProductStoreGroup/ProductStoreGroupType.js';


const ProductStoreGroupRoleType = new GraphQLObjectType({
  name: 'ProductStoreGroupRoleType',
  description: 'Type for ProductStoreGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${productStoreGroupRole.partyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${productStoreGroupRole.productStoreGroupId}`)
    }
  })
});

export {ProductStoreGroupRoleType};
    