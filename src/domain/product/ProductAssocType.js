
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
import {ProductAssocTypeType} from '../product/ProductAssocTypeType.js';
import {ProductType} from '../product/ProductType.js';


const ProductAssocType = new GraphQLObjectType({
  name: 'ProductAssocType',
  description: 'Type for ProductAssoc in product',

  fields: () => ({
    reason: {type: GraphQLString},
    scrapFactor: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    recurrenceInfoId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productAssoc.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    estimateCalcMethod: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    instruction: {type: GraphQLString},
    productTo: {
      type: ProductType,
      args : {productIdTo: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productAssoc.productIdTo}`)
    },
    productAssocType: {
      type: ProductAssocTypeType,
      args : {productAssocTypeId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`productAssocTypes/find?productAssocTypeId=${productAssoc.productAssocTypeId}`)
    },
    routingWorkEffort: {
      type: WorkEffortType,
      args : {routingWorkEffortId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${productAssoc.routingWorkEffortId}`)
    }
  })
});

export {ProductAssocType};
    