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
import {ProductStoreGroupRoleInputType} from '../../product/ProductStoreGroupRole/ProductStoreGroupRoleInputType.js';
import {ProductStoreGroupRoleResponseType} from '../../product/ProductStoreGroupRole/ProductStoreGroupRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreGroupRole = {
  type: ProductStoreGroupRoleResponseType,
  description: 'mutation for ofbiz createProductStoreGroupRole method',
  args:{productStoreGroupRoleToBeAdded: {type: ProductStoreGroupRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreGroupRoles/add?`, args.productStoreGroupRoleToBeAdded, req);
  }
};
export {createProductStoreGroupRole};


const deleteProductStoreGroupRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreGroupRoleByIdUpdated method',
  args:{productStoreGroupRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreGroupRoles/${args.productStoreGroupRoleId}?`, null, req);
  }
};
export {deleteProductStoreGroupRoleByIdUpdated};


const updateProductStoreGroupRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreGroupRole method',
  args:{productStoreGroupRoleToBeUpdated: {type: ProductStoreGroupRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreGroupRoles/${args.roleTypeId}?`, args.productStoreGroupRoleToBeUpdated, req);
  }
};
export {updateProductStoreGroupRole};
