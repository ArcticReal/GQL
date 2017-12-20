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
import {ContactListPartyInputType} from '../../marketing/ContactListParty/ContactListPartyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactListParty = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContactListParty method',
  args:{contactListPartyToBeAdded: {type: ContactListPartyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/contactListPartys/add?`, args.contactListPartyToBeAdded, req);
  }
};
export {createContactListParty};


const deleteContactListPartyByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContactListPartyByIdUpdated method',
  args:{contactListPartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/contactListPartys/${args.contactListPartyId}?`, null, req);
  }
};
export {deleteContactListPartyByIdUpdated};


const updateContactListParty = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContactListParty method',
  args:{contactListPartyToBeUpdated: {type: ContactListPartyInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/contactListPartys/${args.nullVal}?`, args.contactListPartyToBeUpdated, req);
  }
};
export {updateContactListParty};
