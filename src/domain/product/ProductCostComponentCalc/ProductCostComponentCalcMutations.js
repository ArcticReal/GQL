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
import {ProductCostComponentCalcInputType} from '../../product/ProductCostComponentCalc/ProductCostComponentCalcInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCostComponentCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCostComponentCalc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/costComponent/productCostComponentCalcs/add?`, null, req);
  }
};
export {createProductCostComponentCalc};


const updateProductCostComponentCalc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCostComponentCalc method',
  args:{productCostComponentCalcToBeUpdated: {type: ProductCostComponentCalcInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/costComponent/productCostComponentCalcs/${args.nullVal}?`, args.productCostComponentCalcToBeUpdated, req);
  }
};
export {updateProductCostComponentCalc};


const deleteProductCostComponentCalcByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCostComponentCalcByIdUpdated method',
  args:{productCostComponentCalcId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/costComponent/productCostComponentCalcs/${args.productCostComponentCalcId}?`, null, req);
  }
};
export {deleteProductCostComponentCalcByIdUpdated};
