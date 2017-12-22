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
import {ProductKeywordInputType} from '../../product/ProductKeyword/ProductKeywordInputType.js';
import {ProductKeywordResponseType} from '../../product/ProductKeyword/ProductKeywordResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductKeyword = {
  type: ProductKeywordResponseType,
  description: 'mutation for ofbiz createProductKeyword method',
  args:{productKeywordToBeAdded: {type: ProductKeywordInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productKeywords/add?`, args.productKeywordToBeAdded, req);
  }
};
export {createProductKeyword};


const updateProductKeyword = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductKeyword method',
  args:{productKeywordToBeUpdated: {type: ProductKeywordInputType},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productKeywords/${args.keyword}?`, args.productKeywordToBeUpdated, req);
  }
};
export {updateProductKeyword};


const deleteProductKeywordByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductKeywordByIdUpdated method',
  args:{productKeywordId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productKeywords/${args.productKeywordId}?`, null, req);
  }
};
export {deleteProductKeywordByIdUpdated};
