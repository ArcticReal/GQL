
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStore} from '../product/ProductStore.js';
import {PartyRole} from '../product/PartyRole.js';


const ProductStoreRole = new GraphQLObjectType({
  name: 'ProductStoreRoleType',
  description: 'Type for ProductStoreRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreRole};
    