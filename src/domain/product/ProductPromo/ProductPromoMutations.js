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
import {ProductPromoResponseType} from '../../product/ProductPromo/ProductPromoResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromo = {
  type: ProductPromoResponseType,
  description: 'mutation for ofbiz createProductPromo method',
  args:{productPromoToBeAdded: {type: ProductPromoInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromos/add?`, args.productPromoToBeAdded, req);
  }
};
export {createProductPromo};


const updateProductPromo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromo method',
  args:{productPromoToBeUpdated: {type: ProductPromoInputType},productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromos/${args.productPromoId}?`, args.productPromoToBeUpdated, req);
  }
};
export {updateProductPromo};


const deleteProductPromoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoByIdUpdated method',
  args:{productPromoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromos/${args.productPromoId}?`, null, req);
  }
};
export {deleteProductPromoByIdUpdated};
