import{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

import {postToUrl, deleteToUrl} from '../framework/ofbizCon.js';
import {ProductType} from '../domain/product/ProductType.js';
import {ProductCategoryType} from '../domain/product/ProductCategoryType.js';

const createProduct = {

  type: ProductType,
  description: 'adds a Product to ofbiz db',

  args: {
    productName: {type: GraphQLString},
  },
  resolve: (root, args, {req}) => postToUrl(`products/add`, args, req)

};

const createProductCategory = {
  type: ProductCategoryType,
  description: 'adds a ProductCategory to the ofbiz db',
  args: {
    categoryName: {
      type: GraphQLString
    }
  },
  resolve: (root, args, {req}) => postToUrl(`productCategorys/add`, args, req)
};

const editProductCategory = {
  type: ProductCategoryType,
  description: 'edits a ProductCategory in the ofbiz db',
  args: {
    productCategoryId: {
      type: GraphQLString
    },
    categoryName: {
      type: GraphQLString
    }
  },
resolve: (root, args, {req}) => putToUrl(`productCategorys/${args.productCategoryId}`, args, req)
};

const deleteProductCategory = {
  type: ProductCategoryType,
  description: 'removes a ProductCategory from the ofbiz db',
  args: {
    productCategoryId: {
      type: GraphQLString
    },
  },
  resolve: (root, args, {req}) => deleteToUrl(`productCategorys/${args.productCategoryId}`, args, req)
};


const deleteProduct = {
  type: ProductType,
  description: 'adds a product to ofbiz db',

  args: {
    productId: {type: GraphQLString},
  },
  resolve: (root, args, {req}) => deleteToUrl(`products/${args.productId}`, null, req)

};

const productMutations = ({
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  createProductCategory: createProductCategory,
  editProductCategory: editProductCategory,
  deleteProductCategory: deleteProductCategory,


});

export {
  productMutations
};
