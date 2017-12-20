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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSitePublishPoint = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWebSitePublishPoint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/webSitePublishPoints/add?`, null, req);
  }
};
export {createWebSitePublishPoint};


const updateWebSitePublishPoint = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWebSitePublishPoint method',
  args:{webSitePublishPointToBeUpdated: {type: WebSitePublishPointInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/webSitePublishPoints/${args.nullVal}?`, args.webSitePublishPointToBeUpdated, req);
  }
};
export {updateWebSitePublishPoint};


const deleteWebSitePublishPointByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWebSitePublishPointByIdUpdated method',
  args:{webSitePublishPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/webSitePublishPoints/${args.webSitePublishPointId}?`, null, req);
  }
};
export {deleteWebSitePublishPointByIdUpdated};
