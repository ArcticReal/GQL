
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
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreRole.productStoreId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (productStoreRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${productStoreRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreRoleType};
    




const ProductStoreRoleInputType = new GraphQLInputObjectType({
  name: 'ProductStoreRoleInputType',
  description: 'input type for ProductStoreRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStoreId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreRoleInputType};
    