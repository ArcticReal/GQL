
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

import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalc.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalc.js';
import {CostComponentType} from '../product/CostComponent.js';
import {CostComponentTypeAttrType} from '../product/CostComponentTypeAttr.js';


const CostComponentTypeType = new GraphQLObjectType({
  name: 'CostComponentTypeType',
  description: 'Type for CostComponentType in product',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    parentType: {
      type: CostComponentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${costComponentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    costComponentTypes: {
      type: new GraphQLList(CostComponentTypeType),
      args : {},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    workEffortCostCalcs: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortCostCalcs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    costComponentTypeAttrs: {
      type: new GraphQLList(CostComponentTypeAttrType),
      args : {},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/costComponentTypeAttrs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    costComponents: {
      type: new GraphQLList(CostComponentType),
      args : {},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`product/costComponents/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    productCostComponentCalcs: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`product/costComponent/productCostComponentCalcs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    }
  })
});

export {CostComponentTypeType};
    




const CostComponentTypeInputType = new GraphQLInputObjectType({
  name: 'CostComponentTypeInputType',
  description: 'input type for CostComponentType in product',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {CostComponentTypeInputType};
    