
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

import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalc.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalc.js';
import {CostComponentType} from '../product/CostComponent.js';


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
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${costComponentCalc.costGlAccountTypeId}`)
    },
    fixedCost: {type: GraphQLFloat},
    description: {type: GraphQLString},
    offsettingGlAccountType: {
      type: GlAccountTypeType,
      args : {offsettingGlAccountTypeId: {type: GraphQLString}},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${costComponentCalc.offsettingGlAccountTypeId}`)
    },
    perMilliSecond: {type: GraphQLInt},
    costComponentCalcId: {type: GraphQLString},
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    },
    workEffortCostCalcs: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortCostCalcs/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    },
    productCostComponentCalcs: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {},
      resolve: (costComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/productCostComponentCalcs/find?costComponentCalcId=${costComponentCalc.costComponentCalcId}`)
    }
  })
});

export {CostComponentCalcType};
    




const CostComponentCalcInputType = new GraphQLInputObjectType({
  name: 'CostComponentCalcInputType',
  description: 'input type for CostComponentCalc in product',

  fields: () => ({
    costCustomMethodId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    variableCost: {type: GraphQLFloat},
    costGlAccountTypeId: {type: GraphQLString},
    fixedCost: {type: GraphQLFloat},
    description: {type: GraphQLString},
    offsettingGlAccountTypeId: {type: GraphQLString},
    perMilliSecond: {type: GraphQLInt},
    costComponentCalcId: {type: GraphQLString}
  })
});

export {CostComponentCalcInputType};
    