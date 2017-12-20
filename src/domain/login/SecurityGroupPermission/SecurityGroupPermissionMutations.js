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
import {SecurityGroupPermissionInputType} from '../../login/SecurityGroupPermission/SecurityGroupPermissionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSecurityGroupPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSecurityGroupPermission method',
  args:{securityGroupPermissionToBeAdded: {type: SecurityGroupPermissionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/securityGroup/securityGroupPermissions/add?`, args.securityGroupPermissionToBeAdded, req);
  }
};
export {createSecurityGroupPermission};


const updateSecurityGroupPermission = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSecurityGroupPermission method',
  args:{securityGroupPermissionToBeUpdated: {type: SecurityGroupPermissionInputType},permissionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/securityGroup/securityGroupPermissions/${args.permissionId}?`, args.securityGroupPermissionToBeUpdated, req);
  }
};
export {updateSecurityGroupPermission};


const deleteSecurityGroupPermissionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSecurityGroupPermissionByIdUpdated method',
  args:{securityGroupPermissionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/securityGroup/securityGroupPermissions/${args.securityGroupPermissionId}?`, null, req);
  }
};
export {deleteSecurityGroupPermissionByIdUpdated};
