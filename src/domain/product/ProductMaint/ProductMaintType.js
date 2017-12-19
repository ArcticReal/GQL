
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {ProductMaintTypeType} from '../../product/ProductMaintType/ProductMaintTypeType.js';
import {ProductMeterTypeType} from '../../product/ProductMeterType/ProductMeterTypeType.js';
import {ProductType} from '../../product/Product/ProductType.js';


const ProductMaintType = new GraphQLObjectType({
  name: 'ProductMaintType',
  description: 'Type for ProductMaint in product',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productMaint.productId}`)
    },
    maintTemplateWorkEffort: {
      type: WorkEffortType,
      args : {maintTemplateWorkEffortId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${productMaint.maintTemplateWorkEffortId}`)
    },
    maintName: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    productMaintType: {
      type: ProductMaintTypeType,
      args : {productMaintTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`product/product/productMaintTypes/find?productMaintTypeId=${productMaint.productMaintTypeId}`)
    },
    intervalMeterType: {
      type: ProductMeterTypeType,
      args : {intervalMeterTypeId: {type: GraphQLString}},
      resolve: (productMaint, args, {loaders}) => loaders.ofbiz.load(`product/product/productMeterTypes/find?productMeterTypeId=${productMaint.intervalMeterTypeId}`)
    },
    productMaintSeqId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {ProductMaintType};
    