
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductMeterTypeType} from '../product/ProductMeterTypeType.js';
import {ProductType} from '../product/ProductType.js';


const ProductMeterType = new GraphQLObjectType({
  name: 'ProductMeterType',
  description: 'Type for ProductMeter in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productMeter.productId}`)
    },
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbiz.load(`productMeterTypes/find?productMeterTypeId=${productMeter.productMeterTypeId}`)
    },
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString}
  })
});

export {ProductMeterType};
    