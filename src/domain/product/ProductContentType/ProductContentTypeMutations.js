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
import {ProductContentTypeInputType} from '../../product/ProductContentType/ProductContentTypeInputType.js';
import {ProductContentTypeResponseType} from '../../product/ProductContentType/ProductContentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductContentType = {
  type: ProductContentTypeResponseType,
  description: 'mutation for ofbiz createProductContentType method',
  args:{productContentTypeToBeAdded: {type: ProductContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productContentTypes/add?`, args.productContentTypeToBeAdded, req);
  }
};
export {createProductContentType};


const updateProductContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductContentType method',
  args:{productContentTypeToBeUpdated: {type: ProductContentTypeInputType},productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productContentTypes/${args.productContentTypeId}?`, args.productContentTypeToBeUpdated, req);
  }
};
export {updateProductContentType};


const deleteProductContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductContentTypeByIdUpdated method',
  args:{productContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productContentTypes/${args.productContentTypeId}?`, null, req);
  }
};
export {deleteProductContentTypeByIdUpdated};
