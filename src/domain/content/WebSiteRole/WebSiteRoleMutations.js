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
import {WebSiteRoleResponseType} from '../../content/WebSiteRole/WebSiteRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSiteRole = {
  type: WebSiteRoleResponseType,
  description: 'mutation for ofbiz createWebSiteRole method',
  args:{webSiteRoleToBeAdded: {type: WebSiteRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webSiteRoles/add?`, args.webSiteRoleToBeAdded, req);
  }
};
export {createWebSiteRole};


const updateWebSiteRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteRole method',
  args:{webSiteRoleToBeUpdated: {type: WebSiteRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webSiteRoles/${args.roleTypeId}?`, args.webSiteRoleToBeUpdated, req);
  }
};
export {updateWebSiteRole};


const deleteWebSiteRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSiteRoleByIdUpdated method',
  args:{webSiteRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webSiteRoles/${args.webSiteRoleId}?`, null, req);
  }
};
export {deleteWebSiteRoleByIdUpdated};
