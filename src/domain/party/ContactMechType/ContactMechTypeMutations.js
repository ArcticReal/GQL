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
import {ContactMechTypeResponseType} from '../../party/ContactMechType/ContactMechTypeResponseType.js';
import {ContactMechTypeInputType} from '../../party/ContactMechType/ContactMechTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechType = {
  type: ContactMechTypeResponseType,
  description: 'mutation for ofbiz createContactMechType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechTypes/add?`, null, req);
  }
};
export {createContactMechType};


const updateContactMechType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContactMechType method',
  args:{contactMechTypeToBeUpdated: {type: ContactMechTypeInputType},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechTypes/${args.contactMechTypeId}?`, args.contactMechTypeToBeUpdated, req);
  }
};
export {updateContactMechType};


const deleteContactMechTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContactMechTypeByIdUpdated method',
  args:{contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechTypes/${args.contactMechTypeId}?`, null, req);
  }
};
export {deleteContactMechTypeByIdUpdated};
