
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
import {ProductType} from '../../product/Product/ProductType.js';
import {WorkEffortGoodStandardTypeType} from '../../workeffort/WorkEffortGoodStandardType/WorkEffortGoodStandardTypeType.js';


const WorkEffortGoodStandardType = new GraphQLObjectType({
  name: 'WorkEffortGoodStandardType',
  description: 'Type for WorkEffortGoodStandard in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortGoodStandard, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortGoodStandard.workEffortId}`)
    },
    workEffortGoodStdType: {
      type: WorkEffortGoodStandardTypeType,
      args : {workEffortGoodStdTypeId: {type: GraphQLString}},
      resolve: (workEffortGoodStandard, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEffort/workEffortGoodStandardTypes/find?workEffortGoodStdTypeId=${workEffortGoodStandard.workEffortGoodStdTypeId}`)
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
    