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
import {ContactMechAttributeInputType} from '../../party/ContactMechAttribute/ContactMechAttributeInputType.js';
import {ContactMechAttributeResponseType} from '../../party/ContactMechAttribute/ContactMechAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechAttribute = {
  type: ContactMechAttributeResponseType,
  description: 'mutation for ofbiz createContactMechAttribute method',
  args:{contactMechAttributeToBeAdded: {type: ContactMechAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechAttributes/add?`, args.contactMechAttributeToBeAdded, req);
  }
};
export {createContactMechAttribute};


const updateContactMechAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechAttribute method',
  args:{contactMechAttributeToBeUpdated: {type: ContactMechAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechAttributes/${args.attrName}?`, args.contactMechAttributeToBeUpdated, req);
  }
};
export {updateContactMechAttribute};


const deleteContactMechAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechAttributeByIdUpdated method',
  args:{contactMechAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechAttributes/${args.contactMechAttributeId}?`, null, req);
  }
};
export {deleteContactMechAttributeByIdUpdated};
