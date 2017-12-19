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
import {ProductCategoryInputType} from '../../product/ProductCategory/ProductCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCategory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategorys/add?`, null, req);
  }
};
export {createProductCategory};


const updateProductCategory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategory method',
  args:{productCategoryToBeUpdated: {type: ProductCategoryInputType},productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategorys/${args.productCategoryId}?`, args.productCategoryToBeUpdated, req);
  }
};
export {updateProductCategory};


const deleteProductCategoryById = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryById method',
  args:{productCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategorys/${args.productCategoryId}?`, null, req);
  }
};
export {deleteProductCategoryById};
