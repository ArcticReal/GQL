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
import {ContactListCommStatusResponseType} from '../../marketing/ContactListCommStatus/ContactListCommStatusResponseType.js';
import {ContactListCommStatusInputType} from '../../marketing/ContactListCommStatus/ContactListCommStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactListCommStatus = {
  type: ContactListCommStatusResponseType,
  description: 'mutation for ofbiz createContactListCommStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/contactListCommStatuss/add?`, null, req);
  }
};
export {createContactListCommStatus};


const deleteContactListCommStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactListCommStatusByIdUpdated method',
  args:{contactListCommStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/contactListCommStatuss/${args.contactListCommStatusId}?`, null, req);
  }
};
export {deleteContactListCommStatusByIdUpdated};


const updateContactListCommStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListCommStatus method',
  args:{contactListCommStatusToBeUpdated: {type: ContactListCommStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/contactListCommStatuss/${args.nullVal}?`, args.contactListCommStatusToBeUpdated, req);
  }
};
export {updateContactListCommStatus};
