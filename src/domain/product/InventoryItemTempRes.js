
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

import {ProductType} from '../product/Product.js';
import {ProductStoreType} from '../product/ProductStore.js';


const InventoryItemTempResType = new GraphQLObjectType({
  name: 'InventoryItemTempResType',
  description: 'Type for InventoryItemTempRes in product',

  fields: () => ({
    reservedDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (inventoryItemTempRes, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${inventoryItemTempRes.productId}`)
    },
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (inventoryItemTempRes, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${inventoryItemTempRes.productStoreId}`)
    }
  })
});

export {InventoryItemTempResType};
    




const InventoryItemTempResInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTempResInputType',
  description: 'input type for InventoryItemTempRes in product',

  fields: () => ({
    reservedDate: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productStoreId: {type: GraphQLString}
  })
});

export {InventoryItemTempResInputType};
    