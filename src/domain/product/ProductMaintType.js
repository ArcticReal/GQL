
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {ProductMaintTypeType} from '../product/ProductMaintTypeType.js';
import {ProductMeterTypeType} from '../product/ProductMeterTypeType.js';
import {ProductType} from '../product/ProductType.js';


const ProductMaintType = new GraphQLObjectType({
  name: 'ProductMaintType',
  description: 'Type for ProductMaint in product',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productMaint.productId}`)
    },
    maintTemplateWorkEffort: {
      type: WorkEffortType,
      args : {maintTemplateWorkEffortId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${productMaint.maintTemplateWorkEffortId}`)
    },
    maintName: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    productMaintType: {
      type: ProductMaintTypeType,
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`productMaintTypes/find?productMaintTypeId=${productMaint.productMaintTypeId}`)
    },
    intervalMeterType: {
      type: ProductMeterTypeType,
      args : {intervalMeterTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`productMeterTypes/find?productMeterTypeId=${productMaint.intervalMeterTypeId}`)
    },
    productMaintSeqId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {ProductMaintType};
    