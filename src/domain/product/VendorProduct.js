
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

import {PartyType} from '../party/Party.js';
import {ProductStoreGroupType} from '../product/ProductStoreGroup.js';
import {ProductType} from '../product/Product.js';


const VendorProductType = new GraphQLObjectType({
  name: 'VendorProductType',
  description: 'Type for VendorProduct in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${vendorProduct.productId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${vendorProduct.vendorPartyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbiz.load(`product/product/productStoreGroups/find?productStoreGroupId=${vendorProduct.productStoreGroupId}`)
    }
  })
});

export {VendorProductType};
    




const VendorProductInputType = new GraphQLInputObjectType({
  name: 'VendorProductInputType',
  description: 'input type for VendorProduct',

  fields: () => ({
    productId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString}
  })
});

export {VendorProductInputType};
    