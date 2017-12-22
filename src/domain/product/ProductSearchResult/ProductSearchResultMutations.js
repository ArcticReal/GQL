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
import {ProductSearchResultResponseType} from '../../product/ProductSearchResult/ProductSearchResultResponseType.js';
import {ProductSearchResultInputType} from '../../product/ProductSearchResult/ProductSearchResultInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductSearchResult = {
  type: ProductSearchResultResponseType,
  description: 'mutation for ofbiz createProductSearchResult method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productSearchResults/add?`, null, req);
  }
};
export {createProductSearchResult};


const updateProductSearchResult = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductSearchResult method',
  args:{productSearchResultToBeUpdated: {type: ProductSearchResultInputType},productSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productSearchResults/${args.productSearchResultId}?`, args.productSearchResultToBeUpdated, req);
  }
};
export {updateProductSearchResult};


const deleteProductSearchResultByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductSearchResultByIdUpdated method',
  args:{productSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productSearchResults/${args.productSearchResultId}?`, null, req);
  }
};
export {deleteProductSearchResultByIdUpdated};
