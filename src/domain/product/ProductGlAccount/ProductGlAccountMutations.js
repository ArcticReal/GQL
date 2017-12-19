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
import {ProductGlAccountInputType} from '../../product/ProductGlAccount/ProductGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductGlAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productGlAccounts/add?`, null, req);
  }
};
export {createProductGlAccount};


const updateProductGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductGlAccount method',
  args:{productGlAccountToBeUpdated: {type: ProductGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productGlAccounts/${args.nullVal}?`, args.productGlAccountToBeUpdated, req);
  }
};
export {updateProductGlAccount};


const deleteProductGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductGlAccountByIdUpdated method',
  args:{productGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productGlAccounts/${args.productGlAccountId}?`, null, req);
  }
};
export {deleteProductGlAccountByIdUpdated};
