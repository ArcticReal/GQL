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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const addProtectedViewToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz addProtectedViewToSecurityGroup method',
  args:{viewNameId: {type: GraphQLString},maxHitsDuration: {type: GraphQLInt},tarpitDuration: {type: GraphQLInt},groupId: {type: GraphQLString},maxHits: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/addProtectedViewToSecurityGroup?viewNameId=${args.viewNameId}maxHitsDuration=${args.maxHitsDuration}tarpitDuration=${args.tarpitDuration}groupId=${args.groupId}maxHits=${args.maxHits}`, null, req);
  }
};
export {addProtectedViewToSecurityGroup};


const addSecurityPermissionToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz addSecurityPermissionToSecurityGroup method',
  args:{permissionId: {type: GraphQLString},groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/addSecurityPermissionToSecurityGroup?permissionId=${args.permissionId}groupId=${args.groupId}`, null, req);
  }
};
export {addSecurityPermissionToSecurityGroup};


const addUserLoginToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz addUserLoginToSecurityGroup method',
  args:{userLoginId: {type: GraphQLString},groupId: {type: GraphQLString},fromDate: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/addUserLoginToSecurityGroup?userLoginId=${args.userLoginId}groupId=${args.groupId}fromDate=${args.fromDate}thruDate=${args.thruDate}`, null, req);
  }
};
export {addUserLoginToSecurityGroup};


const createSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz createSecurityGroup method',
  args:{groupId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/createSecurityGroup?groupId=${args.groupId}description=${args.description}`, null, req);
  }
};
export {createSecurityGroup};


const createSecurityPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz createSecurityPermission method',
  args:{permissionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/createSecurityPermission?permissionId=${args.permissionId}description=${args.description}`, null, req);
  }
};
export {createSecurityPermission};


const createUserLoginSecurityQuestion = {
  type: ResponseType,
  description: 'mutation for ofbiz createUserLoginSecurityQuestion method',
  args:{userLoginId: {type: GraphQLString},questionEnumId: {type: GraphQLString},securityAnswer: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/createUserLoginSecurityQuestion?userLoginId=${args.userLoginId}questionEnumId=${args.questionEnumId}securityAnswer=${args.securityAnswer}`, null, req);
  }
};
export {createUserLoginSecurityQuestion};


const deleteSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteSecurityGroup method',
  args:{groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/deleteSecurityGroup?groupId=${args.groupId}`, null, req);
  }
};
export {deleteSecurityGroup};


const removeProtectedViewFromSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz removeProtectedViewFromSecurityGroup method',
  args:{viewNameId: {type: GraphQLString},groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/removeProtectedViewFromSecurityGroup?viewNameId=${args.viewNameId}groupId=${args.groupId}`, null, req);
  }
};
export {removeProtectedViewFromSecurityGroup};


const removeSecurityPermissionFromSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz removeSecurityPermissionFromSecurityGroup method',
  args:{permissionId: {type: GraphQLString},groupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/removeSecurityPermissionFromSecurityGroup?permissionId=${args.permissionId}groupId=${args.groupId}`, null, req);
  }
};
export {removeSecurityPermissionFromSecurityGroup};


const removeUserLoginSecurityQuestion = {
  type: ResponseType,
  description: 'mutation for ofbiz removeUserLoginSecurityQuestion method',
  args:{userLoginId: {type: GraphQLString},questionEnumId: {type: GraphQLString},securityAnswer: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/removeUserLoginSecurityQuestion?userLoginId=${args.userLoginId}questionEnumId=${args.questionEnumId}securityAnswer=${args.securityAnswer}`, null, req);
  }
};
export {removeUserLoginSecurityQuestion};


const removeUserLoginToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz removeUserLoginToSecurityGroup method',
  args:{userLoginId: {type: GraphQLString},fromDate: {type: GraphQLString},groupId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/removeUserLoginToSecurityGroup?userLoginId=${args.userLoginId}fromDate=${args.fromDate}groupId=${args.groupId}thruDate=${args.thruDate}`, null, req);
  }
};
export {removeUserLoginToSecurityGroup};


const securityPermissionCheck = {
  type: ResponseType,
  description: 'mutation for ofbiz securityPermissionCheck method',
  args:{primaryPermission: {type: GraphQLString},altPermission: {type: GraphQLString},resourceDescription: {type: GraphQLString},mainAction: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/securityPermissionCheck?primaryPermission=${args.primaryPermission}altPermission=${args.altPermission}resourceDescription=${args.resourceDescription}mainAction=${args.mainAction}`, null, req);
  }
};
export {securityPermissionCheck};


const updateProtectedViewToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateProtectedViewToSecurityGroup method',
  args:{viewNameId: {type: GraphQLString},maxHitsDuration: {type: GraphQLInt},tarpitDuration: {type: GraphQLInt},groupId: {type: GraphQLString},maxHits: {type: GraphQLInt}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/updateProtectedViewToSecurityGroup?viewNameId=${args.viewNameId}maxHitsDuration=${args.maxHitsDuration}tarpitDuration=${args.tarpitDuration}groupId=${args.groupId}maxHits=${args.maxHits}`, null, req);
  }
};
export {updateProtectedViewToSecurityGroup};


const updateSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSecurityGroup method',
  args:{groupId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/updateSecurityGroup?groupId=${args.groupId}description=${args.description}`, null, req);
  }
};
export {updateSecurityGroup};


const updateSecurityPermission = {
  type: ResponseType,
  description: 'mutation for ofbiz updateSecurityPermission method',
  args:{permissionId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/updateSecurityPermission?permissionId=${args.permissionId}description=${args.description}`, null, req);
  }
};
export {updateSecurityPermission};


const updateUserLoginSecurityQuestion = {
  type: ResponseType,
  description: 'mutation for ofbiz updateUserLoginSecurityQuestion method',
  args:{userLoginId: {type: GraphQLString},questionEnumId: {type: GraphQLString},securityAnswer: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/updateUserLoginSecurityQuestion?userLoginId=${args.userLoginId}questionEnumId=${args.questionEnumId}securityAnswer=${args.securityAnswer}`, null, req);
  }
};
export {updateUserLoginSecurityQuestion};


const updateUserLoginToSecurityGroup = {
  type: ResponseType,
  description: 'mutation for ofbiz updateUserLoginToSecurityGroup method',
  args:{userLoginId: {type: GraphQLString},fromDate: {type: GraphQLString},groupId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/commonSecurity/updateUserLoginToSecurityGroup?userLoginId=${args.userLoginId}fromDate=${args.fromDate}groupId=${args.groupId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateUserLoginToSecurityGroup};
