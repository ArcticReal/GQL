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
import {ProductPromoProductInputType} from '../../product/ProductPromoProduct/ProductPromoProductInputType.js';
import {ProductPromoProductResponseType} from '../../product/ProductPromoProduct/ProductPromoProductResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoProduct = {
  type: ProductPromoProductResponseType,
  description: 'mutation for ofbiz createProductPromoProduct method',
  args:{productPromoProductToBeAdded: {type: ProductPromoProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoProducts/add?`, args.productPromoProductToBeAdded, req);
  }
};
export {createProductPromoProduct};


const updateProductPromoProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoProduct method',
  args:{productPromoProductToBeUpdated: {type: ProductPromoProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoProducts/${args.nullVal}?`, args.productPromoProductToBeUpdated, req);
  }
};
export {updateProductPromoProduct};


const deleteProductPromoProductByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoProductByIdUpdated method',
  args:{productPromoProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoProducts/${args.productPromoProductId}?`, null, req);
  }
};
export {deleteProductPromoProductByIdUpdated};
