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
import {SecurityPermissionInputType} from '../../login/SecurityPermission/SecurityPermissionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSecurityPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSecurityPermission method',
  args:{securityPermissionToBeAdded: {type: SecurityPermissionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/securityPermissions/add?`, args.securityPermissionToBeAdded, req);
  }
};
export {createSecurityPermission};


const updateSecurityPermission = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSecurityPermission method',
  args:{securityPermissionToBeUpdated: {type: SecurityPermissionInputType},permissionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/securityPermissions/${args.permissionId}?`, args.securityPermissionToBeUpdated, req);
  }
};
export {updateSecurityPermission};


const deleteSecurityPermissionByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSecurityPermissionByIdUpdated method',
  args:{securityPermissionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/securityPermissions/${args.securityPermissionId}?`, null, req);
  }
};
export {deleteSecurityPermissionByIdUpdated};
