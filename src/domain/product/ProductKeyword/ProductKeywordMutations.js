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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductKeyword method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productKeywords/add?`, null, req);
  }
};
export {createProductKeyword};


const updateProductKeyword = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductKeyword method',
  args:{productKeywordToBeUpdated: {type: ProductKeywordInputType},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productKeywords/${args.keyword}?`, args.productKeywordToBeUpdated, req);
  }
};
export {updateProductKeyword};


const deleteProductKeywordByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductKeywordByIdUpdated method',
  args:{productKeywordId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productKeywords/${args.productKeywordId}?`, null, req);
  }
};
export {deleteProductKeywordByIdUpdated};
