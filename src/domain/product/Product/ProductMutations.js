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
import {ProductDetailsDTOInputType} from '../../dto/ProductDetailsDTOInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProduct method',
  args:{productToBeAdded: {type: ProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`products/add?`, args.productToBeAdded, req);
  }
};
export {createProduct};


const addProductWithDetails = {
  type: ResopnseType,
  description: 'mutation for ofbiz addProductWithDetails method',
  args:{dto: {type: ProductDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`products/addDetailed?`, args.dto, req);
  }
};
export {addProductWithDetails};


const updateProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProduct method',
  args:{productToBeUpdated: {type: ProductInputType},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}?`, args.productToBeUpdated, req);
  }
};
export {updateProduct};


const deleteProductByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductByIdUpdated method',
  args:{productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`products/${args.productId}?`, null, req);
  }
};
export {deleteProductByIdUpdated};


const updateProductWithDetails = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductWithDetails method',
  args:{productId: {type: GraphQLString},dto: {type: ProductDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}/details?`, args.dto, req);
  }
};
export {updateProductWithDetails};


const updateCategories = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCategories method',
  args:{productId: {type: GraphQLString},newCategoryIds: {type: new GraphQLList(GraphQLString)}},
  resolve: (root, args, {req}) => {
    return putToUrl(`products/${args.productId}/updateCategories?`, args.newCategoryIds, req);
  }
};
export {updateCategories};
