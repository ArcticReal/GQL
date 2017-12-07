
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
import {ProductType} from '../product/ProductType.js';
import {WorkEffortGoodStandardTypeType} from '../workeffort/WorkEffortGoodStandardTypeType.js';


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
    