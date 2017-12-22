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
import {WebSiteContactListInputType} from '../../marketing/WebSiteContactList/WebSiteContactListInputType.js';
import {WebSiteContactListResponseType} from '../../marketing/WebSiteContactList/WebSiteContactListResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWebSiteContactList = {
  type: WebSiteContactListResponseType,
  description: 'mutation for ofbiz createWebSiteContactList method',
  args:{webSiteContactListToBeAdded: {type: WebSiteContactListInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/webSiteContactLists/add?`, args.webSiteContactListToBeAdded, req);
  }
};
export {createWebSiteContactList};


const updateWebSiteContactList = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWebSiteContactList method',
  args:{webSiteContactListToBeUpdated: {type: WebSiteContactListInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/webSiteContactLists/${args.nullVal}?`, args.webSiteContactListToBeUpdated, req);
  }
};
export {updateWebSiteContactList};


const deleteWebSiteContactListByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWebSiteContactListByIdUpdated method',
  args:{webSiteContactListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/webSiteContactLists/${args.webSiteContactListId}?`, null, req);
  }
};
export {deleteWebSiteContactListByIdUpdated};
