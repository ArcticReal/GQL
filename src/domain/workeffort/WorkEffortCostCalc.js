
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
import {CostComponentTypeType} from '../product/CostComponentType.js';
import {CostComponentCalcType} from '../product/CostComponentCalc.js';


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
    




const WorkEffortCostCalcInputType = new GraphQLInputObjectType({
  name: 'WorkEffortCostCalcInputType',
  description: 'input type for WorkEffortCostCalc in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    costComponentCalcId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WorkEffortCostCalcInputType};
    