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
import {ProductStoreInputType} from '../../product/ProductStore/ProductStoreInputType.js';
import {ProductStoreResponseType} from '../../product/ProductStore/ProductStoreResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStore = {
  type: ProductStoreResponseType,
  description: 'mutation for ofbiz createProductStore method',
  args:{productStoreToBeAdded: {type: ProductStoreInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStores/add?`, args.productStoreToBeAdded, req);
  }
};
export {createProductStore};


const updateProductStore = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStore method',
  args:{productStoreToBeUpdated: {type: ProductStoreInputType},productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStores/${args.productStoreId}?`, args.productStoreToBeUpdated, req);
  }
};
export {updateProductStore};


const deleteProductStoreByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreByIdUpdated method',
  args:{productStoreId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStores/${args.productStoreId}?`, null, req);
  }
};
export {deleteProductStoreByIdUpdated};
