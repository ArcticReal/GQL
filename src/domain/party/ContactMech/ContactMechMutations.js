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
import {ContactMechResponseType} from '../../party/ContactMech/ContactMechResponseType.js';
import {ContactMechInputType} from '../../party/ContactMech/ContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMech = {
  type: ContactMechResponseType,
  description: 'mutation for ofbiz createContactMech method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMechs/add?`, null, req);
  }
};
export {createContactMech};


const updateContactMech = {
  type: ResponseType,
  description: 'mutation for ofbiz updateContactMech method',
  args:{contactMechToBeUpdated: {type: ContactMechInputType},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMechs/${args.contactMechId}?`, args.contactMechToBeUpdated, req);
  }
};
export {updateContactMech};


const deleteContactMechByIdUpdated = {
  type: ResponseType,
  description: 'mutation for ofbiz deleteContactMechByIdUpdated method',
  args:{contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMechs/${args.contactMechId}?`, null, req);
  }
};
export {deleteContactMechByIdUpdated};
