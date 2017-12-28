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
import {WebSitePathAliasInputType} from '../../content/WebSitePathAlias/WebSitePathAliasInputType.js';
import {WebSitePathAliasResponseType} from '../../content/WebSitePathAlias/WebSitePathAliasResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSitePathAlias = {
  type: WebSitePathAliasResponseType,
  description: 'mutation for ofbiz createWebSitePathAlias method',
  args:{webSitePathAliasToBeAdded: {type: WebSitePathAliasInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webSitePathAliass/add?`, args.webSitePathAliasToBeAdded, req);
  }
};
export {createWebSitePathAlias};


const updateWebSitePathAlias = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSitePathAlias method',
  args:{webSitePathAliasToBeUpdated: {type: WebSitePathAliasInputType},pathAlias: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webSitePathAliass/${args.pathAlias}?`, args.webSitePathAliasToBeUpdated, req);
  }
};
export {updateWebSitePathAlias};


const deleteWebSitePathAliasByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSitePathAliasByIdUpdated method',
  args:{webSitePathAliasId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webSitePathAliass/${args.webSitePathAliasId}?`, null, req);
  }
};
export {deleteWebSitePathAliasByIdUpdated};
