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
import {ProductPromoUseInputType} from '../../product/ProductPromoUse/ProductPromoUseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductPromoUse = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductPromoUse method',
  args:{productPromoUseToBeAdded: {type: ProductPromoUseInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoUses/add?`, args.productPromoUseToBeAdded, req);
  }
};
export {createProductPromoUse};


const deleteProductPromoUseByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoUseByIdUpdated method',
  args:{productPromoUseId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoUses/${args.productPromoUseId}?`, null, req);
  }
};
export {deleteProductPromoUseByIdUpdated};


const updateProductPromoUse = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoUse method',
  args:{productPromoUseToBeUpdated: {type: ProductPromoUseInputType},promoSequenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoUses/${args.promoSequenceId}?`, args.productPromoUseToBeUpdated, req);
  }
};
export {updateProductPromoUse};
