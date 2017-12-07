
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {ProductStoreGroupType} from '../product/ProductStoreGroupType.js';


const ProductStoreGroupRoleType = new GraphQLObjectType({
  name: 'ProductStoreGroupRoleType',
  description: 'Type for ProductStoreGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${productStoreGroupRole.partyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${productStoreGroupRole.productStoreGroupId}`)
    }
  })
});

export {ProductStoreGroupRoleType};
    