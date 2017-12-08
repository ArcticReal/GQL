
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
import {ProductType} from '../product/Product.js';
import {WorkEffortGoodStandardTypeType} from '../workeffort/WorkEffortGoodStandardType.js';


const WorkEffortGoodStandardType = new GraphQLObjectType({
  name: 'WorkEffortGoodStandardType',
  description: 'Type for WorkEffortGoodStandard in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortGoodStandard, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortGoodStandard.workEffortId}`)
    },
    workEffortGoodStdType: {
      type: WorkEffortGoodStandardTypeType,
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandard, args, {loaders}) => loaders.ofbiz.load(`workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandard.workEffortGoodStdTypeId}`)
    },
    fromDate: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (workEffortGoodStandard, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${workEffortGoodStandard.productId}`)
    },
    statusId: {type: GraphQLString},
    estimatedQuantity: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardType};
    




const WorkEffortGoodStandardInputType = new GraphQLInputObjectType({
  name: 'WorkEffortGoodStandardInputType',
  description: 'input type for WorkEffortGoodStandard in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    workEffortGoodStdTypeId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    estimatedQuantity: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortGoodStandardInputType};
    