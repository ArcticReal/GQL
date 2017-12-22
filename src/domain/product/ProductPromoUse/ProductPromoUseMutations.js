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
import {ProductPromoUseResponseType} from '../../product/ProductPromoUse/ProductPromoUseResponseType.js';
import {ProductPromoUseInputType} from '../../product/ProductPromoUse/ProductPromoUseInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoUse = {
  type: ProductPromoUseResponseType,
  description: 'mutation for ofbiz createProductPromoUse method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoUses/add?`, null, req);
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
