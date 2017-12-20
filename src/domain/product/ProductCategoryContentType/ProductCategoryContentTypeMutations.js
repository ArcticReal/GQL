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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryContentTypes/add?`, null, req);
  }
};
export {createProductCategoryContentType};


const updateProductCategoryContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryContentType method',
  args:{productCategoryContentTypeToBeUpdated: {type: ProductCategoryContentTypeInputType},prodCatContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryContentTypes/${args.prodCatContentTypeId}?`, args.productCategoryContentTypeToBeUpdated, req);
  }
};
export {updateProductCategoryContentType};


const deleteProductCategoryContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryContentTypeByIdUpdated method',
  args:{productCategoryContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryContentTypes/${args.productCategoryContentTypeId}?`, null, req);
  }
};
export {deleteProductCategoryContentTypeByIdUpdated};
