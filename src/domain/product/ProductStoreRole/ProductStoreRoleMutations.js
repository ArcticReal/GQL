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
import {ProductStoreRoleInputType} from '../../product/ProductStoreRole/ProductStoreRoleInputType.js';
import {ProductStoreRoleResponseType} from '../../product/ProductStoreRole/ProductStoreRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreRole = {
  type: ProductStoreRoleResponseType,
  description: 'mutation for ofbiz createProductStoreRole method',
  args:{productStoreRoleToBeAdded: {type: ProductStoreRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreRoles/add?`, args.productStoreRoleToBeAdded, req);
  }
};
export {createProductStoreRole};


const deleteProductStoreRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreRoleByIdUpdated method',
  args:{productStoreRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreRoles/${args.productStoreRoleId}?`, null, req);
  }
};
export {deleteProductStoreRoleByIdUpdated};


const updateProductStoreRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreRole method',
  args:{productStoreRoleToBeUpdated: {type: ProductStoreRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreRoles/${args.roleTypeId}?`, args.productStoreRoleToBeUpdated, req);
  }
};
export {updateProductStoreRole};
