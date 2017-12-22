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
import {ContactListPartyStatusInputType} from '../../marketing/ContactListPartyStatus/ContactListPartyStatusInputType.js';
import {ContactListPartyStatusResponseType} from '../../marketing/ContactListPartyStatus/ContactListPartyStatusResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactListPartyStatus = {
  type: ContactListPartyStatusResponseType,
  description: 'mutation for ofbiz createContactListPartyStatus method',
  args:{contactListPartyStatusToBeAdded: {type: ContactListPartyStatusInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/contactListPartyStatuss/add?`, args.contactListPartyStatusToBeAdded, req);
  }
};
export {createContactListPartyStatus};


const deleteContactListPartyStatusByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactListPartyStatusByIdUpdated method',
  args:{contactListPartyStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/contactListPartyStatuss/${args.contactListPartyStatusId}?`, null, req);
  }
};
export {deleteContactListPartyStatusByIdUpdated};


const updateContactListPartyStatus = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListPartyStatus method',
  args:{contactListPartyStatusToBeUpdated: {type: ContactListPartyStatusInputType},partyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/contactListPartyStatuss/${args.partyId}?`, args.contactListPartyStatusToBeUpdated, req);
  }
};
export {updateContactListPartyStatus};
