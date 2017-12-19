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
import {ProductCategoryGlAccountInputType} from '../../product/ProductCategoryGlAccount/ProductCategoryGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCategoryGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCategoryGlAccount method',
  args:{productCategoryGlAccountToBeAdded: {type: ProductCategoryGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryGlAccounts/add?`, args.productCategoryGlAccountToBeAdded, req);
  }
};
export {createProductCategoryGlAccount};


const updateProductCategoryGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryGlAccount method',
  args:{productCategoryGlAccountToBeUpdated: {type: ProductCategoryGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryGlAccounts/${args.nullVal}?`, args.productCategoryGlAccountToBeUpdated, req);
  }
};
export {updateProductCategoryGlAccount};


const deleteProductCategoryGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryGlAccountByIdUpdated method',
  args:{productCategoryGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryGlAccounts/${args.productCategoryGlAccountId}?`, null, req);
  }
};
export {deleteProductCategoryGlAccountByIdUpdated};
