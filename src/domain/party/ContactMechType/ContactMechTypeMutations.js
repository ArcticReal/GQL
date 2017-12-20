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
import {ContactMechTypeInputType} from '../../party/ContactMechType/ContactMechTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContactMechType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContactMechType method',
  args:{contactMechTypeToBeAdded: {type: ContactMechTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/contactMech/contactMechTypes/add?`, args.contactMechTypeToBeAdded, req);
  }
};
export {createContactMechType};


const updateContactMechType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContactMechType method',
  args:{contactMechTypeToBeUpdated: {type: ContactMechTypeInputType},contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/contactMech/contactMechTypes/${args.contactMechTypeId}?`, args.contactMechTypeToBeUpdated, req);
  }
};
export {updateContactMechType};


const deleteContactMechTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContactMechTypeByIdUpdated method',
  args:{contactMechTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/contactMech/contactMechTypes/${args.contactMechTypeId}?`, null, req);
  }
};
export {deleteContactMechTypeByIdUpdated};
