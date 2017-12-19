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
import {ContactMechInputType} from '../../party/ContactMech/ContactMechInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContactMech method',
  args:{contactMechToBeAdded: {type: ContactMechInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMechs/add?`, args.contactMechToBeAdded, req);
  }
};
export {createContactMech};


const updateContactMech = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMech method',
  args:{contactMechToBeUpdated: {type: ContactMechInputType},contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMechs/${args.contactMechId}?`, args.contactMechToBeUpdated, req);
  }
};
export {updateContactMech};


const deleteContactMechByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechByIdUpdated method',
  args:{contactMechId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMechs/${args.contactMechId}?`, null, req);
  }
};
export {deleteContactMechByIdUpdated};
