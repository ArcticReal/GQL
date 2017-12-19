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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContactMechLink = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMechLink method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechLinks/add?`, null, req);
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
