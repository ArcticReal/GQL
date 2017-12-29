
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

import {CostComponentTypeType} from '../../product/CostComponentType/CostComponentTypeType.js';
import {CostComponentCalcType} from '../../product/CostComponentCalc/CostComponentCalcType.js';
import {ProductType} from '../../product/Product/ProductType.js';


const ProductCostComponentCalcType = new GraphQLObjectType({
  name: 'ProductCostComponentCalcType',
  description: 'Type for ProductCostComponentCalc in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentTypes/find?costComponentTypeId=${productCostComponentCalc.costComponentTypeId}`)
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
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbiz.load(`product/costComponent/costComponentCalcs/find?costComponentCalcId=${productCostComponentCalc.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCostComponentCalcType};
    