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
import {ProductAverageCostResponseType} from '../../accounting/ProductAverageCost/ProductAverageCostResponseType.js';
import {ProductAverageCostInputType} from '../../accounting/ProductAverageCost/ProductAverageCostInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductAverageCost = {
  type: ProductAverageCostResponseType,
  description: 'mutation for ofbiz createProductAverageCost method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/productAverageCosts/add?`, null, req);
  }
};
export {createProductAverageCost};


const updateProductAverageCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAverageCost method',
  args:{productAverageCostToBeUpdated: {type: ProductAverageCostInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/productAverageCosts/${args.nullVal}?`, args.productAverageCostToBeUpdated, req);
  }
};
export {updateProductAverageCost};


const deleteProductAverageCostByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAverageCostByIdUpdated method',
  args:{productAverageCostId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/productAverageCosts/${args.productAverageCostId}?`, null, req);
  }
};
export {deleteProductAverageCostByIdUpdated};
