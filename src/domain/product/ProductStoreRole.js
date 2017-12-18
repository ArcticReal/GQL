
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

import {PartyRoleType} from '../party/PartyRole.js';
import {ProductStoreType} from '../product/ProductStore.js';


const ProductStoreRoleType = new GraphQLObjectType({
  name: 'ProductStoreRoleType',
  description: 'Type for ProductStoreRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreRole.productStoreId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${productStoreRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreRoleType};
    




const ProductStoreRoleInputType = new GraphQLInputObjectType({
  name: 'ProductStoreRoleInputType',
  description: 'input type for ProductStoreRole',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreRoleInputType};
    