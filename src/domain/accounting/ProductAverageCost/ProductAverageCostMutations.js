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
import {ProductAverageCostInputType} from '../../accounting/ProductAverageCost/ProductAverageCostInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductAverageCost = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductAverageCost method',
  args:{productAverageCostToBeAdded: {type: ProductAverageCostInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/productAverageCosts/add?`, args.productAverageCostToBeAdded, req);
  }
};
export {createProductAverageCost};


const updateProductAverageCost = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductAverageCost method',
  args:{productAverageCostToBeUpdated: {type: ProductAverageCostInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/productAverageCosts/${args.nullVal}?`, args.productAverageCostToBeUpdated, req);
  }
};
export {updateProductAverageCost};


const deleteProductAverageCostByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductAverageCostByIdUpdated method',
  args:{productAverageCostId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/productAverageCosts/${args.productAverageCostId}?`, null, req);
  }
};
export {deleteProductAverageCostByIdUpdated};
