
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {ProductMaintTypeType} from '../product/ProductMaintType.js';
import {ProductMeterTypeType} from '../product/ProductMeterType.js';
import {ProductType} from '../product/Product.js';


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
    




const ProductMaintInputType = new GraphQLInputObjectType({
  name: 'ProductMaintInputType',
  description: 'input type for ProductMaint in product',

  fields: () => ({
    intervalUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    maintTemplateWorkEffortId: {type: GraphQLString},
    maintName: {type: GraphQLString},
    intervalQuantity: {type: GraphQLFloat},
    productMaintTypeId: {type: GraphQLString},
    intervalMeterTypeId: {type: GraphQLString},
    productMaintSeqId: {type: GraphQLString},
    repeatCount: {type: GraphQLInt}
  })
});

export {ProductMaintInputType};
    