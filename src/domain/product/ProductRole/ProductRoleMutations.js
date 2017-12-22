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
import {ProductRoleResponseType} from '../../product/ProductRole/ProductRoleResponseType.js';
import {ProductRoleInputType} from '../../product/ProductRole/ProductRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductRole = {
  type: ProductRoleResponseType,
  description: 'mutation for ofbiz createProductRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productRoles/add?`, null, req);
  }
};
export {createProductRole};


const deleteProductRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductRoleByIdUpdated method',
  args:{productRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productRoles/${args.productRoleId}?`, null, req);
  }
};
export {deleteProductRoleByIdUpdated};


const updateProductRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductRole method',
  args:{productRoleToBeUpdated: {type: ProductRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productRoles/${args.roleTypeId}?`, args.productRoleToBeUpdated, req);
  }
};
export {updateProductRole};
