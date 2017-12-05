
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RecurrenceInfo} from '../product/RecurrenceInfo.js';
import {Product} from '../product/Product.js';
import {CustomMethod} from '../product/CustomMethod.js';
import {Product} from '../product/Product.js';
import {ProductAssocType} from '../product/ProductAssocType.js';
import {WorkEffort} from '../product/WorkEffort.js';


const ProductAssoc = new GraphQLObjectType({
  name: 'ProductAssocType',
  description: 'Type for ProductAssoc in product',

  fields: () => ({
    reason: {type: GraphQLString},
    scrapFactor: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    recurrenceInfo: {
      type: RecurrenceInfoType,
      args : {recurrenceInfoId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`recurrenceInfos/find?=${args.recurrenceInfoId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    estimateCalcMethod: {
      type: CustomMethodType,
      args : {estimateCalcMethod: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`customMethods/find?customMethodId=${args.estimateCalcMethod}`)
    },
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    instruction: {type: GraphQLString},
    productTo: {
      type: ProductType,
      args : {productIdTo: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`products/find?productId=${args.productIdTo}`)
    },
    productAssocType: {
      type: ProductAssocTypeType,
      args : {productAssocTypeId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`productAssocTypes/find?=${args.productAssocTypeId}`)
    },
    routingWorkEffort: {
      type: WorkEffortType,
      args : {routingWorkEffortId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbizArray.load(`workEfforts/find?workEffortId=${args.routingWorkEffortId}`)
    }
  })
});

export {ProductAssoc};
    