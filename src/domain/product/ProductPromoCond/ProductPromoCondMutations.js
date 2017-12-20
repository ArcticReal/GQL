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
import {ProductPromoCondInputType} from '../../product/ProductPromoCond/ProductPromoCondInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoCond = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductPromoCond method',
  args:{productPromoCondToBeAdded: {type: ProductPromoCondInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoConds/add?`, args.productPromoCondToBeAdded, req);
  }
};
export {createProductPromoCond};


const updateProductPromoCond = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductPromoCond method',
  args:{productPromoCondToBeUpdated: {type: ProductPromoCondInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoConds/${args.nullVal}?`, args.productPromoCondToBeUpdated, req);
  }
};
export {updateProductPromoCond};


const deleteProductPromoCondByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductPromoCondByIdUpdated method',
  args:{productPromoCondId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoConds/${args.productPromoCondId}?`, null, req);
  }
};
export {deleteProductPromoCondByIdUpdated};
