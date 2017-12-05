
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
import {WorkEffort} from '../product/WorkEffort.js';
import {ProductMaintType} from '../product/ProductMaintType.js';
import {ProductMeterType} from '../product/ProductMeterType.js';


const ProductMaint = new GraphQLObjectType({
  name: 'ProductMaintType',
  description: 'Type for ProductMaint in product',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    maintTemplateWorkEffort: {
      type: WorkEffortType,
      args : {maintTemplateWorkEffortId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?workEffortId=${args.maintTemplateWorkEffortId}`)
    },
    maintName: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    productMaintType: {
      type: ProductMaintTypeType,
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbizArray.load(`productMaintTypes/find?=${args.productMaintTypeId}`)
    },
    intervalMeterType: {
      type: ProductMeterTypeType,
      args : {intervalMeterTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbizArray.load(`productMeterTypes/find?productMeterTypeId=${args.intervalMeterTypeId}`)
    },
    productMaintSeqId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {ProductMaint};
    