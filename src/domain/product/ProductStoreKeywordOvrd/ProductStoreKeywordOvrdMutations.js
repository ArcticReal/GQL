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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductStoreKeywordOvrd = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductStoreKeywordOvrd method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreKeywordOvrds/add?`, null, req);
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
