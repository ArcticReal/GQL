
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountTypeType} from '../accounting/GlAccountTypeType.js';
import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalcType.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalcType.js';
import {CostComponentType} from '../product/CostComponentType.js';


const CostComponentCalcType = new GraphQLObjectType({
  name: 'CostComponentCalcType',
  description: 'Type for CostComponentCalc in product',

  fields: () => ({
    costCustomMethodId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    variableCost: {type: GraphQLFloat},
    costGlAccountType: {
      type: GlAccountTypeType,
      args : {costGlAccountTypeId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${costComponentCalc.costGlAccountTypeId}`)
    },
    fixedCost: {type: GraphQLFloat},
    description: {type: GraphQLString},
    offsettingGlAccountType: {
      type: GlAccountTypeType,
      args : {offsettingGlAccountTypeId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${costComponentCalc.offsettingGlAccountTypeId}`)
    },
    perMilliSecond: {type: GraphQLInt},
    costComponentCalcId: {type: GraphQLString},
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    },
    workEffortCostCalc: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`workEffortCostCalcs/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    },
    productCostComponentCalc: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`productCostComponentCalcs/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    }
  })
});

export {CostComponentCalcType};
    