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
import {ProductInputType} from '../../product/Product/ProductInputType.js';
import {ProductResponseType} from '../../product/Product/ProductResponseType.js';
import {ProductDetailsDTOInputType} from '../../dto/ProductDetailsDTOInputType.js';
import {ProductDetailsDTOResponseType} from '../../dto/ProductDetailsDTOResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProduct = {
  type: ProductResponseType,
  description: 'mutation for ofbiz createProduct method',
  args:{productToBeAdded: {type: ProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`products/add?`, args.productToBeAdded, req);
  }
};
export {createProduct};


const addProductWithDetails = {
  type: ProductDetailsDTOResponseType,
  description: 'mutation for ofbiz addProductWithDetails method',
  args:{dto: {type: ProductDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`products/addDetailed?`, args.dto, req);
  }
};
export {addProductWithDetails};


const updateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProduct method',
  args:{productToBeUpdated: {type: ProductInputType},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}?`, args.productToBeUpdated, req);
  }
};
export {updateProduct};


const deleteProductByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteProductByIdUpdated method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`products/${args.productId}?`, null, req);
  }
};
export {deleteProductByIdUpdated};


const updateProductWithDetails = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductWithDetails method',
  args:{productId: {type: GraphQLString},dto: {type: ProductDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}/details?`, args.dto, req);
  }
};
export {updateProductWithDetails};


const updateCategories = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateCategories method',
  args:{productId: {type: GraphQLString},newCategoryIds: {type: new GraphQLList(GraphQLString)}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}/updateCategories?`, args.newCategoryIds, req);
  }
};
export {updateCategories};
