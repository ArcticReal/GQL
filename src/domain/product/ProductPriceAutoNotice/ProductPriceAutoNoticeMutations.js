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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPriceAutoNotice = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductPriceAutoNotice method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPriceAutoNotices/add?`, null, req);
  }
};
export {createProductPriceAutoNotice};


const deleteProductPriceAutoNoticeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductPriceAutoNoticeByIdUpdated method',
  args:{productPriceAutoNoticeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPriceAutoNotices/${args.productPriceAutoNoticeId}?`, null, req);
  }
};
export {deleteProductPriceAutoNoticeByIdUpdated};


const updateProductPriceAutoNotice = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductPriceAutoNotice method',
  args:{productPriceAutoNoticeToBeUpdated: {type: ProductPriceAutoNoticeInputType},productPriceNoticeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPriceAutoNotices/${args.productPriceNoticeId}?`, args.productPriceAutoNoticeToBeUpdated, req);
  }
};
export {updateProductPriceAutoNotice};
