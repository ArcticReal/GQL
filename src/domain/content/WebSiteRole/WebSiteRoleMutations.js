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
import {WebSiteRoleInputType} from '../../content/WebSiteRole/WebSiteRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSiteRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWebSiteRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webSiteRoles/add?`, null, req);
  }
};
export {createWebSiteRole};


const updateWebSiteRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWebSiteRole method',
  args:{webSiteRoleToBeUpdated: {type: WebSiteRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webSiteRoles/${args.roleTypeId}?`, args.webSiteRoleToBeUpdated, req);
  }
};
export {updateWebSiteRole};


const deleteWebSiteRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWebSiteRoleByIdUpdated method',
  args:{webSiteRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webSiteRoles/${args.webSiteRoleId}?`, null, req);
  }
};
export {deleteWebSiteRoleByIdUpdated};
