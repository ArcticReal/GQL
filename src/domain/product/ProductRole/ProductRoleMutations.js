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
import {ProductRoleInputType} from '../../product/ProductRole/ProductRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductRole method',
  args:{productRoleToBeAdded: {type: ProductRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productRoles/add?`, args.productRoleToBeAdded, req);
  }
};
export {createProductRole};


const deleteProductRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductRoleByIdUpdated method',
  args:{productRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productRoles/${args.productRoleId}?`, null, req);
  }
};
export {deleteProductRoleByIdUpdated};


const updateProductRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductRole method',
  args:{productRoleToBeUpdated: {type: ProductRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productRoles/${args.roleTypeId}?`, args.productRoleToBeUpdated, req);
  }
};
export {updateProductRole};
