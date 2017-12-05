
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRole} from '../product/PartyRole.js';
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';


const ProductStoreGroupRole = new GraphQLObjectType({
  name: 'ProductStoreGroupRoleType',
  description: 'Type for ProductStoreGroupRole in product',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (productStoreGroupRole, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?=${args.productStoreGroupId}`)
    }
  })
});

export {ProductStoreGroupRole};
    