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
import {ProductPriceActionInputType} from '../../product/ProductPriceAction/ProductPriceActionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductPriceAction = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductPriceAction method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceActions/add?`, null, req);
  }
};
export {createProductPriceAction};


const deleteProductPriceActionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceActionByIdUpdated method',
  args:{productPriceActionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceActions/${args.productPriceActionId}?`, null, req);
  }
};
export {deleteProductPriceActionByIdUpdated};


const updateProductPriceAction = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceAction method',
  args:{productPriceActionToBeUpdated: {type: ProductPriceActionInputType},productPriceActionSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceActions/${args.productPriceActionSeqId}?`, args.productPriceActionToBeUpdated, req);
  }
};
export {updateProductPriceAction};
