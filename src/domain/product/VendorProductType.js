
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {ProductStoreGroupType} from '../product/ProductStoreGroupType.js';
import {ProductType} from '../product/ProductType.js';


const VendorProductType = new GraphQLObjectType({
  name: 'VendorProductType',
  description: 'Type for VendorProduct in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${vendorProduct.productId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${vendorProduct.vendorPartyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`productStoreGroups/find?productStoreGroupId=${vendorProduct.productStoreGroupId}`)
    }
  })
});

export {VendorProductType};
    