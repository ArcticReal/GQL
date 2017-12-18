
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
import {ProductAssocTypeType} from '../product/ProductAssocType.js';
import {ProductType} from '../product/Product.js';


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
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productAssoc.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    estimateCalcMethod: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    instruction: {type: GraphQLString},
    productTo: {
      type: ProductType,
      args : {productIdTo: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productAssoc.productIdTo}`)
    },
    productAssocType: {
      type: ProductAssocTypeType,
      args : {productAssocTypeId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`product/product/productAssocTypes/find?productAssocTypeId=${productAssoc.productAssocTypeId}`)
    },
    routingWorkEffort: {
      type: WorkEffortType,
      args : {routingWorkEffortId: {type: GraphQLString}},
      resolve: (productAssoc, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${productAssoc.routingWorkEffortId}`)
    }
  })
});

export {ProductAssocType};
    




const ProductAssocInputType = new GraphQLInputObjectType({
  name: 'ProductAssocInputType',
  description: 'input type for ProductAssoc',

  fields: () => ({
    estimateCalcMethod: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    instruction: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productIdTo: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reason: {type: GraphQLString},
    recurrenceInfoId: {type: GraphQLString},
    routingWorkEffortId: {type: GraphQLString},
    scrapFactor: {type: GraphQLFloat},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProductAssocInputType};
    