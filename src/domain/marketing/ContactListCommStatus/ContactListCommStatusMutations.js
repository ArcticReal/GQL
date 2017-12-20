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
import {ContactListCommStatusInputType} from '../../marketing/ContactListCommStatus/ContactListCommStatusInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactListCommStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContactListCommStatus method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/contactList/contactListCommStatuss/add?`, null, req);
  }
};
export {createContactListCommStatus};


const deleteContactListCommStatusByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContactListCommStatusByIdUpdated method',
  args:{contactListCommStatusId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/contactList/contactListCommStatuss/${args.contactListCommStatusId}?`, null, req);
  }
};
export {deleteContactListCommStatusByIdUpdated};


const updateContactListCommStatus = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContactListCommStatus method',
  args:{contactListCommStatusToBeUpdated: {type: ContactListCommStatusInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/contactList/contactListCommStatuss/${args.nullVal}?`, args.contactListCommStatusToBeUpdated, req);
  }
};
export {updateContactListCommStatus};
