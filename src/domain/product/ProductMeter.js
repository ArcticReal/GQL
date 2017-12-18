
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

import {ProductMeterTypeType} from '../product/ProductMeterType.js';
import {ProductType} from '../product/Product.js';


const ProductMeterType = new GraphQLObjectType({
  name: 'ProductMeterType',
  description: 'Type for ProductMeter in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productMeter.productId}`)
    },
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbiz.load(`product/product/productMeterTypes/find?productMeterTypeId=${productMeter.productMeterTypeId}`)
    },
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString}
  })
});

export {ProductMeterType};
    




const ProductMeterInputType = new GraphQLInputObjectType({
  name: 'ProductMeterInputType',
  description: 'input type for ProductMeter',

  fields: () => ({
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {ProductMeterInputType};
    