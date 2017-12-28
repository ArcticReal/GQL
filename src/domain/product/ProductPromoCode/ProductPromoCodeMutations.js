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
import {ProductPromoCodeInputType} from '../../product/ProductPromoCode/ProductPromoCodeInputType.js';
import {ProductPromoCodeResponseType} from '../../product/ProductPromoCode/ProductPromoCodeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoCode = {
  type: ProductPromoCodeResponseType,
  description: 'mutation for ofbiz createProductPromoCode method',
  args:{productPromoCodeToBeAdded: {type: ProductPromoCodeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoCodes/add?`, args.productPromoCodeToBeAdded, req);
  }
};
export {createProductPromoCode};


const updateProductPromoCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoCode method',
  args:{productPromoCodeToBeUpdated: {type: ProductPromoCodeInputType},productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoCodes/${args.productPromoCodeId}?`, args.productPromoCodeToBeUpdated, req);
  }
};
export {updateProductPromoCode};


const deleteProductPromoCodeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoCodeByIdUpdated method',
  args:{productPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoCodes/${args.productPromoCodeId}?`, null, req);
  }
};
export {deleteProductPromoCodeByIdUpdated};
