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
import {ContactListInputType} from '../../marketing/ContactList/ContactListInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactList = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContactList method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactLists/add?`, null, req);
  }
};
export {createContactList};


const updateContactList = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContactList method',
  args:{contactListToBeUpdated: {type: ContactListInputType},contactListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactLists/${args.contactListId}?`, args.contactListToBeUpdated, req);
  }
};
export {updateContactList};


const deleteContactListByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContactListByIdUpdated method',
  args:{contactListId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactLists/${args.contactListId}?`, null, req);
  }
};
export {deleteContactListByIdUpdated};
