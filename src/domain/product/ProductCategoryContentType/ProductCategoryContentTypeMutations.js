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
import {ProductCategoryContentTypeInputType} from '../../product/ProductCategoryContentType/ProductCategoryContentTypeInputType.js';
import {ProductCategoryContentTypeResponseType} from '../../product/ProductCategoryContentType/ProductCategoryContentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryContentType = {
  type: ProductCategoryContentTypeResponseType,
  description: 'mutation for ofbiz createProductCategoryContentType method',
  args:{productCategoryContentTypeToBeAdded: {type: ProductCategoryContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryContentTypes/add?`, args.productCategoryContentTypeToBeAdded, req);
  }
};
export {createProductCategoryContentType};


const updateProductCategoryContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryContentType method',
  args:{productCategoryContentTypeToBeUpdated: {type: ProductCategoryContentTypeInputType},prodCatContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryContentTypes/${args.prodCatContentTypeId}?`, args.productCategoryContentTypeToBeUpdated, req);
  }
};
export {updateProductCategoryContentType};


const deleteProductCategoryContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryContentTypeByIdUpdated method',
  args:{productCategoryContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryContentTypes/${args.productCategoryContentTypeId}?`, null, req);
  }
};
export {deleteProductCategoryContentTypeByIdUpdated};
