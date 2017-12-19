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
import {WebSiteContentInputType} from '../../content/WebSiteContent/WebSiteContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteContent method',
  args:{webSiteContentToBeAdded: {type: WebSiteContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/webSiteContents/add?`, args.webSiteContentToBeAdded, req);
  }
};
export {createWebSiteContent};


const updateWebSiteContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContent method',
  args:{webSiteContentToBeUpdated: {type: WebSiteContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/webSiteContents/${args.nullVal}?`, args.webSiteContentToBeUpdated, req);
  }
};
export {updateWebSiteContent};


const deleteWebSiteContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSiteContentByIdUpdated method',
  args:{webSiteContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/webSiteContents/${args.webSiteContentId}?`, null, req);
  }
};
export {deleteWebSiteContentByIdUpdated};
