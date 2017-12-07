
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCostComponentCalcType} from '../product/ProductCostComponentCalcType.js';
import {WorkEffortCostCalcType} from '../workeffort/WorkEffortCostCalcType.js';
import {CostComponentType} from '../product/CostComponentType.js';
import {CostComponentTypeAttrType} from '../product/CostComponentTypeAttrType.js';


const CostComponentTypeType = new GraphQLObjectType({
  name: 'CostComponentTypeType',
  description: 'Type for CostComponentType in product',

  fields: () => ({
    costComponentTypeId: {type: GraphQLString},
    parentType: {
      type: CostComponentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbiz.load(`costComponentTypes/find?costComponentTypeId=${costComponentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    costComponentType: {
      type: new GraphQLList(CostComponentTypeType),
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypes/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    workEffortCostCalc: {
      type: new GraphQLList(WorkEffortCostCalcType),
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`workEffortCostCalcs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    costComponentTypeAttr: {
      type: new GraphQLList(CostComponentTypeAttrType),
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypeAttrs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    costComponent: {
      type: new GraphQLList(CostComponentType),
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`costComponents/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    },
    productCostComponentCalc: {
      type: new GraphQLList(ProductCostComponentCalcType),
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (costComponentType, args, {loaders}) => loaders.ofbizArray.load(`productCostComponentCalcs/find?costComponentTypeId=${costComponentType.costComponentTypeId}`)
    }
  })
});

export {CostComponentTypeType};
    