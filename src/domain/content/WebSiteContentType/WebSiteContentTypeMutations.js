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
import {WebSiteContentTypeInputType} from '../../content/WebSiteContentType/WebSiteContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createWebSiteContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createWebSiteContentType method',
  args:{webSiteContentTypeToBeAdded: {type: WebSiteContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/webSiteContentTypes/add?`, args.webSiteContentTypeToBeAdded, req);
  }
};
export {createWebSiteContentType};


const updateWebSiteContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContentType method',
  args:{webSiteContentTypeToBeUpdated: {type: WebSiteContentTypeInputType},webSiteContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/webSiteContentTypes/${args.webSiteContentTypeId}?`, args.webSiteContentTypeToBeUpdated, req);
  }
};
export {updateWebSiteContentType};


const deleteWebSiteContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSiteContentTypeByIdUpdated method',
  args:{webSiteContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/webSiteContentTypes/${args.webSiteContentTypeId}?`, null, req);
  }
};
export {deleteWebSiteContentTypeByIdUpdated};
