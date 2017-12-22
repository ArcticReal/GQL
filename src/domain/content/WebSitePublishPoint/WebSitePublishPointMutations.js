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
import {WebSitePublishPointInputType} from '../../content/WebSitePublishPoint/WebSitePublishPointInputType.js';
import {WebSitePublishPointResponseType} from '../../content/WebSitePublishPoint/WebSitePublishPointResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSitePublishPoint = {
  type: WebSitePublishPointResponseType,
  description: 'mutation for ofbiz createWebSitePublishPoint method',
  args:{webSitePublishPointToBeAdded: {type: WebSitePublishPointInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webSitePublishPoints/add?`, args.webSitePublishPointToBeAdded, req);
  }
};
export {createWebSitePublishPoint};


const updateWebSitePublishPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSitePublishPoint method',
  args:{webSitePublishPointToBeUpdated: {type: WebSitePublishPointInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webSitePublishPoints/${args.nullVal}?`, args.webSitePublishPointToBeUpdated, req);
  }
};
export {updateWebSitePublishPoint};


const deleteWebSitePublishPointByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSitePublishPointByIdUpdated method',
  args:{webSitePublishPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webSitePublishPoints/${args.webSitePublishPointId}?`, null, req);
  }
};
export {deleteWebSitePublishPointByIdUpdated};
