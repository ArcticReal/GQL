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
import {ProductPriceActionTypeInputType} from '../../product/ProductPriceActionType/ProductPriceActionTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductPriceActionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductPriceActionType method',
  args:{productPriceActionTypeToBeAdded: {type: ProductPriceActionTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceActionTypes/add?`, args.productPriceActionTypeToBeAdded, req);
  }
};
export {createProductPriceActionType};


const updateProductPriceActionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceActionType method',
  args:{productPriceActionTypeToBeUpdated: {type: ProductPriceActionTypeInputType},productPriceActionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceActionTypes/${args.productPriceActionTypeId}?`, args.productPriceActionTypeToBeUpdated, req);
  }
};
export {updateProductPriceActionType};


const deleteProductPriceActionTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceActionTypeByIdUpdated method',
  args:{productPriceActionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceActionTypes/${args.productPriceActionTypeId}?`, null, req);
  }
};
export {deleteProductPriceActionTypeByIdUpdated};
