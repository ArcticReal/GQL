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
import {ProductPromoCategoryResponseType} from '../../product/ProductPromoCategory/ProductPromoCategoryResponseType.js';
import {ProductPromoCategoryInputType} from '../../product/ProductPromoCategory/ProductPromoCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoCategory = {
  type: ProductPromoCategoryResponseType,
  description: 'mutation for ofbiz createProductPromoCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoCategorys/add?`, null, req);
  }
};
export {createProductPromoCategory};


const updateProductPromoCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoCategory method',
  args:{productPromoCategoryToBeUpdated: {type: ProductPromoCategoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoCategorys/${args.nullVal}?`, args.productPromoCategoryToBeUpdated, req);
  }
};
export {updateProductPromoCategory};


const deleteProductPromoCategoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoCategoryByIdUpdated method',
  args:{productPromoCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoCategorys/${args.productPromoCategoryId}?`, null, req);
  }
};
export {deleteProductPromoCategoryByIdUpdated};
