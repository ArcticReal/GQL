
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponentTypeType} from '../product/CostComponentTypeType.js';
import {CostComponentCalcType} from '../product/CostComponentCalcType.js';
import {ProductType} from '../product/ProductType.js';


const ProductCostComponentCalcType = new GraphQLObjectType({
  name: 'ProductCostComponentCalcType',
  description: 'Type for ProductCostComponentCalc in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbiz.load(`costComponentTypes/find?costComponentTypeId=${productCostComponentCalc.costComponentTypeId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productCostComponentCalc.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbiz.load(`costComponentCalcs/find?costComponentCalcId=${productCostComponentCalc.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCostComponentCalcType};
    