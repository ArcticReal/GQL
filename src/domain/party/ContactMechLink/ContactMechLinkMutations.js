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
import {ContactMechLinkInputType} from '../../party/ContactMechLink/ContactMechLinkInputType.js';
import {ContactMechLinkResponseType} from '../../party/ContactMechLink/ContactMechLinkResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechLink = {
  type: ContactMechLinkResponseType,
  description: 'mutation for ofbiz createContactMechLink method',
  args:{contactMechLinkToBeAdded: {type: ContactMechLinkInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechLinks/add?`, args.contactMechLinkToBeAdded, req);
  }
};
export {createContactMechLink};


const deleteContactMechLinkByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechLinkByIdUpdated method',
  args:{contactMechLinkId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechLinks/${args.contactMechLinkId}?`, null, req);
  }
};
export {deleteContactMechLinkByIdUpdated};


const updateContactMechLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechLink method',
  args:{contactMechLinkToBeUpdated: {type: ContactMechLinkInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechLinks/${args.nullVal}?`, args.contactMechLinkToBeUpdated, req);
  }
};
export {updateContactMechLink};
