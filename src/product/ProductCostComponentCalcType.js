
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {CostComponentType} from '../product/CostComponentType.js';
import {Product} from '../product/Product.js';
import {CostComponentCalc} from '../product/CostComponentCalc.js';


const ProductCostComponentCalc = new GraphQLObjectType({
  name: 'ProductCostComponentCalcType',
  description: 'Type for ProductCostComponentCalc in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    costComponentType: {
      type: CostComponentTypeType,
      args : {costComponentTypeId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`costComponentTypes/find?=${args.costComponentTypeId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    sequenceNum: {type: GraphQLInt},
    costComponentCalc: {
      type: CostComponentCalcType,
      args : {costComponentCalcId: {type: GraphQLString}},
      resolve: (productCostComponentCalc, args, {loaders}) => loaders.ofbizArray.load(`costComponentCalcs/find?=${args.costComponentCalcId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductCostComponentCalc};
    