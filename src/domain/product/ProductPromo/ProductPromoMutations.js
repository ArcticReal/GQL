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
import {ProductPromoInputType} from '../../product/ProductPromo/ProductPromoInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromo = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductPromo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromos/add?`, null, req);
  }
};
export {createProductPromo};


const updateProductPromo = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductPromo method',
  args:{productPromoToBeUpdated: {type: ProductPromoInputType},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromos/${args.productPromoId}?`, args.productPromoToBeUpdated, req);
  }
};
export {updateProductPromo};


const deleteProductPromoByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductPromoByIdUpdated method',
  args:{productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromos/${args.productPromoId}?`, null, req);
  }
};
export {deleteProductPromoByIdUpdated};
