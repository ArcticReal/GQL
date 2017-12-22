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
import {ContactListTypeInputType} from '../../marketing/ContactListType/ContactListTypeInputType.js';
import {ContactListTypeResponseType} from '../../marketing/ContactListType/ContactListTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactListType = {
  type: ContactListTypeResponseType,
  description: 'mutation for ofbiz createContactListType method',
  args:{contactListTypeToBeAdded: {type: ContactListTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/contactListTypes/add?`, args.contactListTypeToBeAdded, req);
  }
};
export {createContactListType};


const updateContactListType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactListType method',
  args:{contactListTypeToBeUpdated: {type: ContactListTypeInputType},contactListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/contactListTypes/${args.contactListTypeId}?`, args.contactListTypeToBeUpdated, req);
  }
};
export {updateContactListType};


const deleteContactListTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactListTypeByIdUpdated method',
  args:{contactListTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/contactListTypes/${args.contactListTypeId}?`, null, req);
  }
};
export {deleteContactListTypeByIdUpdated};
