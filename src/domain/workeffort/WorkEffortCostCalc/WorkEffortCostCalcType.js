
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
import {CostComponentTypeType} from '../../product/CostComponentType/CostComponentTypeType.js';
import {CostComponentCalcType} from '../../product/CostComponentCalc/CostComponentCalcType.js';


const WorkEffortCostCalcType = new GraphQLObjectType({
  name: 'WorkEffortCostCalcType',
  description: 'Type for WorkEffortCostCalc in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortCostCalc.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${workEffortCostCalc.costComponentTypeId}`)
    },
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentCalcs/find?costComponentCalcId=${workEffortCostCalc.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortCostCalcType};
    