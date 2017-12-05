
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {Party} from '../product/Party.js';
import {ProductStoreGroup} from '../product/ProductStoreGroup.js';


const VendorProduct = new GraphQLObjectType({
  name: 'VendorProductType',
  description: 'Type for VendorProduct in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbizArray.load(`partys/find?partyId=${args.vendorPartyId}`)
    },
    productStoreGroup: {
      type: ProductStoreGroupType,
      args : {productStoreGroupId: {type: GraphQLString}},
      resolve: (vendorProduct, args, {loaders}) => loaders.ofbizArray.load(`productStoreGroups/find?=${args.productStoreGroupId}`)
    }
  })
});

export {VendorProduct};
    