
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
import {ProductStore} from '../product/ProductStore.js';


const InventoryItemTempRes = new GraphQLObjectType({
  name: 'InventoryItemTempResType',
  description: 'Type for InventoryItemTempRes in product',

  fields: () => ({
    reservedDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (inventoryItemTempRes, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (inventoryItemTempRes, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    }
  })
});

export {InventoryItemTempRes};
    