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
import {ProductStoreKeywordOvrdInputType} from '../../product/ProductStoreKeywordOvrd/ProductStoreKeywordOvrdInputType.js';
import {ProductStoreKeywordOvrdResponseType} from '../../product/ProductStoreKeywordOvrd/ProductStoreKeywordOvrdResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreKeywordOvrd = {
  type: ProductStoreKeywordOvrdResponseType,
  description: 'mutation for ofbiz createProductStoreKeywordOvrd method',
  args:{productStoreKeywordOvrdToBeAdded: {type: ProductStoreKeywordOvrdInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreKeywordOvrds/add?`, args.productStoreKeywordOvrdToBeAdded, req);
  }
};
export {createProductStoreKeywordOvrd};


const updateProductStoreKeywordOvrd = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreKeywordOvrd method',
  args:{productStoreKeywordOvrdToBeUpdated: {type: ProductStoreKeywordOvrdInputType},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreKeywordOvrds/${args.keyword}?`, args.productStoreKeywordOvrdToBeUpdated, req);
  }
};
export {updateProductStoreKeywordOvrd};


const deleteProductStoreKeywordOvrdByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreKeywordOvrdByIdUpdated method',
  args:{productStoreKeywordOvrdId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreKeywordOvrds/${args.productStoreKeywordOvrdId}?`, null, req);
  }
};
export {deleteProductStoreKeywordOvrdByIdUpdated};
