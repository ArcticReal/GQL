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
import {ProductPromoActionInputType} from '../../product/ProductPromoAction/ProductPromoActionInputType.js';
import {ProductPromoActionResponseType} from '../../product/ProductPromoAction/ProductPromoActionResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoAction = {
  type: ProductPromoActionResponseType,
  description: 'mutation for ofbiz createProductPromoAction method',
  args:{productPromoActionToBeAdded: {type: ProductPromoActionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoActions/add?`, args.productPromoActionToBeAdded, req);
  }
};
export {createProductPromoAction};


const updateProductPromoAction = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoAction method',
  args:{productPromoActionToBeUpdated: {type: ProductPromoActionInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoActions/${args.nullVal}?`, args.productPromoActionToBeUpdated, req);
  }
};
export {updateProductPromoAction};


const deleteProductPromoActionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoActionByIdUpdated method',
  args:{productPromoActionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoActions/${args.productPromoActionId}?`, null, req);
  }
};
export {deleteProductPromoActionByIdUpdated};
