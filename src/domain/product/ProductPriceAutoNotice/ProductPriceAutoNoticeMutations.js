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
import {ProductPriceAutoNoticeInputType} from '../../product/ProductPriceAutoNotice/ProductPriceAutoNoticeInputType.js';
import {ProductPriceAutoNoticeResponseType} from '../../product/ProductPriceAutoNotice/ProductPriceAutoNoticeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceAutoNotice = {
  type: ProductPriceAutoNoticeResponseType,
  description: 'mutation for ofbiz createProductPriceAutoNotice method',
  args:{productPriceAutoNoticeToBeAdded: {type: ProductPriceAutoNoticeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceAutoNotices/add?`, args.productPriceAutoNoticeToBeAdded, req);
  }
};
export {createProductPriceAutoNotice};


const deleteProductPriceAutoNoticeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceAutoNoticeByIdUpdated method',
  args:{productPriceAutoNoticeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceAutoNotices/${args.productPriceAutoNoticeId}?`, null, req);
  }
};
export {deleteProductPriceAutoNoticeByIdUpdated};


const updateProductPriceAutoNotice = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceAutoNotice method',
  args:{productPriceAutoNoticeToBeUpdated: {type: ProductPriceAutoNoticeInputType},productPriceNoticeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceAutoNotices/${args.productPriceNoticeId}?`, args.productPriceAutoNoticeToBeUpdated, req);
  }
};
export {updateProductPriceAutoNotice};
