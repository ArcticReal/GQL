
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
import {CostComponentTypeType} from '../product/CostComponentTypeType.js';
import {CostComponentCalcType} from '../product/CostComponentCalcType.js';


const WorkEffortCostCalcType = new GraphQLObjectType({
  name: 'WorkEffortCostCalcType',
  description: 'Type for WorkEffortCostCalc in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortCostCalc.workEffortId}`)
    },
    fromDate: {type: GraphQLString},
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`costComponentTypes/find?costComponentTypeId=${workEffortCostCalc.costComponentTypeId}`)
    },
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (workEffortCostCalc, args, {loaders}) => loaders.ofbiz.load(`costComponentCalcs/find?costComponentCalcId=${workEffortCostCalc.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortCostCalcType};
    