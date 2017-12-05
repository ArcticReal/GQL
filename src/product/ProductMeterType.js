
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
import {ProductMeterType} from '../product/ProductMeterType.js';


const ProductMeter = new GraphQLObjectType({
  name: 'ProductMeterType',
  description: 'Type for ProductMeter in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    productMeterType: {
      type: ProductMeterTypeType,
      args : {productMeterTypeId: {type: GraphQLString}},
      resolve: (productMeter, args, {loaders}) => loaders.ofbizArray.load(`productMeterTypes/find?=${args.productMeterTypeId}`)
    },
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString}
  })
});

export {ProductMeter};
    